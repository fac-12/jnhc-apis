var test = require('tape');
var logic = require('./logic.js');

test('tape is working', function(t){
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one')
  t.end();
});


test('generateAPIcall is an object', function(t){
  t.equals(typeof logic.generateAPIcall(testType, testText), "object", "generateAPIcall should be an object");
  t.end();
});

var testType = 'mov'
var testText = 'titanic'
