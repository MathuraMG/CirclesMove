function setupButtons() {
  saveBtn = createButton('Save');
  saveBtn.mousePressed(saveFn);
  gridToggle = createButton('Refresh');
  gridToggle.mousePressed(refreshFn);
}

function setupSliders() {
  xsplit = createSlider(1, 3, 1);
  xsplit.position(20, 50);
  ysplit = createSlider(1, 3, 1);
  ysplit.position(20, 90);
}

function setupDropDown() {
  abc = createSelect();
  abc.option('fractals');
  abc.option('circles');
}

function setupColorPallete() {
  redBtn = createButton('  ');
  redBtn.mousePressed(colorChangeRed);
  redBtn.style("background-color", "#ff0000");
  redBtn.size(50, 50);
  redBtn.position(20, 150);

  blueBtn = createButton('  ');
  blueBtn.mousePressed(colorChangeBlue);
  blueBtn.style("background-color", "#0000ff");
  blueBtn.size(50, 50);
  blueBtn.position(80, 150);

  greenBtn = createButton('  ');
  greenBtn.mousePressed(colorChangeGreen);
  greenBtn.style("background-color", "#00ff00");
  greenBtn.size(50, 50);
  greenBtn.position(140, 150);
}

function setupP() {
  instDiv = createP(inst);
  instDiv.style('color', 'white'); //,'background-color','black');
  instDiv.position(250, 0);
  instDiv.id('instructions');
}

function textInstructions() {
  if (abc.value() == 'circles') {
    inst = ' Press space to pause the drawing and move your mouse about the canvas to change size and colour';
  } else if (abc.value() == 'fractals') {
    inst = ' Drag mouse on canvas to get fractals of different shape and colour. Press left arrow to delete previous fractal';
  } else {
    inst = ' Meh.';
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
}