

function CalculateItAll() {
    for(const elem in rss[typeSelected]) {
		rssSelected = elem;
		displayIt(calculateIt());
	}
	
	rssSelected = rssType.value;
}

window.onload = function() {
	rssType = document.getElementById("rssType");
	typeChoose = document.getElementById("rssOrSpeed");
	endResult = document.getElementById("endResult");
    rssForm = document.getElementById("amsRssForm");
	isCompact = document.getElementById("resultUnit");
	compactUnitForm = document.getElementById("resultUnitChoice");
	isCompact.checked = false;
	compactUnitForm.style.display = 'none';
	
	for(var type in rss) {
		buildOption(type, typeChoose);
	}
	changeType();
}

function buildUnitResultChoice(elem, weight) {
    var input = document.createElement('input');
    input.type = 'radio';
    input.name = 'unitChoice';
    input.value = weight;
	input.id = 'unit-' + elem.name;
	if (weight == compactUnit) input.checked = true;
	input.onclick = function() { changeResultUnit(this.value); }
    compactUnitForm.appendChild(input);
    
	buildLabel(elem, compactUnitForm);
}

function changeType() {
	typeSelected = typeChoose.value;
    
    rssType.innerHTML = '';
    endResult.innerHTML = '';
	compactUnitForm.innerHTML = '';
    for(const elem in rss[typeSelected]) {
		buildOption(elem, rssType);
		buildResult(elem);
	}
	if (unitDisplay[typeSelected].length - 1 < compactUnit) compactUnit = unitDisplay[typeSelected].length - 1;
    for(var i = 0; i < unitDisplay[typeSelected].length; i++) {
		buildUnitResultChoice(unitDisplay[typeSelected][i], i);
	}
	
	document.getElementById("rssTypeLabel").innerHTML = ((typeSelected == 'ressources') ? 'Choose rss type :' : 'Choose speed up type :');
	changeIt();
	
    for(const elem in rss[typeSelected]) {
		rssSelected = elem;
		displayIt(calculateIt());
	}
	
	rssSelected = rssType.value;
}

function changeIt() {
	rssSelected = rssType.value;
    
    rssForm.innerHTML = '';
    for(const elem of rss[typeSelected][rssSelected]) buildForm(elem);
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
		displayIt(0);
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
	displayIt(calculateIt());
}

function CalculateTotal() {
	var tempTotal = 0;
    for(const elem in rss[typeSelected]) {
		rssSelected = elem;
		tempTotal += calculateIt();
	}
	
	rssSelected = 'total';
	
	alert(textResult(tempTotal));
	
	rssSelected = rssType.value;
}

function displayIt(value) {
	var pResult = document.getElementById("endResult-"+rssSelected);
	pResult.innerHTML = textResult(beautify(value));
	pResult.style.display = (value == 0) ? 'none' : 'block';
	//return textTemp;
}