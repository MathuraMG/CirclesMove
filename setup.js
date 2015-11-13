function setupFnButtons() {
    a = document.getElementsByClassName('fnBtn');
  for (var i = 0; i < a.length; i++) {
    s = windowWidth * 0.035 + windowWidth * 0.05*i;
    s = s + "px";
    a[i].style.position = "absolute";
    a[i].style.left = s;

    h = windowWidth * (3 * 0.11 ) + windowWidth*0.01 ;
    h = h + "px";
    a[i].style.top = h;
  }
}

function setupSliders() {
  xsplit = createSlider(1, 3, 1);
  xsplit.position(windowWidth * 0.2, windowHeight * 0.875);
  ysplit = createSlider(1, 3, 1);
  ysplit.position(windowWidth * 0.2, windowHeight * 0.95);
}

function setupColorPallete() {
  redBtn = createButton('  ');
  redBtn.mousePressed(colorChangeRed);
  redBtn.id('redBtn');
  redBtn.style("background-color", "#ff0000");
  size = windowHeight * 0.1;
  redBtn.size(size, size);
  redBtn.position(windowWidth * 0.98 - size, windowHeight * 0.875);

  blueBtn = createButton('  ');
  blueBtn.mousePressed(colorChangeBlue);
  blueBtn.id('blueBtn');
  blueBtn.style("background-color", "#0000ff");
  blueBtn.size(size, size);
  blueBtn.position(windowWidth * 0.98 - size * 2.5, windowHeight * 0.875);

  greenBtn = createButton('  ');
  greenBtn.mousePressed(colorChangeGreen);
  greenBtn.id('greenBtn');
  greenBtn.style("background-color", "#00ff00");
  greenBtn.size(size, size);
  greenBtn.position(windowWidth * 0.98 - size * 4, windowHeight * 0.875);
}

function selectButtonImg() {
  a = document.getElementsByClassName('imgBtn');
  for (var i = 0; i < a.length; i++) {
    s = windowWidth * 0.10;
    s = s + "px";
    a[i].style.width = s;
    a[i].style.height = s;
  }
  a = document.getElementsByClassName('selectBtn');
  for (var i = 0; i < a.length; i++) {
    s = windowWidth * 0.035;
    s = s + "px";
    a[i].style.position = "absolute";
    a[i].style.left = s;

    h = windowWidth * (i * 0.11 ) + windowWidth*0.01 ;
    h = h + "px";
    a[i].style.top = h;
  }
}

function setupP() {
  instDiv = createP(inst);
  instDiv.style('color', 'white'); //,'background-color','black');
  instDiv.position(250, 0);
  instDiv.id('instructions');
}

function textInstructions() {
  if (selectPattern == 'circles') {
    inst = ' Press space to pause the drawing and move your mouse about the canvas to change size and colour';
  } else if (selectPattern == 'fractals') {
    inst = ' Drag mouse on canvas to get fractals of different shape and colour. Press left arrow to delete previous fractal';
  } else if (selectPattern == 'lines') {
    inst = ' Click on the canvas to create a brownian motion. Press space to pause';
  } else {
    inst = ' Click on a pattern to start ';
  }
  a = document.getElementById('instructions');
  a.innerHTML = inst;

}

function initMusic() {
  for (var i = 0; i < totNotes; i++) {
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].freq(freq[i]);
    osc[i].amp(0);
    osc[i].start();
  }
}

function canvasGraphics() {
  ctx = canvas.getContext('2d');
  imgData = ctx.getImageData(0, 0, fWidth, fHeight)
  pgTwo = createGraphics(fWidth / xsplit.value(), fHeight / ysplit.value());
  pgThree = createGraphics(fWidth / xsplit.value(), fHeight / ysplit.value());
}