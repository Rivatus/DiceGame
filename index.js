var images = document.getElementsByTagName("img");

function setImage(img) {
  var score = Math.floor(6*Math.random())+1;
  var pos = "images/dice" + score + ".png";
  img.setAttribute("src",pos);
  return score;
}

var player1Score = setImage(images[0]);
var player2Score = setImage(images[1]);

var heading = document.querySelector("h1");

if(player1Score > player2Score ) {
  heading.innerText = String.fromCodePoint(0x1F6A9) + " Player 1 wins";
}

else if(player1Score < player2Score ) {
  heading.innerText = "Player 2 wins" + String.fromCodePoint(0x1F6A9);
}
else {
  heading.innerText = "Draw";
}
