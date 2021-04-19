let rssSelected;
let typeSelected;
let rssType;
let TypeChoose;
let endResult;
let rssForm;
let isCompact;
let compactUnitForm;
let compactUnit = 0;
let unitDisplay = {
	"ressources" : [
		{unit : '', name : 'base', value : 1},
		{unit : 'k', name : 'thousand', value : 1000},
		{unit : 'M', name : 'million', value : Math.pow(1000, 2)},
		{unit : 'G', name : 'billion', value : Math.pow(1000, 3)},
		{unit : 'T', name : 'trillion', value : Math.pow(1000, 4)}
	],
	"speed up" : [
		{unit : 'mn', name : 'minute', value : 1},
		{unit : 'h', name : 'hour', value : 60},
		{unit : 'd', name : 'day', value : 1440},
		{unit : 'y', name : 'year', value : 525600},
		{unit : 'c', name : 'century', value : 52594920}
	]
};

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function beautifyTime(value) {
	var endValue = '';
	for(var weight = (isCompact.checked) ? compactUnit : unitDisplay['speed up'].length - 1; weight >= 0; weight--) {
		if (value >= unitDisplay['speed up'][weight].value) {
			var tempValue = Math.trunc(value / unitDisplay['speed up'][weight].value)
			endValue += tempValue.toLocaleString() + unitDisplay['speed up'][weight].unit + ' ';
			value -= tempValue * unitDisplay['speed up'][weight].value;
		}
	}
	
	return ((endValue == '') ? ' 0 mn ' : endValue);
}

function beautifyRSS(value) {
	var opt = {maximumFractionDigits: 2, minimumFractionDigits: 0}
	if (isCompact.checked) {
		var weight = (isCompact.checked) ? compactUnit : 0;
		while (value < unitDisplay['ressources'][weight].value && weight > 0) weight--;
		return (value / unitDisplay['ressources'][weight].value).toLocaleString(undefined, opt) + '' + unitDisplay['ressources'][weight].unit;
	}
	else return value.toLocaleString()
}

function beautify(value) {
	return ((typeSelected == 'ressources') ? beautifyRSS(value) : beautifyTime(value));
}

function changeResultUnit(value) {
	compactUnit = value*1;
	
	CalculateItAll()
}

function CalculateItAll() {
    for(const elem in rss[typeSelected]) {
		rssSelected = elem;
		calculateIt();
	}
	
	rssSelected = rssType.value;
}

window.onload = function() {
	rssType = document.getElementById("rssType");
	TypeChoose = document.getElementById("rssOrSpeed");
	endResult = document.getElementById("endResult");
    rssForm = document.getElementById("amsRssForm");
	isCompact = document.getElementById("resultUnit");
	compactUnitForm = document.getElementById("resultUnitChoice");
	isCompact.checked = false;
	
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

function buildUnitResultChoice(elem, weight) {
    var input = document.createElement('input');
    input.type = 'radio';
    input.name = 'unitChoice';
    input.value = weight;
	input.id = 'unit-' + elem.name;
	if (weight == compactUnit) input.checked = true;
	input.onclick = function() { changeResultUnit(this.value); }
    compactUnitForm.appendChild(input);
    
	var label = document.createElement('label');
    label.htmlFor = 'unit-' + elem.name;
    label.innerHTML = capitalize(elem.name);
    compactUnitForm.appendChild(label);
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
    label.htmlFor = 'id-' + elem.name;
    label.innerHTML = elem.name + ((typeSelected == 'ressources') ? ' box ' : ' ');
    rssForm.appendChild(label);
    
    var input = document.createElement('input');
    input.type = 'number';
    input.name = elem.name;
	input.id = 'id-' + elem.name;
    input.min = 0;
    input.value = elem.Qty;
    rssForm.appendChild(input);
    
    rssForm.appendChild(document.createElement('br'));
}



function changeType() {
	typeSelected = TypeChoose.value;
    
    rssType.innerHTML = '';
    endResult.innerHTML = '';
	compactUnitForm.innerHTML = '';
    for(const elem in rss[typeSelected]) {
		buildOption(elem);
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
		calculateIt();
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
		pResult.innerHTML = "You have " + beautify(rssTotal) + ((typeSelected == 'ressources') ? ' ' : 'of ') + rssSelected + ((typeSelected == 'ressources') ? '' : ' speed up');
		pResult.style.display = 'block';
	}
}