function hexToRGB(h) {
  // CONVERTS HEX COLORT TO RGB COLOR

  let r = 0,
    g = 0,
    b = 0;
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  } else if (h.length == 7) {
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
  // CONVERTS RGB COLOR TO HEX COLOR

  for (var i = 0; i <= 2; i++) {
    list[i] = list[i].toString(16);
    if (list[i].length == 1) {
      list[i] = "0" + list[i]
    }
  }
  colorHexString = list[0] + list[1] + list[2];
  var colorHex = "#" + colorHexString
  return colorHex
}

/* ------- WITH CHOOSEN COLORS ---------- */
function blend() {
  // READS CHOOSEN OR GENERATED SIDE COLORS AND CREATES 5 MID COLORS WITH THEM

  // count of mid color
  const midPoint = 5;

  // reading side colors
  var pickLeft = document.getElementById("color-left").value; //takes left hex
  var rgbLeft = hexToRGB(pickLeft); //converts left to rgb
  var pickRight = document.getElementById("color-right").value; //takes right hex
  var rgbRight = hexToRGB(pickRight); //converts right to rgb

  // calculating diffrence of side colors to create mid colors
  var rDiff = Math.round(Math.abs(rgbLeft[0] - rgbRight[0]) / (midPoint+1));
  var gDiff = Math.round(Math.abs(rgbLeft[1] - rgbRight[1]) / (midPoint+1));
  var bDiff = Math.round(Math.abs(rgbLeft[2] - rgbRight[2]) / (midPoint+1));
  var rgbList = [rDiff, gDiff, bDiff];

  // rgb lists of mid colors
  var mid1rgb = [];
  var mid2rgb = [];
  var mid3rgb = [];
  var mid4rgb = [];
  var mid5rgb = [];

  // this list created for making next step much more easier
  var midList = [mid1rgb, mid2rgb, mid3rgb, mid4rgb, mid5rgb];

  // calculating r g and b values of mid colors from large number to small one
  for (var i=0; i<=2; i++){
    if (rgbLeft[i] > rgbRight[i]) {
      var start = 5;
      for (var j=0; j<=4; j++){
        midList[j].push(  rgbRight[i] + (rgbList[i] * start) );
        start--;
      }
    }
    if (rgbLeft[i] == rgbRight[i]) {
      for (var j=0; j<=4; j++){
        midList[j].push(rgbLeft[i]);
      }
    }
    if (rgbLeft[i] < rgbRight[i]) {
      for (var j=0; j<=4; j++){
        midList[j].push(  rgbLeft[i] + (rgbList[i] * (j+1)) );
      }
    }
  }

  // coloring side bars according to choosen colors
  document.getElementById("col1").style.backgroundColor = pickLeft;
  document.getElementById("col3").style.backgroundColor = pickRight;

  // shows mid colors' hex and rgb codes
  document.getElementById("result1rgb").innerHTML = `(${mid1rgb[0]}, ${midList[0][1]}, ${midList[0][2]})`;
  document.getElementById("result2rgb").innerHTML = `(${midList[1][0]}, ${midList[1][1]}, ${midList[1][2]})`;
  document.getElementById("result3rgb").innerHTML = `(${midList[2][0]}, ${midList[2][1]}, ${midList[2][2]})`;
  document.getElementById("result4rgb").innerHTML = `(${midList[3][0]}, ${midList[3][1]}, ${midList[3][2]})`;
  document.getElementById("result5rgb").innerHTML = `(${midList[4][0]}, ${midList[4][1]}, ${midList[4][2]})`;

  document.getElementById("result1hex").innerHTML = RGBtoHex(mid1rgb);
  document.getElementById("result2hex").innerHTML = RGBtoHex(mid2rgb);
  document.getElementById("result3hex").innerHTML = RGBtoHex(mid3rgb);
  document.getElementById("result4hex").innerHTML = RGBtoHex(mid4rgb);
  document.getElementById("result5hex").innerHTML = RGBtoHex(mid5rgb);

  // coloring mid containers with calculated mid colors
  document.getElementById("mid1").style.background = RGBtoHex(mid1rgb);
  document.getElementById("mid2").style.background = RGBtoHex(mid2rgb);
  document.getElementById("mid3").style.background = RGBtoHex(mid3rgb);
  document.getElementById("mid4").style.background = RGBtoHex(mid4rgb);
  document.getElementById("mid5").style.background = RGBtoHex(mid5rgb);

  document.getElementById("topbar").style.background = `linear-gradient(to right, ${pickLeft}, ${pickRight})`;
}

/* ---------- WITH RANDOM COLORS ---------- */
function randomColors(){
  // instead of choosing with color input, user can generate 2 random colors
  // this functions gets 2 random colors and calls blend() function
  const midPoint = 5;

  var leftR = Math.floor(Math.random() * 256);
  var leftG = Math.floor(Math.random() * 256);
  var leftB = Math.floor(Math.random() * 256);
  var rgbLeft = [leftR, leftG, leftB];
  var pickLeft = RGBtoHex(rgbLeft);

  var rightR = Math.floor(Math.random() * 256);
  var rightG = Math.floor(Math.random() * 256);
  var rightB = Math.floor(Math.random() * 256);
  var rgbRight = [rightR, rightG, rightB];
  var pickRight = RGBtoHex(rgbRight);

  document.getElementById("col1").style.backgroundColor = pickLeft;
  document.getElementById("col3").style.backgroundColor = pickRight;

  document.getElementById("color-left").value = pickLeft;
  document.getElementById("color-right").value = pickRight;

  blend();
}
