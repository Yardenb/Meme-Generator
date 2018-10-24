
var canvas;
var gCanvas;

//first canvas choose by resolution
function initCanvas() {
    let width = window.innerWidth;
    console.log(width);
    if (width > 750) {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="466" width="700">`;

    } else {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="266" width="400" >`;

    }
    canvas = document.getElementById('canvas');
    gCanvas = canvas.getContext("2d");
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
    // gCanvas.drawImage(elImg, 0, 0);
    //if img is not ready yet, don't try to draw + try to draw in 50 ms
    if (!elImg.complete) {
        setTimeout(elImg => drawImage(elImg), 50);
        return;
    }

    gCanvas.drawImage(elImg, 0, 0, canvas.width, canvas.height)
}

//create the txt to canvas
function createText(txt) {
    var elStroke = document.querySelector(`.stroke-check-${txt}`).checked
    var elShadow = document.querySelector(`.shadow-check-${txt}`).checked
    var str = document.querySelector(`.${txt}`).value
    let font = gMeme[txt]
    checkShadow(font.shadowColor,txt)    
    gCanvas.lineWidth = 1
    gCanvas.strokeStyle = font.stroke;
    gCanvas.textAlign = font.align;
    gCanvas.font = `${font.size}px ${font.name}`
    gCanvas.fillStyle = font.color
    gCanvas.fillText(str, font.x, font.y);
    if (elStroke) {
        gCanvas.strokeText(str, font.x, font.y);
    }
}

//draw canvas after checking prefernces
function draw() {
    let el = getCurrImgEl();
    drawImage(el);
    createText('txtup')
    // createText('txtdown')
}

//check shadow text box and color
function checkShadow(color,txt){
    gCanvas.shadowColor = color;
    var elShadow = document.querySelector(`.shadow-check-${txt}`).checked
    gCanvas.shadowOffsetX = elShadow? 2:0
    gCanvas.shadowOffsetY = elShadow? 2:0
     elShadow = document.querySelector(`.shadow-blur-check-${txt}`).checked
     gCanvas.shadowBlur = elShadow? 10:0
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