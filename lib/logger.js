'use strict';

var moment=require('moment');

var _timeFormat='MM.DD HH:mm:ss.SSS';

function formatArray(args){
	args=Array.prototype.slice.call(args);
	args.unshift(moment().format(_timeFormat),'-');
	return args;
}

/**
 * Logger
 * @param {string} timeFormat
 * @constructor
 */
function Logger(timeFormat){
	_timeFormat=timeFormat;
}

module.exports=Logger;

Logger.log=function(){
	console.log.apply(console,formatArray(arguments));
};
Logger.info=function(){
	console.info.apply(console,formatArray(arguments));
};
Logger.error=function(){
	console.error.apply(console,formatArray(arguments));
};
Logger.warn=function(){
	console.warn.apply(console,formatArray(arguments));
};