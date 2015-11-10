function setupButtons() {
  saveBtn = createButton('Save');
  saveBtn.mousePressed(saveFn);
  gridToggle = createButton('Refresh');
  gridToggle.mousePressed(refreshFn);
}

function setupSliders() {
  xsplit = createSlider(1, 3, 1);
  xsplit.position(20, 20);
  ysplit = createSlider(1, 3, 1);
  ysplit.position(20, 50);
}

function setupDropDown() {
  abc = createSelect();
  abc.option('fractals');
  abc.option('circles');
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