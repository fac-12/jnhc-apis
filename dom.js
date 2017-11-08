var gifHolder = document.getElementById('gif');

function appendGif(url) {
    var newImg = document.createElement('img');
    newImg.src = url;

    if (gifHolder.firstChild) {
        var oldImg = gifHolder.firstChild;
        gifHolder = gifHolder.replaceChild(newImg, oldImg)
    } else {
        gifHolder.appendChild(newImg);
    }
}