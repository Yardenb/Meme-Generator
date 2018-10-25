function setKeywords() {
    // debugger;
    let allKeywords = [];
    let allKeywordsData = []
    gMemes.forEach(meme => {
        meme.keywords.forEach(keyword => {
            //set unique list
            if (!allKeywords.includes(keyword)) {
                let newKeyword = { name: keyword, searchCount: 0, percent: 0, size: 'xs' }
                allKeywords.push(keyword);
                allKeywordsData.push(newKeyword);
            }
        })
    });
    saveToStorage('keywords', allKeywordsData);
}
function handleKeyword(word) {
    let keywords = getFromStorage('keywords');
    let isExist = false;
    keywords.forEach(keyword => {
        if (keyword.name === word) {
            keyword.searchCount++;
            isExist = true;
        }
    });
    if (!isExist) {
        let newWord = {
            name: word,
            searchCount: 1,
            percent: 0,
            size: 'xs'
        }
        keywords.push(newWord);
    }
    // calcWordPercent(keywords);
    calcWordPercent(keywords);
    wordsSizeByPrecent(keywords);
    saveToStorage('keywords', keywords);

    let elContainer=document.querySelector('.keywords-container');
    if(elContainer.classList.contains('flex')) renderKeywords(); 
}
function calcWordPercent(words) {
    let sum = words.reduce((acc, currWord) => acc + currWord.searchCount, 0);
    if(sum===0) return;
    words.forEach(word=>{
        word.percent=(word.searchCount/sum)*100;
    })
}
function wordsSizeByPrecent(words){
    words.forEach(word=>{
       if(word.percent>0 && word.percent<=20){
           word.size='xs';
       }
       else if(word.percent>20 && word.percent<=40){
           word.size='s';
       }
       else if(word.percent>40 && word.percent<=60){
           word.size='m';
       }
       else if(word.percent>60 && word.percent<=80){
           word.size='l';
       }
       else if(word.percent>80 && word.percent<=100){
           word.size='xl';
       }
    })    
}
function getKeywords(){
    return getFromStorage('keywords');
}
