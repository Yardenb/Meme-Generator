function setKeywords() {
    //if there is already keyword map -> get the map and add the words
    let allKeywords = [];
   let oldKeywordMap=getFromStorage('keywordsCountMap');
    let keywordsCountMap=oldKeywordMap? oldKeywordMap: {};
    gMemes.forEach(meme => {
        meme.keywords.forEach(keyword => {
            //set unique list
            if (!allKeywords.includes(keyword)) {
                allKeywords.push(keyword)
            }
            //count for existing keywords
            if(!keywordsCountMap[keyword]){
                keywordsCountMap[keyword]=1;
            }
            else{
                keywordsCountMap[keyword]++
            }
        })
    });
    saveToStorage('keywordsCountMap',keywordsCountMap);
    saveToStorage('keywords', allKeywords);
}
function handleKeyword(){
    console.log('in key');
    
}