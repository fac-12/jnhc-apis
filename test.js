var test = require('tape');
var logic = require('./logic.js');
var input = 'titanic';
var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=f76207a8fd7032c7072aa2f3dc514176&query=titanic'
var ratingDesc = 'good'
var gifURL = "http://api.giphy.com/v1/gifs/search?api_key=YK70QDi19ZIBIoIWwHzAlvL9nSV8CXfY&q=" + ratingDesc;

test('tape is working', function(t){
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one')
  t.end();
});

test('createMovieURL', function(t) {
  t.equals(typeof logic.createMovieURL(input), "string", "createMovieURL is a string");
  t.equals(logic.createMovieURL(input), movieURL, "createMovieURL includes input");
  t.end();
});

test('createGifURL', function(t) {
  t.equals(typeof logic.createGifURL(ratingDesc), "string", "createGifURL is a string");
  t.equals(logic.createGifURL(ratingDesc), gifURL, "createGifURL includes input");
  t.end();
});

test('generateMovieAPI', function(t) {
  t.equals(typeof logic.generateMovieAPI(movieURL), "object", "generateMovieAPI returns an object");
  t.end();
});
