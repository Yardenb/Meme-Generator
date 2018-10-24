'use strict';

function initGallery(){ 
    let imgs=getImgs()
    renderGallery(imgs);
}

function renderGallery(imgs) {
    let strHTMLS='';
    for (var i = 0; i < imgs.length; i++) {
        strHTMLS += `<img class="meme meme${imgs[i].id}" src="img/${imgs[i].id}.jpg" onclick="onImgChosen(this)" />`
    } 
    var elImgs = document.querySelector('.gallery-img-container');
    elImgs.innerHTML = strHTMLS;
}

function onShowKeyWords(){
    let keywords=getFromStorage('keywords');
    let strHTMLS='';
    keywords.forEach(keyword => {
        strHTMLS+=`<span class="keyword-item flex justify-center align-center" onclick="onFilterByKeywords(this)">${keyword}</span>`
    });
    strHTMLS+='<span class="keyword-item flex justify-center align-center" onclick="initGallery()   "> Show All</span>';
    let elWordsBox=document.querySelector('.keywords-container');
    elWordsBox.innerHTML=strHTMLS; 
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
function onFilterByKeywords(elKeywords){
    let filtererd=filterImg(elKeywords.innerText);
    renderGallery(filtererd)   
}

function onImgChosen(elImg){
    setImgEl(elImg);
    toggleCanvasGalley();
    drawImage(elImg);
}