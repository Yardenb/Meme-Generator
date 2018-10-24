
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
            x:400,
            y:100
        },
    txtdown: {
            size: 30,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:400,
            y:200
    }
}

//font location on canvas map
var gFontlocation = {
    left: {x:20},
    center: {x:400},
    right: {x:780},
}

function setImgEl(elImg){
    gMeme.elCurrImg=elImg;
}function getCurrImgEl(){
    return gMeme.elCurrImg;
}

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
