/* Here are the functions that are called but do not call anyone
     Only bg1 functions can call them
	 Can't call any manmade function
	 Most operations are done here
*/

/******************* Display Fuction **********************/

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
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

/***************** Display Fuction End ********************/




/***************** BuildingHTML Fuction *******************/

function buildOptionHTML(value, HTML) {
	var optionHTML = document.createElement('option');
    optionHTML.value = value;
    optionHTML.innerHTML = HTML;
	return optionHTML;
}

function buildLabelHTML(value, HTML) {
	var label = document.createElement('label');
    label.htmlFor = value
    label.innerHTML = HTML;
	return label;
}

function textResultElem(elem, value) {
	switch(elem) {
		case '$quantity':
			return value;
			break;
		
		
		case '$rssSelected':
			return rssSelected;
			break;
			
		
		default:
			return elem;
			break;
	}
}

function buildResultHTML(elem) {
	var pResult = document.createElement('p');
    pResult.id = 'endResult-' + elem;
    return pResult;
}

function buildFormInputHTML(elem) {
    var input = document.createElement('input');
    input.type = 'number';
    input.name = elem.name;
	input.id = 'id-' + elem.name;
    input.min = 0;
    input.value = elem.Qty;
    
    return input;
}

/*************** BuildingHTML Fuction end *****************/




/********************* Core Fuction ***********************/

function calculateItSolo(i) {
	return rss[typeSelected][rssSelected][i].Qty * rss[typeSelected][rssSelected][i].value;
}

function toggleUnitStyle() {
	if (isCompact.checked) compactUnitForm.style.display = 'block';
	else compactUnitForm.style.display = 'none';
}

/******************* Core Fuction end *********************/
