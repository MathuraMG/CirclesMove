var cWidth = 200;
var cHeight = 200;
var totIt = 5;
var fWidth = 1000;
var fHeight = 1000;
var flag = 0;

var circles = [];
var fractals = [];
var count = 0;
var pg = [];
var pgOne;
var gridGraph;

function setup() {
  createCanvas(fWidth, fHeight);
  saveBtn = createButton('Save');
  saveBtn.mousePressed(saveFn);
  gridToggle = createButton('Grid');
  gridToggle.mousePressed(gridFn);
  background(255);
  xsplit = createSlider(1, 5, 3);
  ysplit = createSlider(1, 5, 3);
  
  abc = createSelect();
  abc.option('circles');
  abc.option('lines');

}

function draw() {

  for (var i = 0; i < fractals.length; i++) {
    if (dist(mouseX, mouseY, fractals[i].x, fractals[i].y) < 10) {
      //pg[i].rect(10,10,10*i,10*i)
     // fractals[i].change();
    }
  }


}

function mouseDragged() {
  if (mouseX < cWidth && mouseY < cHeight && mouseX > 0 && mouseY > 0) {

    background(255);
    cWidth = fWidth / xsplit.value();
    cHeight = fHeight / ysplit.value();
    push();
    colorMode(HSB);
    var distFromCenter = dist(mouseX, mouseY, cWidth / 2, cHeight / 2);
    var circleSize = 80 - distFromCenter / 6;
    //acolor = color];
    //print(distFromCenter);
    //totIt = floor(5-distFromCenter/72);
    circleHue = map(distFromCenter, 0, 350, 100, 240);
    pgOne = createGraphics(cWidth, cHeight);
    cS = map(distFromCenter, 0, 350, 10, 70);
    if(abc.value() == 'circles'){
    f = new fractalCircle(mouseX, mouseY, cS, circleHue, pgOne);
    }
    else if(abc.value() == 'lines'){
      f = new fractalLine(mouseX, mouseY, cS, circleHue, pgOne);
    }
    f.drawFractal();

    pg.push(pgOne);
    fractals.push(f);
    pop();
    for (var i = 0; i < pg.length; i++) {
      for (var a = 0; a < xsplit.value(); a++) {
        for (var b = 0; b < ysplit.value(); b++) {
          image(pg[i], a * cWidth, b * cHeight, cWidth, cHeight);
        }
      }
    }
    image(gridGraph, 0, 0, cWidth, cHeight);
  }
}



function keyPressed() {
  if (keyCode == BACKSPACE) {
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
}

function saveFn() {
  saveCanvas('part', 'png');
}

function gridFn() {
  push();
  colorMode(RGB);
  gridGraph = createGraphics(cWidth, cHeight);
  if (flag == 0) {
    gridGraph.stroke(0);
    flag = 1;
  } else {
    gridGraph.stroke(255);
    flag = 0;
  }
  for (var j = 0; j < 5; j++) {

    gridGraph.line(0, j * cHeight / 5, cWidth, j * cHeight / 5);
    gridGraph.line(j * cWidth / 5, 0, j * cWidth / 5, cHeight);
  }
  pop();
  //image(gridGraph, 0, 0, cWidth, cHeight);

}