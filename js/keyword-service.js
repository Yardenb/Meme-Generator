function setKeywords() {
    // debugger;
    let allKeywords = [];
    let allKeywordsData=[]
    gMemes.forEach(meme => {

        
        meme.keywords.forEach(keyword => {
            
            
            //set unique list
            if (!allKeywords.includes(keyword)) {
  
                
                let newKeyword={name: keyword, count: 0}
                allKeywords.push(keyword);
                allKeywordsData.push(newKeyword);
            }
        })
    });
    //TODO- if there is a list in storage, add the count and then save it to storage
    saveToStorage('keywords', allKeywordsData);
}
function handleKeyword(word){
    console.log('in key',word);
    let keywords=getFromStorage('keywords');
    console.log(keywords);
    
    

    
}