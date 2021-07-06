let rssSelected;
let typeSelected;
let rssType;
let typeChoose;
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
	"speed up for inferno" : [
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
let textToDisplay = {
	"ressources" : [
		'You have ',
		'$quantity',
		' ',
		'$rssSelected'
	],
	"speed up" : [
		'You have ',
		'$quantity',
		'of ',
		'$rssSelected',
		' speed up'
	],
	"speed up for inferno" : [
		'You have ',
		'$quantity',
		' point in ',
		'$rssSelected',
		' speed up'
	]
};