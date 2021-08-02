var hexText = document.getElementById("text")

function getHex(){
  var hex = Math.floor(Math.random()*256).toString(16);
  if (hex.length == 1){
    hex = "0" + hex;
  };
  return hex
}

function randomColor() {
  hex1 = getHex();
  hex2 = getHex();
  hex3 = getHex();
  colorHex = hex1 + hex2 + hex3
  var newColor = "#"+colorHex

  document.body.style.backgroundColor = newColor;
  text.innerHTML = newColor;
}
