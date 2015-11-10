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

function fractalLine(x, y, sizeX,sizeY, lineHue, pgOne) {
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