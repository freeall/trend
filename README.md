# trend [![build status](https://secure.travis-ci.org/freeall/trend.png)](http://travis-ci.org/freeall/trend)

Use to find out how a chart (array of values) are trending. Compares the last X points to the previous Y points before them.

Takes the maximum point of the last X points, and compares it to the average of the Y points before it.

Can ignore results if the average is below a certain minimum.

## Example

``` js
var trend = require('trend');

var chart = [10,11,9,31,12,14,15,24,26,18,0,0,0];

var growth = trend(chart, {
	lastPoints: 3,
	avgPoints: 10,
	avgMinimum: 10
});

if (growth < 0.25) console.log('The chart is going down! Is the server up?');

```

## Usage

### (array[, options])

Takes an array of numbers and calculates a trend.

Returns a number that says how much the chart is trending at the end, i.e. growth if `>1` and decline if `<1`.

If the array is not long enough to calculate both an average over the last points and the rest it will return undefined.

## Options

### lastPoints

How many elements should be taken from the end of the array to calculate the `last` point.

The calculation is done by taking `Math.max` of the last `lastPoints` numbers.

### avgPoints

How many elements should be taken to calcuate an average.

### avgMinimum

Ignore (i.e. return `undefined`) if the average is below a minimum. This makes sure that we can ignore charts with low 'activity'.