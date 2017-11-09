var results = document.getElementById('results');
var input = document.getElementById('input');
var button = document.getElementById('submit');

button.addEventListener('click', function(event) {
    generateAPIcall('mov', input.value);
})

function appendData(dataObj) {
    var container = document.createElement('div');
    container.className = "container";

    var gif = document.createElement('img');
    gif.src = dataObj.gifURL;
    gif.alt = "GIF with emotion reflecting whether movie rating is good or bad";
    gif.className = "gif";
    container.appendChild(gif);

    var movieContainer = document.createElement('div');
    movieContainer.className = "movieContainer";
    container.appendChild(movieContainer);

    var title = document.createElement('h2');
    title.innerText = dataObj.title;
    title.setAttribute('tabindex', 0);
    movieContainer.appendChild(title);


    var poster = document.createElement('img');
    poster.src = dataObj.posterPath;
    poster.alt = "Poster for movie";
    poster.className = "poster";
    movieContainer.appendChild(poster);

    var movieTextContainer = document.createElement('div');
    movieTextContainer.className = "movieTextContainer";
    movieContainer.appendChild(movieTextContainer);

    var rating = document.createElement('p');
    rating.innerText = dataObj.voteAverage;
    rating.setAttribute('tabindex', 0);
    rating.className = "rating";
    movieTextContainer.appendChild(rating);

    var releaseDate = document.createElement('p');
    releaseDate.innerText = dataObj.releaseDate;
    releaseDate.setAttribute('tabindex', 0);
    releaseDate.className = "releaseDate";
    movieTextContainer.appendChild(releaseDate);

    var synopsis = document.createElement('p');
    synopsis.innerText = dataObj.synopsis;
    synopsis.setAttribute('tabindex', 0);
    synopsis.className = "synopsis";
    movieTextContainer.appendChild(synopsis);

    results.replaceChild(container, results.firstChild);

}