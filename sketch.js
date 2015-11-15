//CANVAS VARIABLES
var cWidth = 200;
var cHeight = 200;
var totIt = 5;
var fWidth = 800;
var fHeight = 800;
var flag = 0;
var inst = 'potato';
var instDiv;
var overallBG = 0;

var selectPattern = "";

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

var xsplit, ysplit;

//COLOUR VARIABLES
var hueStart = 0;

//MUSIC VARIABLES
var freq = [261, 329, 392, 440, 523];
var vol = [];
var osc = [];
var notes = [];
var totNotes = 3;
var imgData;
var ctx;
var posX = 0;
var selectX, selectY;
var canvArea;

//BROWNIAN VARIABLES
var num = 100;
var range = 20;
var numLines = 50;
var linesBr = [];
var brTrue = false;

var canvasWidth;
var canvasHeight;

function preload() {
  notes = [loadSound('assets/bass.mp3'), loadSound('assets/drums.mp3'), loadSound('assets/piano.mp3')];
}

function setup() {
  background(overallBG);
  setupFnButtons();
  setupSliders();
  setupColorPallete();
  setupP();
  initMusic();
  canvasGraphics();
  selectButtonImg();

}

function draw() {

  if (selectPattern == 'circles') {
    //background(overallBG);
    print(touches.length);
    if (touches.length > 0) {

      for (var i = 0; i < touches.length; i++) {

        circleArt(touches[i].x, touches[i].y);

      }
    } else {
      circleArt(selectX, selectY);
    }
  } else if (selectPattern == 'lines' && brTrue == true) {
    background(overallBG);
    //blendMode(LIGHTEST);
    lineArt(selectX, selectY);

  }
  textInstructions();
}

function mouseDragged() {
  if (selectPattern == 'fractals') {
    fractalArt();
  }
}

function mouseReleased() {
  if (selectPattern == 'lines') {
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
    background(overallBG);
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
    pauseFn();
  }
}