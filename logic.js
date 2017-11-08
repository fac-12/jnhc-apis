function request(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4)
      if (xhr.status === 200) callback(null, xhr.responseText);
      else {
        var errorMessage = xhr.responseText;
        callback("Error " + url + " " + errorMessage);
      }
  }
};
xhr.open("GET", url, true);
xhr.send();
}

function handleMovieAPI (response) {
  //copy response

  //extracts relevant info

  //return info or creates new copy object and populates it

}

// Below function pulls rating from movie API and converts it to a search term for GIPHY
function mapRating(num){
var ratingRound = Math.round(num);
var ratingDesc =
  ['awful', 'bad', 'terrible', 'boring', 'ok', 'average', 'good', 'brilliant', 'fantastic', 'awesome', 'amazing'];

var searchTerm = ratingDesc[ratingRound];

return (searchTerm);
}


function createSearchURL() {
  //input = url, search term
  //returns url
}

function handleGiphyAPI() {

}

if (typeof module!--'undefined') {
  //change below
  module.exports = test;
}
