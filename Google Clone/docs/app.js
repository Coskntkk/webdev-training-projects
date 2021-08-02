function search(){
  var inputText = document.getElementById("inputbar").value;

  var words = inputText.split(" ");

  var root = "http://www.google.com/search?q="

  for (var i=0; i<words.length; i++){
    root = root + `${words[i]}+`
  };

  var url = root.slice(0, -1);

  window.location=url;
};

function iFeelLucky(){
  window.location = "https://www.linkedin.com/in/co%C5%9Fkun-atak-85855315b/"
}
