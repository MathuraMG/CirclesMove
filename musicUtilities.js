function makeMusic() {
  var toneValue;
  posX = (posX + 1) % 800;
  //background(0);
  //line(posX,0,posX,height);

  for (var i = 0; i < 800; i++) {
    colour = getPixelXY(imgData, posX, i)[2];
    //print(getPixelXY(imgData,posX,i)[0]);
    //print(colour);
    if (colour < 255) {
      toneValue = i;
      //print(toneValue+','+posX);
      //toneValue = map(toneValue, 0, 800, 0, 4);
      break;
    }
  }
  print(posX + ',' + toneValue);

  toneValue = floor(toneValue);
  for (var i = 0; i < totNotes; i++) {
    if (toneValue == i)
    //if (vol[i] >= 0.5)
      vol[i] = 0.1; //osc[i].amp(1);
    // else vol[i] = (0.5 + vol[i]) / 2;
    else {
      if (vol[i] > 0)
        vol[i] = (vol[i] - 0) / 2; //osc[i].amp(0);
      else
        vol[i] = 0;
    }
  }
  for (var i = 0; i < totNotes; i++) {
    osc[i].amp(vol[i]);
  }
  // print(toneValue);

}

function getPixel(imgData, index) {
  var i = index * 4,
    d = imgData.data;
  return [d[i], d[i + 1], d[i + 2], d[i + 3]] // returns array [R,G,B,A]
}

function getPixelXY(imgData, x, y) {
  return getPixel(imgData, y * imgData.width + x);
}