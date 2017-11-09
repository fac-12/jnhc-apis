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
    container.appendChild(gif);

    var title = document.createElement('h2');
    title.innerText = dataObj.title;
    title.setAttribute('tabindex', 0);
    container.appendChild(title);


    var poster = document.createElement('img');
    poster.src = dataObj.posterPath;
    poster.alt = "Poster for movie";
    container.appendChild(poster);

    var releaseDate = document.createElement('p');
    releaseDate.innerText = dataObj.releaseDate;
    releaseDate.setAttribute('tabindex', 0);
    container.appendChild(releaseDate);

    var rating = document.createElement('p');
    rating.innerText = dataObj.voteAverage;
    rating.setAttribute('tabindex', 0);
    container.appendChild(rating);

    var synopsis = document.createElement('p');
    synopsis.innerText = dataObj.synopsis;
    synopsis.setAttribute('tabindex', 0);
    container.appendChild(synopsis);

    results.replaceChild(container, results.firstChild);

}
