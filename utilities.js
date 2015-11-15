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

function refreshFn() {
  pg = [];
  pgTwo.background(overallBG);
  pgThree.background(overallBG);
  fractals = [];
  linePosX = 0;
  background(overallBG);
}

function colorChangeRed() {
  hueStart = 0;
}

function colorChangeGreen() {
  hueStart = 100;
}

function colorChangeBlue() {
  hueStart = 200;
}

function setSelect() {
  if (mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight) {
    selectX = mouseX / xsplit.value();
    linePosX = mouseX / xsplit.value();
    selectY = mouseY / ysplit.value();
  }
}

function changeSelectPattern(a) {
  selectPattern = a;
}

function pauseFn() {
  pause = !pause;
  if(pause==true){
    var a = document.getElementById('pauseBtnImg');
    a.src = "assets/playBtn.png";
  }else if(pause == false){
    var a = document.getElementById('pauseBtnImg');
    a.src = "assets/pauseBtn.png";
  }
}