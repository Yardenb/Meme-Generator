var gMeme = {
    selectedImgId: 5,
   txt: {
            line: '',
            size: 20,
            align: 'center',
            color: 'black',
            stroke:'black',
            name: 'Ariel',
            x:400,
            y:100
        }
}
var gFontlocation = {
    left: {x:100,y:100},
    center: {x:400,y:100},
    right: {x:700,y:100},
}

function saveCanvas(){
    var elDownload = document.querySelector('******')
    elDownload.href = gCanvas.toDataURL('jpeg')
}

function decreaseFontSize(){
    gMeme.txt.size -= 3
}

function increaseFontSize(){
    gMeme.txt.size += 3
}


function changeColor(color){
    gMeme.txt.color = color
}

function changeStrokeColor(color){
    gMeme.txt.stroke = color
}


function changeAlign(align){
    gMeme.txt.align = align;
    gMeme.txt.x = gFontlocation[align].x
    gMeme.txt.y = gFontlocation[align].y
}