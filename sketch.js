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

function setup() {

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
    circleArt(selectX, selectY);

  }
  textInstructions();
}


function mouseDragged() {
  fractalArt();
}

function mouseReleased(){
  setSelect();
}