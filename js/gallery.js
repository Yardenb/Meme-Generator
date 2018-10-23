'use strict';
//TODO- animation in media query responsive

// function onKeywords(){
//     var filtered = onFilter(keywords)
//     renderGallery(filtered)
// }


function initGallery(){
    createImgs(); 
    renderGallery();
}

function renderGallery() {
    let imgs=getImgs()
    let strHTMLS='';
    for (var i = 0; i < imgs.length; i++) {
        strHTMLS += `<img class="meme meme${i+1}" src="img/${i+1}.jpg"/>`
    } 
    var elImgs = document.querySelector('.gallery-img-container');
    elImgs.innerHTML = strHTMLS;
}

// function onUploadPicture(img){
//     window.location.href ="canvas.html"
//     drawImage(img)
// }

// function onChoosePicture(img){
//     window.location.href ="canvas.html"
//     drawImage(img)
// }

function onShowKeyWords(elWordsBox){
    elWordsBox.classList.toggle('hidden');
    elWordsBox.classList.toggle('grid');
}

