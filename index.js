var button = document.getElementById("hello");
button.onclick = function() {
    alert("Hello");
}

function colorBody() {
    document.body.style.backgroundColor = "#009DA5";
}  

function column() {
    document.getElementById("display").style.flexDirection = "inline";
  }