
//current meme prefernces - text and img;
var gMeme = {
    img: 5,
    elCurrImg: undefined,
   txtup: {
            size: 30,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:350,
            y:50,
            shadowColor: 'white',
        },
    txtdown: {
            size: 30,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:350,
            y:430,
            shadowColor: 'white',
    }
}

//font location on canvas map
var gFontlocation = {
    left: {x:20},
    center: {x:350},
    right: {x:680},
}

//set image to canvas
function setImgEl(elImg){
    gMeme.elCurrImg=elImg;
}function getCurrImgEl(){
    return gMeme.elCurrImg;
}

//save canvas - neeed
function saveCanvas(){
    var elDownload = document.querySelector('******')
    elDownload.href = gCanvas.toDataURL('jpeg')
}

//decrease the font size to both up and down
function decreaseFontSize(txt){
    gMeme[txt].size -= 3
}

//increase the font size to both up and down
function increaseFontSize(txt){
    gMeme[txt].size += 3
}

//change the color of the text
function changeColor(txt,color){
    gMeme[txt].color = color
}

//change the border color of the text
function changeStrokeColor(txt,color){
    gMeme[txt].stroke = color
}

//change align to text up and down
function changeAlign(txt,align){
    gMeme[txt].align = align;
    gMeme[txt].x = gFontlocation[align].x
}

//changing the shadow color
function changeShadowColtextor(txt,color){
    gMeme[txt].shadowColor = color;
}
