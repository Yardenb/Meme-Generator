
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

//init function in the load of the page
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
    checkShadow(font.shadowColor, font)
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
    for (var i = 0; i < gMeme.existText.length; i++) {
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

//set font family
function onSetFont(txt, name) {
    setFont(txt, name)
    draw()
}

//moving text up by button
function onTextUp(txt) {
    textUp(txt)
    draw()
}

//moving text down by button
function onTextDown(txt) {
    textDown(txt)
    draw()
}

//add shadow and update on the current Meme to true
function onShadowAdd() {
    shadowAdd()
    draw()
}

//add stroke and update on the current Meme to true
function onStrokeAdd() {
    strokeAdd()
    draw()
}

//add blur and update on the current Meme to true
function onBlurAdd() {
    blurAdd()
    draw()
}

//pushing text to array of existing text ,reset values, and render the all the text we have
function onCreateText() {
    createText()
    resetValues()
    draw()
}

//reset all the values on the text box
function resetValues() {
    document.querySelector('.currText').value = ''
    document.querySelector('.bg-color').value = '#000000'
    document.querySelector('.stroke-color').value = '#000000'
    document.querySelector('.shadow-color').value = '#ffffff'
    document.querySelector('.shadow-check').checked = false
    document.querySelector('.shadow-blur-check').checked = false
    document.querySelector('.stroke-check').checked = false
}

function addLineButton() {
    var elTextBox = document.querySelector('.lines-box');
    var strHTML = `<button>`
}
//toggle gallery canvas
function OnGoToGallery(){
    toggleCanvasGalley();
    initGallery();
}