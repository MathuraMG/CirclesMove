function circleArt() {

  if (pause == false && frameCount % 1 == 0) {
    linePosX++;
    f = new fractalLine((linePosX * 2) % (width + 100), height / (2), (mouseY - height / 2) / (2 * xsplit.value()), (mouseY - height / 2) / 2 * (ysplit.value()), hueStart + map(mouseX, 0, width, 0, 50), pgTwo);
    f.drawFractal();
  }
  push();
  colorMode(RGB);
  background(255);
  pop();
  for (var a = 0; a < xsplit.value(); a++) {
    for (var b = 0; b < ysplit.value(); b++) {
      image(pgTwo, a * fWidth / xsplit.value(), b * fHeight / ysplit.value(), fWidth / xsplit.value(), fHeight / ysplit.value());
    }
  }

}

function fractalArt() {
  if (mouseX < cWidth && mouseY < cHeight && mouseX > 0 && mouseY > 0) {
    if (abc.value() == 'fractals') {
      background(255);
      cWidth = fWidth / xsplit.value();
      cHeight = fHeight / ysplit.value();
      push();
      colorMode(HSB);
      var distFromCenter = dist(mouseX, mouseY, cWidth / 2, cHeight / 2);
      var circleSize = 80 - distFromCenter / 6;

      circleHue = map(distFromCenter, 0, 350, hueStart, hueStart + 50);
      pgOne = createGraphics(cWidth, cHeight);
      cS = map(distFromCenter, 0, 350, 10, 70);

      f = new fractalCircle(mouseX, mouseY, cS, circleHue, pgOne);

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

    }
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
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
  pgTwo.background(255);
  fractals = [];
  linePosX = 0;
  background(255);
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