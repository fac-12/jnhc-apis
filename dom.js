var results = document.getElementById('results');
var input = document.getElementById('input');
var button = document.getElementById('submit');

button.addEventListener('click', function(event) {
    generateAPIcall('mov', input.value);
})

function appendData(dataObj) {
    var container = document.createElement('div');

    var title = document.createElement('h2');
    title.innerText = dataObj.title
    container.appendChild(title);


    var gif = document.createElement('img');
    gif.src = dataObj.gifURL
    container.appendChild(gif);

    var poster = document.createElement('img');
    poster.src = dataObj.posterPath
    container.appendChild(poster);

    var releaseDate = document.createElement('p');
    releaseDate.innerText = dataObj.releaseDate
    container.appendChild(releaseDate);

    var rating = document.createElement('p');
    rating.innerText = dataObj.voteAverage
    container.appendChild(rating);

    var synopsis = document.createElement('p');
    synopsis.innerText = dataObj.synopsis
    container.appendChild(synopsis);

    results.replaceChild(container, results.firstChild);

}