'use strict';

function initGallery() {
    let imgs = getAllImgs()
    renderGallery(imgs);
}

function renderGallery(imgs) {
    let strHTMLS = '';
    for (var i = 0; i < imgs.length; i++) {
        strHTMLS += `<img class="meme meme${imgs[i].id}" src="img/${imgs[i].id}.jpg" onclick="onImgChosen(this)" />`
    }
    var elImgs = document.querySelector('.gallery-img-container');
    elImgs.innerHTML = strHTMLS;
}

function onShowKeyWords() {
    let keywords = getFromStorage('keywords');
    let strHTMLS = '';
    keywords.forEach(keyword => {
        strHTMLS += `<span class="keyword-item flex justify-center align-center" onclick="onFilterByKeywords(this)">${keyword}</span>`
    });
    strHTMLS += '<span class="keyword-item flex justify-center align-center" onclick="initGallery()   "> Show All</span>';
    let elWordsBox = document.querySelector('.keywords-container');
    elWordsBox.innerHTML = strHTMLS;
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

function onImgChosen(elImg) {
    setImgEl(elImg);
    toggleCanvasGalley();
    drawImage(elImg);
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
    elWordsBox.classList.toggle('grid');
}
function onSearchText(elSearch, ev) {
    //check if enter. 
    if (ev.keyCode === 13){
        handleKeyword();
    } 
    else {
        //searching
        let imgs = filterByPartialWord(elSearch.value);
        if(!imgs[0]) showNoMemeMsg(elSearch.value);
        else renderGallery(imgs)
     
    }

}
function showNoMemeMsg(userSearch){
    let elMsgBox=document.querySelector('.hidden-msg');
    
    elMsgBox.innerText=`Sorry, no results for ${userSearch}`;
    if(elMsgBox.classList.contains('hidden'))
    elMsgBox.classList.remove('hidden');
    
}