var trends = require('../index');
var test = require('tape');

var fail1 = [40, 39, 38, 41, 42, 40, 37, 43, 41, 40,  2,  0,  1];
var fail2 = [40, 39, 38, 41, 42, 40, 37, 43, 40,  2,  1,  2,  0];
var ignr1 = [40, 39, 38, 41, 42, 40, 37, 43, 41, 39, 38, 32,  2];
var ignr2 = [40, 39, 38, 41, 42, 40, 37, 43, 41, 39, 35, 35,  2];
var ignr3 = [10,  0]; // Too few elements to calculate 
var ignr4 = [ 0,  1,  0,  1,  0,  1,  0,  1,  0,410,  0,  2,  1]; // Ignore extreme elements
var stdOptions = { lastPoints:3, avgPoints:10 };

var test1 = function() {
	test('Simple fail', function(t) {
		t.ok(trends(fail1, stdOptions) < 0.10 );
		t.end();
	});
};
var test2 = function() {
	test('Fail last two', function(t) {
		t.ok(trends(fail2, stdOptions) < 0.10);
		t.end();
	});
};
var test3 = function() {
	test('Only one low point', function(t) {
		console.log(trends(ignr1, stdOptions))
		t.ok(trends(ignr1, stdOptions) > 0.50);
		t.end();
	});
};
var test4 = function() {
	test('Only two low point', function(t) {
		t.ok(trends(ignr2, stdOptions) > 0.50);
		t.end();
	});
};
var test5 = function() {
	test('Should ignore if array is too small', function(t) {
		t.notOk(trends(ignr3, stdOptions));
		t.end();
	});
};
// Cannot do this yet
// var test5 = function() {
// 	test('Should ignore extreme elements', function(t) {
// 		t.equal(trends(ignr4), true);
// 		t.end();
// 	});
// };

test1();
test2();
test3();
test4();
// test5();