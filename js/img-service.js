
var gMemes;

var id = 1;


function createImgs() {
    gMemes = [
        createImgEl(['banana', 'dudi', 'abi']), createImgEl(['banana']),  createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['banana']), createImgEl(['apple']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['banana']), createImgEl(['cat']), createImgEl(['banana'])
    ]
}
function createImgEl(keywords) {
    return {
        id: id++,
        url: `img/${id}.jpg`,
        keywords: [keywords]
    }
}
function setKeywords(){
    let allKeywords=[];
    gMemes.forEach(meme => {
        meme.keywords.forEach(keywords=>{
           var filtered= keywords.filter(keyword=>!allKeywords.includes(keyword));
           allKeywords=allKeywords.concat(filtered);
        });
    });
    saveToStorage('keywords', allKeywords);
}
function getImgs(){
    return gMemes;
}
// function filterKeywords(keyword) {
//     return gImgs.keywords.filter(gImgs => gImgs.keywords === keyword);
//     // renderGallery(filtered)
// }
