// function request(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4)
//       if (xhr.status === 200) callback(null, xhr.responseText);
//       else {
//         var errorMessage = xhr.responseText;
//         callback("Error " + url + " " + errorMessage);
//       }
//   }
// };
// xhr.open("GET", url, true);
// xhr.send();
// }

var searchterm = document.getElementById('input');

// function request(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    var searchResult = document.getElementsByClassName('gif')[0];
    var newGif = document.createElement('img');
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    var ran = Math.round(Math.random() * 25);
    newGif.src = data.data[ran].images.original.url;
    searchResult.appendChild(newGif);
  }
};

var button = document.getElementById('submit');
button.addEventListener('click', function() {
var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + input.value.replace(' ', '+') + '&api_key=YK70QDi19ZIBIoIWwHzAlvL9nSV8CXfY';

xhr.open("GET", searchUrl, true);
xhr.send();
})



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

if (typeof module!=='undefined') {
  //change below
  module.exports = test;
}
