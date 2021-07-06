/* Here are the functions that are called and call other
     Only bg2/bg1 functions can call them
	 can only call bg1/bg0 functions
	 mainly logical with few operation
*/

/******************* Display Fuction **********************/

function beautify(value) {
	return ((typeSelected != 'speed up') ? beautifyRSS(value) : beautifyTime(value));
}

/***************** Display Fuction End ********************/




/***************** BuildingHTML Fuction *******************/

function buildOptionInit(elem, elemHTML = rssType) {
    elemHTML.appendChild(buildOptionHTML(elem, capitalize(elem)));
}

function buildLabelInit(elem, elemHTML) {
    elemHTML.appendChild(buildLabelInitSelector(elem, elemHTML));
}

function buildLabelInitSelector(elem, elemHTML) {
	switch(elemHTML.id) {
		case 'resultUnitChoice':
			return buildLabelHTML('unit-' + elem.name, capitalize(elem.name))
			break;
		
		case 'amsRssForm':
			return buildLabelHTML('id-' + elem.name, elem.name + ((typeSelected == 'ressources') ? ' box ' : ' '))
			break;
	}
}

function buildResultInit(elem) {
    endResult.appendChild(buildResultHTML(elem));
}

function textResultRec(value, tableToDisplay, i = textToDisplay[typeSelected].length - 1) {
	if(i == 0) return textResultElem(tableToDisplay[i], value);
	else return textResultRec(value, tableToDisplay, i - 1) + textResultElem(tableToDisplay[i], value);
}

function buildFormInputInit(elem) {
	buildLabelInit(elem, rssForm);
    rssForm.appendChild(buildFormInputHTML(elem));
    rssForm.appendChild(document.createElement('br'));
}

/*************** BuildingHTML Fuction end *****************/




/********************* Core Fuction ***********************/

function calculateItRec(i = rss[typeSelected][rssSelected].length - 1) {
	if(i == 0) return calculateItSolo(0);
	else return calculateItSolo(i) + calculateItRec(i - 1);
}

function toggleUnitChoiceInit() {
	toggleUnitStyle();
	CalculateItAll();
}

function changeResultUnit(value) {
	compactUnit = value*1;
	
	CalculateItAll();
}

/******************* Core Fuction end *********************/
