
var canvas;
var gCanvas;


function initCanvas() {
    let width = window.innerWidth;
    if (width > 750) {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="466" width="700">`;
    } else {
        document.querySelector('.canvas-holder').innerHTML = `<canvas class="canvas-small" id="canvas" height="266" width="400" >`
    }
    canvas = document.getElementById('canvas');
    gCanvas = canvas.getContext("2d");
}
function onClearCanvas() {
    gCanvas.clearRect(0, 0, canvas.width, canvas.height)
}

function onSaveCanvas() {
    saveCanvas()
}


function drawImage(elImg) {
    if (!elImg.complete) {
        setTimeout(elImg => drawImage(elImg), 50);
        return;
    }
    gCanvas.drawImage(elImg, 0, 0, canvas.width, canvas.height)
}
function createText(txt) {
    var elStroke = document.querySelector(`.stroke-check-${txt}`).checked
    var str = document.querySelector(`.${txt}`).value
    let font = gMemes[txt]
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
function draw() {
    let el = getCurrImgEl();
    drawImage(el);
    createText('txtup')
    createText('txtdown')
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