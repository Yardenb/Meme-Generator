var id = 0;
//current meme prefernces - text and img;
var gMeme = {
    img: 5,
    elCurrImg: undefined,
    existText: [
        {
            id:id,
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
            isShadow: false,
            xwidth: 0,
            yheight: 0
        }
    ],
    
}
gMeme.currText= gMeme.existText[0]
// gMeme.currText = gMeme.existText[0];
var defaultt = {
    id:id,
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
function decreaseFontSize() {
    gMeme.currText.size -= 3
}

//increase the font size to both up and down
function increaseFontSize() {
    gMeme.currText.size += 3
}

//change the color of the text
function changeColor(color) {
    gMeme.currText.color = color
}

//change the border color of the text
function changeStrokeColor(color) {
    gMeme.currText.stroke = color
}

//change align to text up and down
function changeAlign(align) {
    gMeme.currText.align = align;
    gMeme.currText.x = gFontlocation[align].x
}

//changing the shadow color
function changeShadowColtextor(color) {
    gMeme.currText.shadowColor = color;
}

//set font family
function setFont(name) {
    gMeme.currText.name = name
}

//moving text up by changing the y
function textUp() {
    gMeme.currText.y -= 15;
}

//moving text down by changing the y
function textDown() {
    gMeme.currText.y += 15;
}

//push the new text to the text array
function createText() {
    defaultt.id++
    let temp = Object.assign({},defaultt)
    gMeme.existText.unshift(temp)
   gMeme.currText = gMeme.existText[0]
}
//updating stroke state in the objective
function strokeAdd(el) {
    gMeme.currText.isStroked = el ? true : false;
}

//updating shadow state in the objective
function shadowAdd(el) {
    gMeme.currText.isShadow = el ? true : false;
}

//updating blur state in the objective
function blurAdd(el) {
    gMeme.currText.isBlured = el ? true : false;
}

//updating the line in the objective
function importText(line) {
    gMeme.currText.line = line;
}

//update shadow state
function checkShadow(color, font) {
    gCanvas.shadowColor = color;
    gCanvas.shadowOffsetX = font.isShadow ? 2 : 0
    gCanvas.shadowOffsetY = font.isShadow ? 2 : 0
    gCanvas.shadowBlur = font.isBlured ? 10 : 0
}

//removing the line from the texts array
function findTextById(textId){
    var idx = gMeme.existText.findIndex(function (text) {
        return text.id === textId;
    })
    return idx;
}

