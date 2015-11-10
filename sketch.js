//CANVAS VARIABLES
var cWidth = 200;
var cHeight = 200;
var totIt = 5;
var fWidth = 800;
var fHeight = 800;
var flag = 0;

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

//MUSIC VARIABLES
var freq = [261, 329, 392, 440, 523];
var vol = [];
var osc = [];
var totNotes = 5;
var imgData;
var ctx;
var posX = 0;

function setup() {

  createCanvas(fWidth, fHeight);
  background(255);
  
  setupButtons();
  setupSliders();
  setupDropDown();
  initMusic();
  canvasGraphics();
  
}

function draw() {

  if (abc.value() == 'circles') {
    circleArt();
  }
}

