
var gMemes;

var id = 1;


function createImgs() {
    gMemes = [
        createImgEl(['banana', 'dudi', 'abi']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['pip']), createImgEl(['cry']), createImgEl(['apple']), createImgEl(['funny']), createImgEl(['crazy']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['laugh']), createImgEl(['cat']), createImgEl(['ba'])
    ]
}
function filterImg(str) {
    var res = [];
    res = gMemes.filter(function (meme) {
        if (meme['keywords'].includes(str)) {
        }
        return meme.keywords.includes(str);
    });
    return res;
}
function createImgEl(keywords) {
    return {
        id: id++,
        url: `img/${id}.jpg`,
        keywords: keywords
    }
}
function setKeywords() {
    let allKeywords = [];
    gMemes.forEach(meme => {
        meme.keywords.forEach(keyword => {
            if (!allKeywords.includes(keyword)) {
                allKeywords.push(keyword)
            }
        })
    });
    saveToStorage('keywords', allKeywords);
}
function getImgs() {
    return gMemes;
}
// function filterKeywords(keyword) {
//     return gImgs.keywords.filter(gImgs => gImgs.keywords === keyword);
//     // renderGallery(filtered)
// }
