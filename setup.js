function setupFnButtons() {
  
  a = document.getElementsByClassName('fnBtn');
  var xPos = windowWidth * 0.01;
  var yPos = windowHeight*0.8;
  for (var i = 0; i < a.length; i++) {
    s = xPos + windowWidth * 0.05 * i;
    s = s + "px";
    a[i].style.position = "absolute";
    a[i].style.left = s;

    yPos = windowHeight * 0.8;//(3 * 0.11) + windowWidth * 0.01;
    yPos = yPos + "px";
    a[i].style.top = yPos;
  }
}

function selectButtonImg() {
  var xPos;
  var yPos;
  size = windowHeight * 0.07;
  a = document.getElementsByClassName('imgBtn');
  for (var i = 0; i < a.length; i++) {
    s = size;
    s = s + "px";
    a[i].style.width = s;
    a[i].style.height = s;
  }
  a = document.getElementsByClassName('imgFrBtn');
  for (var i = 0; i < a.length; i++) {
    s = size*2;
    s = s + "px";
    a[i].style.width = s;
    a[i].style.height = s;
  }
  //position of the pattern selection buttons
  a = document.getElementsByClassName('selectBtn');
  for (var i = 0; i < a.length; i++) {
    s = size;
    s = s + "px";
    a[i].style.position = "absolute";
    a[i].style.left = s;

    h = windowHeight*0.23*i +size*2;
    h = h + "px";
    a[i].style.top = h;
  }
}

function setupSliders() {
  var xPos = windowWidth * 0.01;
  var yPos1 = windowHeight * 0.12;
  var yPos2 = windowHeight * 0.17;
  xsplit = createSlider(1, 3, 1);
  xsplit.position(xPos, yPos1);
  ysplit = createSlider(1, 3, 1);
  ysplit.position(xPos, yPos2 );
}

function setupColorPallete() {
  var size = windowHeight * 0.07;
  var xPos = windowWidth * 0.01;
  var yPos = windowHeight * 0.02;

  redBtn = createButton('  ');
  redBtn.mousePressed(colorChangeRed);
  redBtn.id('redBtn');
  redBtn.style("background-color", "#ff0000");
  redBtn.size(size, size);
  redBtn.position(xPos, yPos);

  blueBtn = createButton('  ');
  blueBtn.mousePressed(colorChangeBlue);
  blueBtn.id('blueBtn');
  blueBtn.style("background-color", "#0000ff");
  blueBtn.size(size, size);
  blueBtn.position(xPos + size * 1.2, yPos);

  greenBtn = createButton('  ');
  greenBtn.mousePressed(colorChangeGreen);
  greenBtn.id('greenBtn');
  greenBtn.style("background-color", "#00ff00");
  greenBtn.size(size, size);
  greenBtn.position(xPos + size * 2.4, yPos);
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
    vol[i] = 0;
    notes[i].loop();
    notes[i].setVolume(0);
  }
}

function canvasGraphics() {
  canvasWidth = windowWidth * 0.78;
  canvasHeight = windowHeight * 0.83;

  fWidth = canvasWidth;
  fHeight = canvasHeight;
  canvArea = fWidth * fHeight * 0.5 / 100;

  createCanvas(fWidth, fHeight);
  ctx = canvas.getContext('2d');
  imgData = ctx.getImageData(0, 0, fWidth, fHeight)
  pgTwo = createGraphics(fWidth / xsplit.value(), fHeight / ysplit.value());
  pgThree = createGraphics(fWidth / xsplit.value(), fHeight / ysplit.value());
}