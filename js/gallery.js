'use strict';
function init() {
    createImgs();
    setKeywords();
    initGallery();
    setModal();
    
}
function initGallery() {
    let imgs = getAllImgs()
    renderGallery(imgs);
}


function getWindowSize(){
    return window.innerWidth;
}
function getImgEl(id){
    return document.querySelector(`.meme${id}`)
}
function renderGallery(imgs) {
    let strHTMLS = '';
    if(getWindowSize()>700){
        for (var i = 0; i < imgs.length; i++) {
            strHTMLS += `<div class="img-box grid align-stretch">
            <img class="meme meme${imgs[i].id}" src="img/${imgs[i].id}.jpg" />
            <div class="img-middle" id="${imgs[i].id}" onclick="onImgChosen(this.id)"> <div class="text">Choose</div></div></div>`
        }  
    }
    else{
        for (var i = 0; i < imgs.length; i++) {
            strHTMLS += `
            <img id="${imgs[i].id}" class="meme meme${imgs[i].id}" src="img/${imgs[i].id}.jpg" onclick="onImgChosen(this.id)"/>`
        }  
    }
  
    var elImgs = document.querySelector('.gallery-img-container');
    elImgs.innerHTML = strHTMLS;
}
function renderKeywords(){
    let keywords = getFromStorage('keywords');
    let strHTMLS = '';
    keywords.forEach(keyword => {
        strHTMLS += `<span class="keyword-item size-${keyword.size}" onclick="onFilterByKeywords(this)">${keyword.name}</span>`
    });
    strHTMLS += '<span class="keyword-item-last" onclick="initGallery()"> Show All</span>';
    let elWordsBox = document.querySelector('.keywords-container');
    elWordsBox.innerHTML = strHTMLS;
}
function onShowKeyWords() {
    renderKeywords();
    let elWordsBox = document.querySelector('.keywords-container');
    toggleKeywordsBox(elWordsBox);
}

function toggleCanvasGalley() {
    var elCanvas = document.querySelector('.canvas-container');
    elCanvas.classList.toggle('hidden');
    var elGallery = document.querySelector('.gallery-container');
    elGallery.classList.toggle('hidden');
}
function onFilterByKeywords(elKeywords) {
    let filtererd = filterImgWholeWord(elKeywords.innerText);
    renderGallery(filtererd)
}


function onImgChosen(imgId) {
    let elImg= getImgEl(imgId);  
     setImgEl(elImg);
     toggleCanvasGalley();
     initCanvas(elImg);
 }
function OnGoToCanvas() {
    //if keywords container is open - close it
    let elWordsBox = document.querySelector('.keywords-container');
    if (!elWordsBox.classList.contains('hidden')) toggleKeywordsBox(elWordsBox);
    //if search box is full - clean it
    cleanSearchBox();
    toggleCanvasGalley();
}
function cleanSearchBox() {
    let elsearchBox = document.getElementById('search-box');
    elsearchBox.value = "";
}
function toggleKeywordsBox(elWordsBox) {
    elWordsBox.classList.toggle('hidden');
    elWordsBox.classList.toggle('flex');
}
function onSearchText(elSearch, ev) {
    //check if enter. 
    if (ev.keyCode === 13){
        handleKeyword(elSearch.value);
    } 
    else {
        //searching
        let imgs = filterByPartialWord(elSearch.value);
        if(!imgs[0]){
            showNoMemeMsg(elSearch.value);
            renderGallery([]);
        } 
        else{
            renderGallery(imgs);
            let elMsgBox=document.querySelector('.hidden-msg');
            elMsgBox.classList.add('hidden');
        } 
    }
}
function showNoMemeMsg(userSearch){
    let elMsgBox=document.querySelector('.hidden-msg');
    
    elMsgBox.innerText=`Sorry, no results for ${userSearch}`;
    if(elMsgBox.classList.contains('hidden'))
    elMsgBox.classList.remove('hidden');

}
