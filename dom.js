var gifHolder = document.getElementById('gif');
var input = document.getElementById('input');
var button = document.getElementById('submit');

button.addEventListener('click', function(event){
  generateAPIcall('mov', input.value);
})

//need to refine replace child node
function appendGif(url) {
    var newImg = document.createElement('img');
    newImg.src = url;

    if (!gifHolder.firstChild) {
        var oldImg = gifHolder.firstChild;
        console.log('hello');
        gifHolder = gifHolder.replaceChild(newImg, oldImg)
    } else {
      console.log('hello2');
        gifHolder.appendChild(newImg);
    }
}
