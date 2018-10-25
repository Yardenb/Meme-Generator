
//current meme prefernces - text and img;
var gMeme = {
    img: 5,
    elCurrImg: undefined,
<<<<<<< HEAD
    existText: [
        {
            line: '',
            size: 30,
            align: 'center',
            color: 'black',
            stroke: 'black',
            name: 'Ariel',
            x: 350,
            y: 50,
            shadowColor: 'white',
            isStroked: false,
            isBlured: false,
            isShadow: false
        }
    ],
}
gMeme.currText = gMeme.existText[0];
var defaultt = {
    line: '',
    size: 30,
    align: 'center',
    color: 'black',
    stroke: 'black',
    name: 'Ariel',
    x: 350,
    y: 50,
    shadowColor: 'white',
    isStroked: false,
    isBlured: false,
    isShadow: false
=======
    currText: {
        line: '',
        size: 30,
        align: 'center',
        color: 'black',
        stroke: 'black',
        name: 'Ariel',
        x: 350,
        y: 50,
        shadowColor: 'white',
        isStroked: false,
        isBlured: false,
        isShadow: false
    },
    existText: []
>>>>>>> 36eeb51863b53363aeb110dbb3e24a53a0b66d4c
}


//font location on canvas map
var gFontlocation = {
    left: { x: 20 },
    center: { x: 350 },
    right: { x: 680 },
}

//set image to canvas
function setImgEl(elImg) {
    gMeme.elCurrImg = elImg;
} function getCurrImgEl() {
    return gMeme.elCurrImg;
}

//save canvas - neeed
function saveCanvas() {
    var elDownload = document.querySelector('******')
    elDownload.href = gCanvas.toDataURL('jpeg')
}

//decrease the font size to both up and down
function decreaseFontSize(txt) {
    gMeme[txt].size -= 3
}

//increase the font size to both up and down
function increaseFontSize(txt) {
    gMeme[txt].size += 3
}

//change the color of the text
function changeColor(txt, color) {
    gMeme[txt].color = color
}

//change the border color of the text
function changeStrokeColor(txt, color) {
    gMeme[txt].stroke = color
}

//change align to text up and down
function changeAlign(txt, align) {
    gMeme[txt].align = align;
    gMeme[txt].x = gFontlocation[align].x
}

//changing the shadow color
function changeShadowColtextor(txt, color) {
    gMeme[txt].shadowColor = color;
}

//set font family
function setFont(txt, name) {
    gMeme[txt].name = name
}

//moving text up by changing the y
function textUp(txt) {
    gMeme[txt].y -= 15;
}

//moving text down by changing the y
function textDown(txt) {
    gMeme[txt].y += 15;
}

//push the new text to the text array
function createText() {
    gMeme.existText.push(gMeme.currText)
<<<<<<< HEAD
   gMeme.existText[0]=defaultt;
   gMeme.currText=gMeme.existText[0];   
}

//updating stroke state in the objective
function strokeAdd(el) {
    console.log(el)
    gMeme.currText.isStroked = el ? true : false;
}

//updating shadow state in the objective
function shadowAdd(el) {
    gMeme.currText.isShadow = el ? true : false;
}

//updating blur state in the objective
function blurAdd(el) {
    gMeme.currText.isBlured = el ? true : false;
=======
    gMeme.currText = {
        line: '',
        size: 30,
        align: 'center',
        color: 'black',
        stroke: 'black',
        name: 'Ariel',
        x: 350,
        y: 50,
        shadowColor: 'white',
        isStroked: false,
        isBlured: false,
        isShadow: false
    }
}

//updating stroke state in the objective
function strokeAdd() {
    elStroke = document.querySelector('.stroke-check').checked
    gMeme.currText.isStroked = elStroke ? true : false;
}

//updating shadow state in the objective
function shadowAdd() {
    elShadow = document.querySelector('.shadow-check').checked
    gMeme.currText.isShadow = elShadow ? true : false;
}

//updating blur state in the objective
function blurAdd() {
    elBlur = document.querySelector('.shadow-blur-check').checked
    gMeme.currText.isBlured = elBlur ? true : false;
>>>>>>> 36eeb51863b53363aeb110dbb3e24a53a0b66d4c
}

//updating the line in the objective
function importText(line) {
    gMeme.currText.line = line;
    draw()
}

//update shadow state
function checkShadow(color, font) {
    gCanvas.shadowColor = color;
    gCanvas.shadowOffsetX = font.isShadow ? 2 : 0
    gCanvas.shadowOffsetY = font.isShadow ? 2 : 0
    gCanvas.shadowBlur = font.isBlured ? 10 : 0
}

