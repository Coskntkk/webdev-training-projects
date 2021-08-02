var letters = [
  ["A", ".-"],  ["B", "-..."],  ["C", "-.-."],  ["D", "-.."],  ["E", "."],
  ["F", "..-."],  ["G", "--."],  ["H", "...."],  ["I", ".."],  ["J", ".---"],
  ["K", "-.-"],  ["L", ".-.."],  ["M", "--"],  ["N", "-."],  ["O", "---"],
  ["P", ".--."],  ["Q", "--.-"],  ["R", ".-."],  ["S", "..."],  ["T", "-"],
  ["U", "..-"],  ["V", "...-"],  ["W", ".--"],  ["X", "-..-"],  ["Y", "-.--"],
  ["Z", "--.."],  ["1", ".----"],  ["2", "..---"],  ["3", "...--"],  ["4", "....-"],
  ["5", "....."],  ["6", "-...."],  ["7", "--..."],  ["8", "---.."],  ["9", "----."],
  [".", ".-.-.-"],  [",", "--..--"],  ["?", ".----."],  ["'", ".----."],  ["/", "-..-."],
  [":", "---..."],  [";", "-.-.-."],  ["+", ".-.-."],  ["-", "-....-"],  ["=", "-...-"],  [" ", "/"]
];

function translate(message) {
  message = message.toUpperCase();
  var final = "";

  for ( var i=0; i<message.length; i++ ) {
    for ( var j=0; j<letters.length; j++ ) {
      if ( message[i] == letters[j][0] ) {
        final = final + letters[j][1];
      }
    }
  }

  return final;
}

var numSound = 0;
function playSound(list) {
  var loopNames = [];
  for ( var i=0; i<list.length; i++ ) {
    var filename = "files\\morse_" + list[i] + ".mp3";
    loopNames.push(filename);
  }
  var sound = new Audio(loopNames[numSound]);
  sound.play();
  if ( numSound < list.length-1 ) {
    setTimeout(function(){
      numSound++;
      playSound(list);
    }, 500);
  } else {
    numSound = 0;
  }
}

var numLight = 0;
function lightBulb(list) {
  console.log(list)
  if ( list[numLight] == "short" ) {
    $(".bulb").addClass("bulb-on").delay(120).queue(function(){
      $(".bulb").removeClass("bulb-on").dequeue();
    })
  } else if ( list[numLight] == "long" ) {
    $(".bulb").addClass("bulb-on").delay(360).queue(function(){
      $(".bulb").removeClass("bulb-on").dequeue();
    })
  }
  if ( numLight < list.length-1 ) {
    setTimeout(function(){
      numLight++;
      lightBulb(list);
    }, 500);
  } else {
    numLight = 0;
  }
}

var numBG = 0;
function lightBackground(list) {
  console.log(list)
  if ( list[numBG] == "short" ) {
    $("body").addClass("bg-on").delay(120).queue(function(){
      $("body").removeClass("bg-on").dequeue();
    })
  } else if ( list[numBG] == "long" ) {
    $("body").addClass("bg-on").delay(360).queue(function(){
      $("body").removeClass("bg-on").dequeue();
    })
  }
  if ( numBG < list.length-1 ) {
    setTimeout(function(){
      numBG++;
      lightBackground(list);
    }, 500);
  } else {
    numBG = 0;
  }
}


$("button").click(function () {
  var entry = $(".entry").val();
  morse = translate(entry);
  var loopList = [];
  for (var k=0; k<morse.length; k++) {
    if ( morse[k] !== "/" ) {
      if ( morse[k] === "." ) {
        loopList.push("short");
      } else if ( morse[k] === "-") {
        loopList.push("long");
      }
    }
  }

  $(".result").text(morse);
  playSound(loopList);
  lightBulb(loopList);
  lightBackground(loopList);
});
