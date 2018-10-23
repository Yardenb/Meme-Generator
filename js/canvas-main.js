var canvas = document.getElementById('lower-canvas');
var gCanvas = canvas.getContext("2d");

function drawImage(imgid) {
    gCanvas.drawImage(imgid, canvas.width, canvas.height);
}

function onClearCanvas() {
    gCanvas.clearRect(0, 0, canvas.width, canvas.height)
}

function onSaveCanvas() {
    saveCanvas()
}

function drawText(str) {
    gCanvas.fillText(str, 10, 50);
}

function draw() {
    var str = document.querySelector('.text-input').value

    //meanwhile bg
    gCanvas.fillStyle = 'red'
    gCanvas.fillRect(0, 0, canvas.width, canvas.height)
    // gLower.drawImage(imgid, lowerCanvas.width, lowerCanvas.height);

    
    let font = gMeme.txt
    gCanvas.lineWidth = 2;
    gCanvas.strokeStyle = font.stroke;
    gCanvas.textAlign = font.align; 
    gCanvas.font = `${font.size}px ${font.name}`
    gCanvas.fillStyle = font.color
    gCanvas.strokeText(str,font.x, font.y);
    gCanvas.fillText(str,font.x, font.y);
}

function onChangeColor(color){
    changeColor(color)
    draw()
}

function onIncreaseFontSize(){
    increaseFontSize()
    draw()
}

function onDecreaseFontSize(){
    decreaseFontSize()
    draw()
}


function onChangeAlign(align){
    changeAlign(align)
    draw()
}

function onChangeStrokeColor(color){
    changeStrokeColor(color)
    draw()
}