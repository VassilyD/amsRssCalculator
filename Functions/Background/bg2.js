/* Here are the functions that that link foreground and background
     Only fg/main functions can call them
	 only logical/calling functions
	 can only call bg1 functions
*/

/******************* Display Fuction **********************/

/***************** Display Fuction End ********************/




/***************** BuildingHTML Fuction *******************/

function buildLabel(elem, elemHTML){
	buildLabelInit(elem, elemHTML);
}

function buildOption(elem, elemHTML) {
    buildOptionInit(elem, elemHTML)
}

function buildResult(elem) {
    buildResultInit(elem);
}

function buildForm(elem) {
	buildFormInputInit(elem);
}

/*************** BuildingHTML Fuction end *****************/




/********************* Core Fuction ***********************/

function textResult(value) {
	return textResultRec(value, textToDisplay[typeSelected]);
}

function calculateIt() {
	return calculateItRec();
}

function toggleUnitChoice() {
	toggleUnitChoiceInit();
}

/******************* Core Fuction end *********************/
