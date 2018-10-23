var gMemes;
var gImgs
var id = 1;


function createImgs() {
    gImgs = [
        createImg(['banana', 'dudi', 'abi']), createImg(['banana']),  createImg(['banana']), createImg(['banana']), createImg(['banana']),
        createImg(['banana']), createImg(['banana']), createImg(['banana']), createImg(['banana']), createImg(['banana']), createImg(['banana']),
        createImg(['banana']), createImg(['banana']), createImg(['banana']), createImg(['banana'])
    ]
}

function createImg(keywords) {

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
