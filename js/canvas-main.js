
var canvas;
var gCanvas;

//initialize the canvas
function initCanvas(img) {
    var ratio = img.naturalWidth / img.naturalHeight;
    var elCanvasContainer = document.querySelector('.canvas-holder');
    canvas = document.getElementById('canvas');
    gCanvas = canvas.getContext("2d");
    canvas.width = elCanvasContainer.clientWidth;
    canvas.height = canvas.width / ratio;
    drawImage(img);
}
//clear the canvas
function onClearCanvas() {
    gCanvas.clearRect(0, 0, canvas.width, canvas.height)
    gMeme.existText.splice(1);
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
    font.xwidth = gCanvas.measureText(font.line).width
    font.yheight = font.size;
}

//draw canvas after checking prefernces
function draw() {
    let el = getCurrImgEl();
    drawImage(el);
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
function onShadowAdd(el) {
    shadowAdd(el)
    draw()
}

//add stroke and update on the current Meme to true
function onStrokeAdd(el) {
    strokeAdd(el)
    draw()
}

//add blur and update on the current Meme to true
function onBlurAdd(el) {
    blurAdd(el)
    draw()
}

//pushing text to array of existing text ,reset values, and render the all the text we have
function onCreateText() {
    let elText = document.querySelector('.currText').value
    if (elText === '') return;
    createText()
    resetValues()
    draw()
}

//reset all the values on the text box
function resetValues() {
    document.querySelector('.currText').value = ''
    document.querySelector('.bg-color').value = '#ffffff'
    document.querySelector('.stroke-color').value = '#000000'
    document.querySelector('.shadow-color').value = '#ffffff'
    document.querySelector('.shadow-check').checked = false
    document.querySelector('.shadow-blur-check').checked = false
    document.querySelector('.stroke-check').checked = true;
}
//toggle gallery canvas
function OnGoToGallery() {
    toggleCanvasGalley();
    initGallery();
}

//add text to exist text array
function onImportText(line) {
    importText(line)
    draw()
}

//looking for text on the canvas with mouse
function onCanvas(ev) {
    var textObj = gMeme.existText.find(function (text) {
        return (
            ev.layerX >= text.x &&
            ev.layerX <= text.x + text.xwidth &&
            ev.layerY + text.yheight >= text.y &&
            ev.layerY <= text.y + text.yheight
        )
    })
    if (textObj) {
        gMeme.currText = textObj;
        document.querySelector('.currText').value = gMeme.currText.line
    }
}

//remove curr text from array.
function onRemoveText() {
    let elText = document.querySelector('.currText').value
    if (elText === '') return;
    var text = findTextById(gMeme.currText.id)
    gMeme.existText.splice(text, 1);
    resetValues()
    gMeme.currText = gMeme.existText[0]
    draw()
}

//move text left
function onMoveLeft() {
    moveLeft()
    draw()
}

//move text right
function onMoveRight() {
    moveRight()
    draw()
}