
var canvas;
var gCanvas;

//first canvas choose by resolution
function initCanvas() {
    let width = window.innerWidth;
    if (width > 750) {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="466" width="700">`;

    } else {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="266" width="400" >`;

    }
    canvas = document.getElementById('canvas');
    gCanvas = canvas.getContext("2d");
}
function init() {
    initCanvas()
    createImgs()
    setKeywords()
}

//clear the canvas
function onClearCanvas() {
    gCanvas.clearRect(0, 0, canvas.width, canvas.height)
}

//save canvas
function onSaveCanvas() {
    saveCanvas()
}

//draw the image
function drawImage(elImg) {
    if (!elImg.complete) {
        setTimeout(elImg => drawImage(elImg), 50);
        return;
    }
    gCanvas.drawImage(elImg, 0, 0, canvas.width, canvas.height)
}

//create the txt to canvas
function drawText(text) {
    let font = text
    let str = font.line;
    checkShadow(font.shadowColor)
    gCanvas.lineWidth = 1
    gCanvas.strokeStyle = font.stroke;
    gCanvas.textAlign = font.align;
    gCanvas.font = `${font.size}px ${font.name}`
    gCanvas.fillStyle = font.color
    gCanvas.fillText(str, font.x, font.y);
    if (font.isStroked) {
        gCanvas.strokeText(str, font.x, font.y);
    }
}

//draw canvas after checking prefernces
function draw() {
    let el = getCurrImgEl();
    drawImage(el);
    drawText(gMeme.currText)
    for(var i=0; i<gMeme.existText.length; i++){
    drawText(gMeme.existText[i])
    }
}

//change text color and draw new canvas
function onChangeColor(txt, color) {
    changeColor(txt, color)
    draw()
}

//increase font size  and draw to canvas
function onIncreaseFontSize(txt) {
    increaseFontSize(txt)
    draw()
}

//decrese font size  and draw to canvas
function onDecreaseFontSize(txt) {
    decreaseFontSize(txt)
    draw()
}

//change the font align and draw to canvas
function onChangeAlign(txt, align) {
    changeAlign(txt, align)
    draw()
}

//change text stroke color and draw to new canvas
function onChangeStrokeColor(txt, color) {
    changeStrokeColor(txt, color)
    draw()
}

//change shadow color and draw to new canvas if true
function onChangeShadowColor(txt, color) {
    changeShadowColor(txt, color)
    draw()
}

function onSetFont(txt, name) {
    setFont(txt, name)
    draw()
}

function onTextUp(txt) {
    textUp(txt)
    draw()
}

function onTextDown(txt) {
    textDown(txt)
    draw()
}

function openUpTextBar() {
    elText = document.querySelector('.up-text-bar')
    elText.classList.toggle('reveal')
}

function openDownTextBar() {
    elText = document.querySelector('.down-text-bar')
    elText.classList.toggle('reveal')
}

function onShadowAdd(){
    shadowAdd()
    draw()
}

function onStrokeAdd(){
    strokeAdd()
    draw()
}

function onBlurAdd(){
    blurAdd()
    draw()
}

function onCreateText() {
    createText()
    draw()
}
