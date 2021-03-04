let rssType;
let typeChosen;

var rss = {
	"ressources" : {
		"paint"	: [
			{name : "10 paint",		value : 10},
			{name : "100 paint",	value : 100},
			{name : "1k paint", 	value : 1000},
			{name : "2k paint", 	value : 2000},
			{name : "4k paint", 	value : 4000},
			{name : "10k paint", 	value : 10000},
			{name : "30k paint", 	value : 30000},
			{name : "50k paint", 	value : 50000},
			{name : "150k paint", 	value : 150000},
			{name : "500k paint", 	value : 500000},
			{name : "1.5M paint", 	value : 1500000},
			{name : "5M paint", 	value : 5000000},
			{name : "25M paint", 	value : 25000000},
			{name : "50M paint", 	value : 50000000}
		],
		"plastic" : [
			{name : "10 plastic",	value : 10},
			{name : "100 plastic",	value : 100},
			{name : "1k plastic", 	value : 1000},
			{name : "2k plastic", 	value : 2000},
			{name : "4k plastic", 	value : 4000},
			{name : "10k plastic", 	value : 10000},
			{name : "30k plastic", 	value : 30000},
			{name : "50k plastic", 	value : 50000},
			{name : "150k plastic", value : 150000},
			{name : "500k plastic", value : 500000},
			{name : "1.5M plastic", value : 1500000},
			{name : "5M plastic", 	value : 5000000},
			{name : "25M plastic", 	value : 25000000},
			{name : "50M plastic", 	value : 50000000}
		],
		"energy" : [
			{name : "150 energy",	value : 150},
			{name : "300 energy",	value : 300},
			{name : "600 energy",	value : 600},
			{name : "1.6k energy",	value : 1600},
			{name : "5k energy",	value : 5000},
			{name : "8k energy",	value : 8000},
			{name : "25k energy",	value : 25000},
			{name : "80k energy",	value : 80000},
			{name : "250k energy",	value : 250000},
			{name : "800k energy",	value : 800000},
			{name : "4M energy",	value : 4000000},
			{name : "8M energy",	value : 8000000}
		],
		"metal" : [
			{name : "40 metal",		value : 40},
			{name : "80 metal",		value : 80},
			{name : "160 metal",	value : 160},
			{name : "400 metal",	value : 400},
			{name : "1.25k metal", 	value : 1250},
			{name : "2k metal",		value : 2000},
			{name : "6.25k metal", 	value : 6250},
			{name : "20k metal",	value : 20000},
			{name : "62.5k metal",	value : 62500},
			{name : "200k metal",	value : 200000},
			{name : "1M metal",		value : 1000000},
			{name : "2M metal",		value : 2000000}
		],
		"spray" : [
			{name : "1k spray",		value : 1000},
			{name : "5k spray",		value : 5000},
			{name : "10k spray",	value : 10000},
			{name : "50k spray",	value : 50000}
		],
		"gold" : [
			{name : "1 gold",		value : 1},
			{name : "5 gold",		value : 5},
			{name : "10 gold",		value : 10},
			{name : "20 gold",		value : 20},
			{name : "50 gold",		value : 50},
			{name : "100 gold",		value : 100},
			{name : "200 gold",		value : 200},
			{name : "1k gold",		value : 1000}
		],
		"VIP point" : [
			{name : "10 VIP point",		value : 10},
			{name : "100 VIP point",	value : 100},
			{name : "300 VIP point",	value : 300},
			{name : "1000 VIP point",	value : 1000}
		]
	},
	"speed up" : {
		"versatile" : [
			{name : "1mn versatile speed up",		value : 1},
			{name : "3mn versatile speed up",		value : 3},
			{name : "5mn versatile speed up",		value : 5},
			{name : "10mn versatile speed up",		value : 10},
			{name : "15mn versatile speed up",		value : 15},
			{name : "20mn versatile speed up",		value : 20},
			{name : "30mn versatile speed up",		value : 30},
			{name : "45mn versatile speed up",		value : 45},
			{name : "1h versatile speed up",		value : 60},
			{name : "2h versatile speed up",		value : 120},
			{name : "3h versatile speed up",		value : 180},
			{name : "5h versatile speed up",		value : 300},
			{name : "8h versatile speed up",		value : 480},
			{name : "15h versatile speed up",		value : 900},
			{name : "24h versatile speed up",		value : 1440},
			{name : "3d versatile speed up",		value : 4320},
			{name : "5d versatile speed up",		value : 7200},
			{name : "7d versatile speed up",		value : 10080},
			{name : "30d versatile speed up",		value : 43200}
		],
		"building" : [
			{name : "1mn building speed up",		value : 1},
			{name : "3mn building speed up",		value : 3},
			{name : "5mn building speed up",		value : 5},
			{name : "10mn building speed up",		value : 10},
			{name : "15mn building speed up",		value : 15},
			{name : "20mn building speed up",		value : 20},
			{name : "30mn building speed up",		value : 30},
			{name : "45mn building speed up",		value : 45},
			{name : "1h building speed up",			value : 60},
			{name : "2h building speed up",			value : 120},
			{name : "3h building speed up",			value : 180},
			{name : "5h building speed up",			value : 300},
			{name : "8h building speed up",			value : 480},
			{name : "15h building speed up",		value : 900},
			{name : "24h building speed up",		value : 1440},
			{name : "3d building speed up",			value : 4320},
			{name : "5d building speed up",			value : 7200},
			{name : "7d building speed up",			value : 10080},
			{name : "30d building speed up",		value : 43200}
		],
		"research" : [
			{name : "1mn research speed up",		value : 1},
			{name : "3mn research speed up",		value : 3},
			{name : "5mn research speed up",		value : 5},
			{name : "10mn research speed up",		value : 10},
			{name : "15mn research speed up",		value : 15},
			{name : "20mn research speed up",		value : 20},
			{name : "30mn research speed up",		value : 30},
			{name : "45mn research speed up",		value : 45},
			{name : "1h research speed up",			value : 60},
			{name : "2h research speed up",			value : 120},
			{name : "3h research speed up",			value : 180},
			{name : "5h research speed up",			value : 300},
			{name : "8h research speed up",			value : 480},
			{name : "15h research speed up",		value : 900},
			{name : "24h research speed up",		value : 1440},
			{name : "3d research speed up",			value : 4320},
			{name : "5d research speed up",			value : 7200},
			{name : "7d research speed up",			value : 10080},
			{name : "30d research speed up",		value : 43200}
		],
		"training" : [
			{name : "1mn training speed up",		value : 1},
			{name : "3mn training speed up",		value : 3},
			{name : "5mn training speed up",		value : 5},
			{name : "10mn training speed up",		value : 10},
			{name : "15mn training speed up",		value : 15},
			{name : "20mn training speed up",		value : 20},
			{name : "30mn training speed up",		value : 30},
			{name : "45mn training speed up",		value : 45},
			{name : "1h training speed up",			value : 60},
			{name : "2h training speed up",			value : 120},
			{name : "3h training speed up",			value : 180},
			{name : "5h training speed up",			value : 300},
			{name : "8h training speed up",			value : 480},
			{name : "15h training speed up",		value : 900},
			{name : "24h training speed up",		value : 1440},
			{name : "3d training speed up",			value : 4320},
			{name : "5d training speed up",			value : 7200},
			{name : "7d training speed up",			value : 10080},
			{name : "30d training speed up",		value : 43200}
		],
		"healing" : [
			{name : "1mn healing speed up",			value : 1},
			{name : "3mn healing speed up",			value : 3},
			{name : "5mn healing speed up",			value : 5},
			{name : "10mn healing speed up",		value : 10},
			{name : "15mn healing speed up",		value : 15},
			{name : "20mn healing speed up",		value : 20},
			{name : "30mn healing speed up",		value : 30},
			{name : "45mn healing speed up",		value : 45},
			{name : "1h healing speed up",			value : 60},
			{name : "2h healing speed up",			value : 120},
			{name : "3h healing speed up",			value : 180},
			{name : "5h healing speed up",			value : 300},
			{name : "8h healing speed up",			value : 480},
			{name : "15h healing speed up",			value : 900},
			{name : "24h healing speed up",			value : 1440},
			{name : "3d healing speed up",			value : 4320},
			{name : "5d healing speed up",			value : 7200},
			{name : "7d healing speed up",			value : 10080},
			{name : "30d healing speed up",			value : 43200}
		],
		"defense" : [
			{name : "1mn defense speed up",			value : 1},
			{name : "3mn defense speed up",			value : 3},
			{name : "5mn defense speed up",			value : 5},
			{name : "10mn defense speed up",		value : 10},
			{name : "15mn defense speed up",		value : 15},
			{name : "20mn defense speed up",		value : 20},
			{name : "30mn defense speed up",		value : 30},
			{name : "45mn defense speed up",		value : 45},
			{name : "1h defense speed up",			value : 60},
			{name : "2h defense speed up",			value : 120},
			{name : "3h defense speed up",			value : 180},
			{name : "5h defense speed up",			value : 300},
			{name : "8h defense speed up",			value : 480},
			{name : "15h defense speed up",			value : 900},
			{name : "24h defense speed up",			value : 1440},
			{name : "3d defense speed up",			value : 4320},
			{name : "5d defense speed up",			value : 7200},
			{name : "7d defense speed up",			value : 10080},
			{name : "30d defense speed up",			value : 43200}
		],
		"VIP time" : [
			{name : "30mn VIP time",	value : 30},
			{name : "60mn VIP time",	value : 60},
			{name : "1d VIP time",		value : 1440},
			{name : "7d VIP time",		value : 10080},
			{name : "30d VIP time",		value : 43200}
		]
	}
};

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

window.onload = function() {
	var rssTypeOption = document.getElementById("rssType");
	var rssTypeChoose = document.getElementById("rssOrSpeed");
	var endResult = document.getElementById("endResult");
	for(var type in rss) {
		buildOtionChoose(type, rssTypeChoose);
	}
	typeChosen = 'ressources';
	rssType = 'paint';
	changeType();
	changeIt();
}

function buildOtionChoose(type, rssTypeChoose) {
	var optionChoose = document.createElement('option');
    optionChoose.value = type;
    optionChoose.innerHTML = capitalize(type);
    rssTypeChoose.appendChild(optionChoose);
}

function buildOption(elem, rssTypeOption) {
	var optionRSS = document.createElement('option');
    optionRSS.value = elem;
    optionRSS.innerHTML = capitalize(elem);
    rssTypeOption.appendChild(optionRSS);
}

function buildResult(elem, endResult) {
	var pResult = document.createElement('p');
    pResult.id = 'endResult-' + elem;
    pResult.innerHTML = 'You have 0 ' + ((typeChosen == 'speed up') ? 'mn of ' : '') + elem + ((typeChosen == 'speed up') ? ' speed up' : '');
    endResult.appendChild(pResult);
}

function saveIt() {
    var result = document.createElement('p');
	result.innerHTML = "you have " + CalculateIt().toLocaleString() + " " + rssType;
    document.getElementById("endResult").appendChild(result);
}

function resetIt() {
	if(confirm("This will erase all value, are you sure you wanna continue?")) {
		changeIt();
		var endResult = document.getElementById("endResult");
		endResult.innerHTML = '';
		for(var elem in rss[typeChosen]) {
			buildResult(elem, endResult);
		}
	}
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
	
	return endValue;
}

function calculateIt() {
    rssType = document.getElementById("rssType").value;
	typeChosen = document.getElementById("rssOrSpeed").value;
	var rssTotal = 0;
    
	var formData = new FormData(document.getElementById("amsRssForm"));
	var i = 0;
    for(var elem of formData.entries()) {
      if(elem[1] > 0) rssTotal += elem[1] * rss[typeChosen][rssType][i].value;
	  i++;
    }
    rssTotal = ((typeChosen == 'ressources') ? rssTotal.toLocaleString() : convertToTime(rssTotal));
	document.getElementById("endResult-"+rssType).innerHTML = "You have " + rssTotal + " " + rssType + ((typeChosen == 'ressources') ? '' : ' speed up');
}

function changeType() {
	typeChosen = document.getElementById("rssOrSpeed").value;
    var selectRSS = document.getElementById("rssType");
	var endResult = document.getElementById("endResult");
    
    selectRSS.innerHTML = '';
    endResult.innerHTML = '';
    for(const elem in rss[typeChosen]) {
		buildOption(elem, selectRSS);
		buildResult(elem, endResult);
	}
	
	document.getElementById("rssTypeLabel").innerHTML = ((typeChosen == 'ressources') ? 'Choose rss type :' : 'Choose speed up type :');
	changeIt();
}

function changeIt() {
	typeChosen = document.getElementById("rssOrSpeed").value;
	rssType = document.getElementById("rssType").value;
    var form = document.getElementById("amsRssForm");
    
    form.innerHTML = '';
    for(const elem of rss[typeChosen][rssType]) buildForm(elem, form);
}

function buildForm(elem, form) {
    var form = document.getElementById("amsRssForm");
	var label = document.createElement('label');
    label.for = elem.name;
    label.innerHTML = elem.name + ((typeChosen == 'ressources') ? ' box ' : ' ');
    form.appendChild(label);
    
    var input = document.createElement('input');
    input.type = 'number';
    input.name = elem.name;
    input.min = 0;
    input.value = 0;
	input.hideValue = elem.value;
    form.appendChild(input);
    
    form.appendChild(document.createElement('br'));
}

function copyIt() {
	var textToCopy = ''
	for(var elem in rss[typeChosen]) {
		var textTemp = document.getElementById("endResult-"+elem).innerHTML
		if(textTemp.slice(8,11) != ' 0 ') textToCopy += textTemp + '\n';
	}
	
	navigator.clipboard.writeText(textToCopy)
}