const items =  [" ", "cherry", "lemon", "orange", "bell", "star", "diamond"];
var point = 25;

function updatePoint(r1, r2, r3){
  if(r1 == 1 && r2 != 1 && r3 != 1){
    point += 2;
  }
  else if(r1 != 1 && r2 == 1 && r3 != 1){
    point += 2;
  }
  else if(r1 != 1 && r2 != 1 && r3 == 1){
    point += 2;
  }
  else if(r1 == 1 && r2 == 1 && r3 != 1){
    point += 5;
  }
  else if(r1 == 1 && r2 != 1 && r3 == 1){
    point += 5;
  }
  else if(r1 != 1 && r2 == 1 && r3 == 1){
    point += 5;
  }
  else if(r1 == 1 && r2 == 1 && r3 == 1){
    point += 10;
  }
  else if(r1 == 2 && r2 == 2 && r3 == 2){
    point += 20;
  }
  else if(r1 == 3 && r2 == 3 && r3 == 3){
    point += 50;
  }
  else if(r1 == 4 && r2 == 4 && r3 == 4){
    point += 100;
  }
  else if(r1 == 5 && r2 == 5 && r3 == 5){
    point += 250;
  }
  else if(r1 == 6 && r2 == 6 && r3 == 6){
    point += 500;
  }

  document.getElementById("score").textContent = `You have ${point} Points`;
};

function rollSlot(){
  var rands = []

  for (var i=1; i<=3; i++){
    var roll = Math.ceil(Math.random()*6);
    var src = `images\\${items[roll]}.png`;
    document.getElementById(`slot${i}`).src = src;
    rands.push(roll)
  }


  updatePoint(rands[0], rands[1], rands[2]);
};

function roll(){
  point -= 1;
  document.getElementById("score").textContent = `You have ${point} Points`;

  if(point < 0){
    document.getElementById("score").textContent = `You lost.`;
  }
  else {
    for (var i=1; i<=3; i++){
      document.getElementById(`slot${i}`).src = "images\\roll.gif";
    }
    setTimeout(rollSlot, 1500);
  }
}
