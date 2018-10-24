
//current meme prefernces - text and img;
var gMeme = {
    img: 5,
    elCurrImg: undefined,
   currText: {
            line:'',
            size: 30,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:350,
            y:50,
            shadowColor: 'white',
            isStroked: false,
            isBlured : false,
            isShadow: false
        },
    existText:[] 
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

function setFont(txt,name){
    gMeme[txt].name = name
}

function textUp(txt){
    gMeme[txt].y -= 15;
}

function textDown(txt){
    gMeme[txt].y += 15;
}

function createText(){
    gMeme.existText.push(gMeme.currText)
    gMeme.currText = {
            line:'',
            size: 30,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:350,
            y:50,
            shadowColor: 'white',
            isStroked: false,
            isBlured : false,
            isShadow: false
    }
}

function strokeAdd(){
    elStroke = document.querySelector('.stroke-check').checked
    gMeme.currText.isStroked = elStroke? true : false;
}

function shadowAdd(){
    elShadow = document.querySelector('.shadow-check').checked
    gMeme.currText.isShadow = elShadow? true : false;
}

function blurAdd(){
    elBlur = document.querySelector('.shadow-blur-check').checked
    gMeme.currText.isBlured = elBlur? true : false;
}

function importText(line){
    gMeme.currText.line = line;
    draw()
}

function checkShadow(color) {
    gCanvas.shadowColor = color;
    gCanvas.shadowOffsetX = gMeme.currText.isShadow ? 2 : 0
    gCanvas.shadowOffsetY = gMeme.currText.isShadow ? 2 : 0
    gCanvas.shadowBlur = gMeme.currText.isBlured ? 10 : 0
}
