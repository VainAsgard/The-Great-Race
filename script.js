//Great Race script
var pixels2 = 0;
var pixels = 0;




var tortoiseScoot=document.getElementById('tortoise');
var hareScoot = document.getElementById('hare');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  start.src = "img/go.jpg";
  start.height = "150";

  function tortoiseMove(){
    // changing the css property function line of code? style = "marin-left ="'pixels';"
    angelScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    // make a random for each object to determine how many pixels each item will move possibly picking 1 - 10 px per cycle of timer
    randomPixels2 = Math.ceil(Math.random()*75)
    // make var to add to pixels
    pixels2 = (pixels2 + randomPixels2);
    // if statement to stop the race when a winner has been choosen
    if (pixels2 > 850) {
      stoptimer();
      tortoiseScoot.src = "img/tortoisewon.jpg";
      tortoiseScoot.width ="300";
    }
  }


  function hareMove(){
    hareScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.ceil(Math.random()*75)
    pixels = (pixels + randomPixels);
    if (pixels > 850) {
      stoptimer();
      hareScoot.src = "img/harewon.jpg";
      hareScoot.width = "300";
    }
  }
  // //make a timer
  // for each object that will make imagesmove function go every 1 seconds
    myTimer2 = setInterval(tortoiseMove, 1000)
    myTimer = setInterval(hareMove, 1000)



  function stoptimer(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
  }
}

