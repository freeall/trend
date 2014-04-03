module.exports = function(arr, options) {
	options = options || {};
	options.lastPoints = options.lastPoints || 1;
	options.avgPoints = options.avgPoints || 10;

	if (arr.length < options.lastPoints + options.avgPoints) return;

	var lastArr = arr.slice(arr.length - options.lastPoints, arr.length);
	var chartArr = arr.slice(arr.length - options.lastPoints - options.avgPoints, arr.length - options.lastPoints);

	var chartAvg = chartArr.reduce(function(res, val) { return res += val }) / chartArr.length;
	var lastAvg = Math.max.apply(null, lastArr);

	return lastAvg/chartAvg;
};