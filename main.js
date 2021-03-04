let rssSelected;
let typeSelected;
let rssType;
let TypeChoose;
let endResult;
let rssForm;

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function convertToTime(value) {
	var endValue = '';
	if (value >= 1440) {
		var valueDay = Math.trunc(value / 1440)
		endValue += valueDay + 'd ';
		value -= valueDay * 1440;
	}
	if (value >= 60) {
		var valueHour = Math.trunc(value / 60)
		endValue += valueHour + 'h ';
		value -= valueHour * 60;
	}
	if (value > 0) {
		endValue += value + 'mn';
	}
	
	return ((endValue == '') ? ' 0 mn ' : endValue);
}



window.onload = function() {
	rssType = document.getElementById("rssType");
	TypeChoose = document.getElementById("rssOrSpeed");
	endResult = document.getElementById("endResult");
    rssForm = document.getElementById("amsRssForm");
	
	for(var type in rss) {
		buildOtionChoose(type);
	}
	changeType();
}



function buildOtionChoose(type) {
	var optionChoose = document.createElement('option');
    optionChoose.value = type;
    optionChoose.innerHTML = capitalize(type);
    TypeChoose.appendChild(optionChoose);
}

function buildOption(elem) {
	var optionRSS = document.createElement('option');
    optionRSS.value = elem;
    optionRSS.innerHTML = capitalize(elem);
    rssType.appendChild(optionRSS);
}

function buildResult(elem) {
	var pResult = document.createElement('p');
    pResult.id = 'endResult-' + elem;
    pResult.innerHTML = 'You have 0 ' + ((typeSelected == 'speed up') ? 'mn of ' : '') + elem + ((typeSelected == 'speed up') ? ' speed up' : '');
	pResult.style.display = 'none';
    endResult.appendChild(pResult);
}

function buildForm(elem) {
	var label = document.createElement('label');
    label.for = elem.name;
    label.innerHTML = elem.name + ((typeSelected == 'ressources') ? ' box ' : ' ');
    rssForm.appendChild(label);
    
    var input = document.createElement('input');
    input.type = 'number';
    input.name = elem.name;
    input.min = 0;
    input.value = elem.Qty;
    rssForm.appendChild(input);
    
    rssForm.appendChild(document.createElement('br'));
}



function changeType() {
	typeSelected = TypeChoose.value;
    
    rssType.innerHTML = '';
    endResult.innerHTML = '';
    for(const elem in rss[typeSelected]) {
		buildOption(elem);
		buildResult(elem);
	}
	
	document.getElementById("rssTypeLabel").innerHTML = ((typeSelected == 'ressources') ? 'Choose rss type :' : 'Choose speed up type :');
	changeIt();
	
    for(const elem in rss[typeSelected]) {
		rssSelected = elem;
		calculateIt();
	}
	
	rssSelected = rssType.value;
}

function changeIt() {
	rssSelected = rssType.value;
    
    rssForm.innerHTML = '';
    for(const elem of rss[typeSelected][rssSelected]) buildForm(elem);
}



function saveIt() {
    var result = document.createElement('p');
	result.innerHTML = "you have " + CalculateIt().toLocaleString() + " " + rssType;
    endResult.appendChild(result);
}

function copyIt() {
	var textToCopy = ''
	for(var elem in rss[typeSelected]) {
		var textTemp = document.getElementById("endResult-"+elem).innerHTML
		if(textTemp.slice(8,11) != ' 0 ') textToCopy += textTemp + '\n';
	}
	
	navigator.clipboard.writeText(textToCopy.slice(0,-1));
}

function resetIt() {
	if(confirm('This will erase value for ' + rssSelected + ' , are you sure you wanna continue?')) {
		var pResult = document.getElementById("endResult-"+rssSelected);
		for(const value of rss[typeSelected][rssSelected]) {
			value.Qty = 0;
		}
		changeIt();
		pResult.innerHTML = 'You have 0' + ((typeSelected == 'ressources') ? ' ' : ' of ') + rssSelected + ((typeSelected == 'ressources') ? '' : ' speed up');
		pResult.style.display = 'none';
	}
}

function resetItAll() {
	if(confirm("This will erase all value, are you sure you wanna continue?")) {
		for(var type in rss) {
			for(const elem in rss[type]) {
				for(const value of rss[type][elem]) {
					value.Qty = 0;
				}
			}
		}
		changeType();
	}
}

function updateIt() {
	var formData = new FormData(rssForm);
	var i = 0;
    for(var elem of formData.entries()) {
	  rss[typeSelected][rssSelected][i].Qty = elem[1];
	  i++;
    }
	calculateIt();
}

function calculateIt() {
	var pResult = document.getElementById("endResult-"+rssSelected);
	var rssTotal = 0;

	for(const elem of rss[typeSelected][rssSelected]) if(elem.Qty > 0) rssTotal += elem.Qty * elem.value;
	
	if(rssTotal != 0) {
		rssTotal = ((typeSelected == 'ressources') ? rssTotal.toLocaleString() : convertToTime(rssTotal));
		pResult.innerHTML = "You have " + rssTotal + ((typeSelected == 'ressources') ? ' ' : ' of ') + rssSelected + ((typeSelected == 'ressources') ? '' : ' speed up');
		pResult.style.display = 'block';
	}
}