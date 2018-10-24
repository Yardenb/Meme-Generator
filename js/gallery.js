'use strict';

function initGallery(){
    createImgs(); 
    renderGallery();
}

function renderGallery() {
    let imgs=getImgs()
    let strHTMLS='';
    for (var i = 0; i < imgs.length; i++) {
        strHTMLS += `<img class="meme meme${i+1}" src="img/${i+1}.jpg" onclick="onImgChosen(this)" />`
    } 
    var elImgs = document.querySelector('.gallery-img-container');
    elImgs.innerHTML = strHTMLS;
}

function onShowKeyWords(elWordsBox){
    elWordsBox.classList.toggle('hidden');
    elWordsBox.classList.toggle('grid');
}
function OnGoToGallery(){
    toggleCanvasGalley();
    initGallery();
}
function toggleCanvasGalley(){
    var elCanvas=document.querySelector('.canvas-container');
    elCanvas.classList.toggle('hidden');
    var elGallery=document.querySelector('.gallery-container');
    elGallery.classList.toggle('hidden');
}
function onImgChosen(elImg){
    setImgEl(elImg);
    toggleCanvasGalley();

    drawImage(elImg);
}