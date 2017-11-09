var gifHolder = document.getElementById('gif');
var input = document.getElementById('input');
var button = document.getElementById('submit');

button.addEventListener('click', function(event){
  generateAPIcall('mov', input.value);
})

//need to refine replace child node
function appendGif(url) {
    var imgElement = document.createElement('img');
    imgElement.src = url;
    gifHolder.appendChild(imgElement);
    if (imgElement.src === null) {
      imgElement.src.replace(url);
    }

    //
    // if (newImg) {
    //     var oldImg = newImg;
    //     gifHolder = gifHolder.replaceChild(newImg, oldImg);
}
