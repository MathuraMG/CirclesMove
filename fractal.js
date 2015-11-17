function circleArt(selectX, selectY) {
  if (pause == false) {
    linePosX++;
    f = new circleArtPiece((linePosX) % (width + 100), selectY, (mouseY - height / 2) / (2 * xsplit.value()), (mouseY - height / 2) / 2 * (ysplit.value()), hueStart + map(mouseX, 0, width, 0, 50), pgTwo);
    f.drawFractal();
  }
  push();
  colorMode(RGB);
  //background(overallBG);
  pop();
  for (var a = 0; a < xsplit.value(); a++) {
    for (var b = 0; b < ysplit.value(); b++) {
      image(pgTwo, a * fWidth / xsplit.value(), b * fHeight / ysplit.value(), fWidth / xsplit.value(), fHeight / ysplit.value());
    }
  }
}

function lineArt(selectX, selectY,hs) {
  //blendMode(LIGHTEST);
  if (pause == false) {
    brCount++;
    if ((brCount - 1) % numLines == 0) {
      l = new elt();
      l.init(selectX, selectY, pgThree);
      strokeWeight(0);
      l.drawLine();
      linesBr[((brCount - 1) / numLines) + 1] = l;
    } else {
      a = floor(((brCount - 1) / numLines));
      curvesBW(linesBr[a], linesBr[a + 1], (brCount - 1) % numLines, hs, pgThree);
    }
  }

  for (var a = 0; a < xsplit.value(); a++) {
    for (var b = 0; b < ysplit.value(); b++) {
      image(pgThree, a * fWidth / xsplit.value(), b * fHeight / ysplit.value(), fWidth / xsplit.value(), fHeight / ysplit.value());
    }
  }
 drawPalette(paletteX, paletteY); 
}

function fractalArt() {
  var xPoint,yPoint;
  if(touchIsDown)
  {
    xPoint = touchX;
    yPoint = touchY;
  }
  else{
    xPoint = mouseX;
    yPoint = mouseY;
  }
  if (xPoint < cWidth && yPoint < cHeight && xPoint > 0 && yPoint > 0) {
    if (selectPattern == 'fractals') {
      background(overallBG);
      cWidth = fWidth / xsplit.value();
      cHeight = fHeight / ysplit.value();
      push();
      colorMode(HSB);
      var distFromCenter = dist(xPoint, yPoint, canvasWidth / 2, canvasHeight/ 2);
      var circleSize = canvasWidth/17 - distFromCenter / 8;


      circleHue = map(distFromCenter, 0, sqrt((canvasWidth*canvasWidth+canvasHeight*canvasHeight)/4), hueStart, hueStart + 50);
      pgOne = createGraphics(cWidth, cHeight);
      cS = map(distFromCenter, 0, 350, 10, 70);

      f = new fractalCircle(xPoint, yPoint, circleSize, circleHue, pgOne);
      //print(xPoint+','+yPoint);

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
function curvesBW(lines1, lines2, i, hs,pgThree) {
  //for (var i = 0; i < 50; i++) {
  l = new elt();
  l.init(mouseX,mouseY,pgThree);
  colorMode(HSB);
  pgThree.stroke(hs + abs((frameCount % 100) - 50), 100, 100, 50);
  for (var a = 1; a < lines2.ax.length; a++) {

    l.ax[a] = lines1.ax[a] + ((lines2.ax[a] - lines1.ax[a]) / numLines) * i;
    l.ay[a] = lines1.ay[a] + ((lines2.ay[a] - lines1.ay[a]) / numLines) * i;
    l.lax[a] = lines1.lax[a] + ((lines2.lax[a] - lines1.lax[a]) / numLines) * i;
    l.lay[a] = lines1.lay[a] + ((lines2.lay[a] - lines1.lay[a]) / numLines) * i;
    pgThree.strokeWeight(0.5);

    //noFill();
    pgThree.line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
    pgThree.line(l.lax[a], l.lay[a], l.lax[a - 1], l.lay[a - 1]);
    //arc(l.ax[a], l.ay[a], dist(l.ax[a - 1], l.ay[a - 1],l.ax[a], l.ay[a]), random(5,10),random(0,0.5), random(0.5,1));
    //}
    //lines = l;
  }
}

function fractalCircle(x, y, size, circleHue, pgOne) {
  this.x = x;
  this.y = y;
  this.circleHue = circleHue;
  this.size = size;
  this.drawFractal = function() {

    angleMode(DEGREES);

    //translate(this.x, this.y);

    for (var k = 0; k < 4; k++) {

      circles = [];
      angle = 45 * k;
      angleMode(DEGREES);
      //rotate(45);
      a = new circle(this.size, mouseX, mouseY, 0, this.circleHue, pgOne);

      circles.push(a);
      for (var i = 0; i < totIt; i++) {

        for (var j = 0; j < circles.length; j++) {

          if (circles[j].flag == i) {

            val = circles[j].draw();
            r = circles[j].radius;
            var newx2, newy;
            if (k > 0) {
              newx2 = val.x2 - r + r * cos(angle);
              newx1 = val.x1 + r - r * cos(angle);
              newy2 = val.y - r * sin(angle);
              newy1 = val.y + r * sin(angle);
            } else {
              newx2 = val.x2;
              newx1 = val.x1
              newy2 = val.y;
              newy1 = val.y;
            }
            b1 = new circle(val.radius, newx1, newy1, i + 1, this.circleHue, pgOne);
            circles.push(b1);
            b2 = new circle(val.radius, newx2, newy2, i + 1, this.circleHue, pgOne);
            circles.push(b2);
          }
        }
      }
    }


  }


}

function circleArtPiece(x, y, sizeX, sizeY, lineHue, pgOne) {
  this.x = x;
  this.y = y;
  this.lineHue = lineHue;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.drawFractal = function() {
    colorMode(HSB);
    strokeWeight(0.5);
    pgOne.stroke(lineHue, 100, 100);
    noFill();
    pgOne.ellipse(x, y, sizeX, sizeY);
  }

}

function lineArtPiece(x, y, sizeX, sizeY, lineHue, pgOne) {
  this.x = x;
  this.y = y;
  this.lineHue = lineHue;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.drawFractal = function() {
    colorMode(HSB);
    strokeWeight(0.5);
    pgOne.stroke(lineHue, 100, 100);
    noFill();
    pgOne.line(x, y, sizeX, sizeY);
  }

}