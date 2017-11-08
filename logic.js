function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(null, JSON.parse(xhr.responseText));
            } else {
                // if the API returns an error, pass the error into the callback as the first argument
                var errorMessage = xhr.responseText;
                cb("Error " + url + " " + errorMessage);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function generateAPIcall(type, text) {
    var url = "";
    if (type === "mov") {
        url = "https://api.themoviedb.org/3/search/movie?api_key=f76207a8fd7032c7072aa2f3dc514176&query=" + text.split(' ').join('+');
        request(url, handleMovieAPI);
    } else if (type === "gif") {
        url = "http://api.giphy.com/v1/gifs/search?api_key=YK70QDi19ZIBIoIWwHzAlvL9nSV8CXfY&q=" + text;
        request(url, handleGiphyAPI);
    }

}

var handleMovieAPI = function(err, response) {
    //copy response
    //extracts relevant info
    //return info or creates new copy object and populates it
}

var handleGiphyAPI = function(err, response) {


}

// Below function pulls rating from movie API and converts it to a search term for GIPHY
function mapRating(num){
  var ratingRound = Math.round(num);
  var ratingDesc =
     ['awful', 'bad', 'terrible', 'boring', 'ok', 'average', 'good', 'brilliant', 'fantastic', 'awesome', 'amazing'];
  generateAPIcall("gif", ratingDesc[ratingRound])
}



if (typeof module !== 'undefined') {
    //change below
    module.exports = test;
}
