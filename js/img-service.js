var gMemes;
var gImgs
var id = 1;


function createImgs() {
    gImgs = [
        createImgEl(['banana', 'dudi', 'abi']), createImgEl(['banana']),  createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana'])
    ]
}

function createImgEl(keywords) {
    return {
        id: id++,
        url: `img/${id}.jpg`,
        keywords: [keywords]
    }
}

function getImgs(){
 
    return gImgs;
}
// function filterKeywords(keyword) {
//     return gImgs.keywords.filter(gImgs => gImgs.keywords === keyword);
//     // renderGallery(filtered)
// }
