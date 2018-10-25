function drawCharts() {
    gStars.forEach((star, idx) => {
      gCtx.fillStyle = 'black';
      star.x = idx * (barWidth + 10);
      star.y = gCanvas.height - star.rate * heightFactor;
      gCtx.fillRect(star.x, star.y, barWidth, star.rate * heightFactor);
    });
  }
  
  function canvasClicked(ev) {
    var elModal = document.querySelector('.modal')
  
    var star = gStars.find(function (star) {
      return (
        ev.clientX > star.x &&
        ev.clientX < star.x + barWidth &&
        ev.clientY > star.y &&
        ev.clientY < star.y + star.rate * heightFactor
      )
    })
    if (star) {
      elModal.style.display = 'block'
      elModal.innerText = 'Name: ' + star.name + ' Rate: ' + star.rate
      elModal.style.top = ev.clientY + 'px'
      elModal.style.left = ev.clientX + 'px'
    } else {
      elModal.style.display = 'none'
    }
  
  
  }
  