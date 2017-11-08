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

function mapRating() {
  //input = rating?
  //output=term
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
