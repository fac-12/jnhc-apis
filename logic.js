var movieData = {}

var logic = {
    request: function(url, cb, text) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    cb(null, JSON.parse(xhr.responseText), text);
                } else {
                    // if the API returns an error, pass the error into the callback as the first argument
                    var errorMessage = xhr.responseText;
                    cb("Error " + url + " " + errorMessage);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    },

    generateAPIcall: function(type, text) {
        var url = "";
        if (type === "mov") {
            url = "https://api.themoviedb.org/3/search/movie?api_key=f76207a8fd7032c7072aa2f3dc514176&query=" + text.split(' ').join('+');
            logic.request(url, logic.handleMovieAPI, text);
        } else if (type === "gif") {
            url = "http://api.giphy.com/v1/gifs/search?api_key=YK70QDi19ZIBIoIWwHzAlvL9nSV8CXfY&q=" + text;
            logic.request(url, logic.handleGiphyAPI, text);
        }

    },

    handleMovieAPI: function(err, response, text) {
        if (err) {
            window.alert('Oops! Something went wrong! Please reload the page.');
        } else {
            var film = response.results[0];
            var title = film.title;
            if (title.toLowerCase() !== text.toLowerCase()) {
                window.alert('That\'s not a movie! Maybe check your spelling...');
            } else {
                var width = 300;
                movieData["title"] = title;
                movieData["voteAverage"] = film.vote_average;
                movieData["synopsis"] = film.overview;
                movieData["releaseDate"] = film.release_date;
                movieData["posterPath"] = "http://image.tmdb.org/t/p/w" + width + "//" + film.poster_path;
            }
            logic.mapRating(movieData.voteAverage);
        }
    },

    handleGiphyAPI: function(err, response) {
        var randomGif = Math.floor(Math.random() * 10 + 1);
        if (err) {
            console.log(err)
        } else {
            movieData["gifURL"] = response.data[randomGif].images.fixed_height_downsampled.url;
            if (Object.keys(movieData).length === 6) {
                appendData(movieData);
                return movieData
            } else {
                window.alert('Oops! Something went wrong! Please reload the page.');
            }
        }
    },

    // Below function pulls rating from movie API and converts it to a search term for GIPHY
    mapRating: function(num) {
        var ratingRound = Math.round(num);
        var ratingDesc = ['awful', 'bad', 'terrible', 'boring', 'ok', 'average', 'good', 'brilliant', 'fantastic', 'awesome', 'amazing'];
        logic.generateAPIcall("gif", ratingDesc[ratingRound])
    }
}

if (typeof module !== 'undefined') {
    //change below
    module.exports = logic;
}