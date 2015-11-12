//CANVAS VARIABLES
var cWidth = 200;
var cHeight = 200;
var totIt = 5;
var fWidth = 800;
var fHeight = 800;
var flag = 0;
var inst = 'potato';
var instDiv;

//DRAWING VARIABLES
var circles = [];
var fractals = [];
var count = 0;
var pg = [];
var pgOne;
var gridGraph;
var linePosX = 0;
var colour;
var pause = false;
var brCount = 0;

//COLOUR VARIABLES
var hueStart = 0;

//MUSIC VARIABLES
var freq = [261, 329, 392, 440, 523];
var vol = [];
var osc = [];
var totNotes = 5;
var imgData;
var ctx;
var posX = 0;
var selectX, selectY;

//BROWNIAN VARIABLES
var num = 100;
var range = 20;
var numLines = 50;
var linesBr = [];
var brTrue = false;

function setup() {

  fWidth = windowWidth;
  fHeight = windowHeight - 100;

  createCanvas(fWidth, fHeight);
  background(255);

  setupButtons();
  setupSliders();
  setupDropDown();
  setupColorPallete();
  setupP();
  initMusic();
  canvasGraphics();

}

function draw() {

  if (abc.value() == 'circles') {
    background(255);
    circleArt(selectX, selectY);

  }
  if (abc.value() == 'lines' && brTrue == true) {
    background(255);
    //blendMode(LIGHTEST);
    lineArt(selectX, selectY);

  }
  textInstructions();
}

function mouseDragged() {
  fractalArt();
}

function mouseReleased() {
  if (abc.value() == 'lines') {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      linesBr = [];
      brCount = 0;
      //blendMode(LIGHTEST);
      l = new elt();
      setSelect();
      l.init(selectX, selectY);
      strokeWeight(0);
      l.drawLine();
      linesBr[0] = l;
      brTrue = true;
    }

  } else {
    setSelect();
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    //print('yo');
    background(255);
    pg.pop();
    fractals.pop();
    for (var i = 0; i < pg.length; i++) {

      for (var a = 0; a < xsplit.value(); a++) {
        for (var b = 0; b < ysplit.value(); b++) {
          image(pg[i], a * cWidth, b * cHeight, cWidth, cHeight);
        }
      }

    }
  }
  if (keyCode == 32) {
    pause = !pause;
  }
}