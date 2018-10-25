
var gMemes;

var id = 1;


function createImgs() {
    gMemes = [
        createImgEl(['banana', 'dudi', 'abi']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']), createImgEl(['banana']),
        createImgEl(['pip']), createImgEl(['cry']), createImgEl(['apple']), createImgEl(['funny']), createImgEl(['crazy']), createImgEl(['banana']),
        createImgEl(['banana']), createImgEl(['laugh']), createImgEl(['cat']), createImgEl(['banana rama'])
    ]
}
function filterImgWholeWord(str) {
    //add support to 2 words str finds 1 str
    var res = [];
    res = gMemes.filter(function (meme) {
        return meme.keywords.includes(str);
    });
    return res;
}
function filterByPartialWord(str){
    let filtered=[];
    gMemes.forEach(meme=>{
        let CurrFiltered=meme.keywords.filter(word=>{
            return word.includes(str);  
        })
        if(CurrFiltered[0]){
            filtered.push(meme);
        }
    })
    console.log(filtered);
    
    return filtered;
}
function getAllImgs() {
    return gMemes;
}
function createImgEl(keywords) {
    return {
        id: id++,
        url: `img/${id}.jpg`,
        keywords: keywords
    }
}


