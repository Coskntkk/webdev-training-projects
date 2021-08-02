function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  }
  else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);

  return [r, g, b];
}

function RGBtoHex(list) {
  for(var i=0; i<=2; i++){
    list[i] = list[i].toString(16);
    if (list[i].length == 1) {
      list[i] = "0" + list[i]
    }
  }
  colorHexString = list[0] + list[1] + list[2];
  var colorHex = "#" + colorHexString

  return colorHex
}

function blend() {
  var pickLeft = document.getElementById("color-left").value; //takes left hex
  var rgbLeft = hexToRGB(pickLeft); //converts left to rgb

  var pickRight = document.getElementById("color-right").value; //takes right hex
  var rgbRight = hexToRGB(pickRight); //converts right to rgb

  var newR = Math.round((rgbLeft[0] + rgbRight[0]) / 2);
  var newG = Math.round((rgbLeft[1] + rgbRight[1]) / 2);
  var newB = Math.round((rgbLeft[2] + rgbRight[2]) / 2);
  var blendRGB = [newR, newG, newB]; //blend rgb
  var blendHex = RGBtoHex(blendRGB); //blend hex

  document.getElementById("result").innerHTML = blendHex;

  document.getElementById("col1").style.backgroundColor = pickLeft;
  document.getElementById("col2").style.backgroundColor = blendHex;
  document.getElementById("col3").style.backgroundColor = pickRight;

  document.getElementById("sep-left").style.backgroundImage = `linear-gradient(to right, ${pickLeft}, ${blendHex})`;
  document.getElementById("sep-right").style.backgroundImage = `linear-gradient(to right, ${blendHex}, ${pickRight})`;
}

//function random(){}
