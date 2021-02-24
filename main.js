let rssType;

var rss = {
	"paint"	: {
    	"10"	: 10,
        "100"	: 100,
        "1k"	: 1000,
        "2k"	: 2000,
        "4k"	: 4000,
        "10k"	: 10000,
        "30k"	: 30000,
        "50k"	: 50000,
        "150k"	: 150000,
        "500k"	: 500000,
        "1.5M"	: 1500000,
        "5M"	: 5000000,
        "25M"	: 25000000,
        "50M"	: 50000000
    },
    "plastic" : {
    	"10"	: 10,
        "100"	: 100,
        "1k"	: 1000,
        "2k"	: 2000,
        "4k"	: 4000,
        "10k"	: 10000,
        "30k"	: 30000,
        "50k"	: 50000,
        "150k"	: 150000,
        "500k"	: 500000,
        "1.5M"	: 1500000,
        "5M"	: 5000000,
        "25M"	: 25000000,
        "50M"	: 50000000
    },
    "energy" : {
    	"150"	: 150,
        "300"	: 300,
        "600"	: 600,
        "1.6k"	: 1600,
        "5k"	: 5000,
        "8k"	: 8000,
        "25k"	: 25000,
        "80k"	: 80000,
        "250k"	: 250000,
        "800k"	: 800000,
        "4M"	: 4000000,
        "8M"	: 8000000
    },
    "metal" : {
    	"40"	: 40,
        "80"	: 80,
        "160"	: 160,
        "400"	: 400,
        "1.25k"	: 1250,
        "2k"	: 2000,
        "6.25k"	: 6250,
        "20k"	: 20000,
        "62.5k"	: 62500,
        "200k"	: 200000,
        "1M"	: 1000000,
        "2M"	: 2000000
    }
};

window.onload = function() {
	rssType = document.getElementById("rssType").value;
	changeIt();
}

function saveIt() {
    var result = document.createElement('p');
	result.innerHTML = "you have " + CalculateIt().toLocaleString() + " " + rssType;
    document.getElementById("endResult").appendChild(result);
}

function resetIt() {
	if(confirm("This will erase all value, are you sure you wanna continue?")) {
		changeIt();
		document.getElementById("endResult-paint").innerHTML = 'You have 0 paint';
		document.getElementById("endResult-plastic").innerHTML = 'You have 0 plastic';
		document.getElementById("endResult-energy").innerHTML = 'You have 0 energy';
		document.getElementById("endResult-metal").innerHTML = 'You have 0 metal';
	}
}

function calculateIt() {
    var rssType = document.getElementById("rssType").value;
	var rssTotal = 0;
    
	var formData = new FormData(document.getElementById("amsRssForm"));
    for(var elem of formData.entries()) {
      if(elem[1] > 0) rssTotal += elem[1] * rss[rssType][elem[0]];
    }
    
	document.getElementById("endResult-"+rssType).innerHTML = "You have " + rssTotal.toLocaleString() + " " + rssType;
}

function changeIt() {
	rssType = document.getElementById("rssType").value;
    var form = document.getElementById("amsRssForm");
    
    form.innerHTML = '';
    for(const name in rss[rssType]) buildForm(name, form);
}

function buildForm(name, form) {
    var form = document.getElementById("amsRssForm");
	var label = document.createElement('label');
    label.for = name;
    label.innerHTML = name + ' ' + rssType + ' box ';
    form.appendChild(label);
    
    var input = document.createElement('input');
    input.type = 'number';
    input.name = name;
    input.min = 0;
    input.value = 0;
    form.appendChild(input);
    
    form.appendChild(document.createElement('br'));
}

function copyIt() {
	var textToCopy = ''
	textToCopy += document.getElementById("endResult-paint").innerHTML + " \n";
	textToCopy += document.getElementById("endResult-plastic").innerHTML + " \n";
	textToCopy += document.getElementById("endResult-energy").innerHTML + " \n";
	textToCopy += document.getElementById("endResult-metal").innerHTML;
	
	navigator.clipboard.writeText(textToCopy)
}