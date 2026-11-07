var barHeightString;
var barHeightStringPercentage;
var bar = document.getElementById("mybar");
var myTimer = document.getElementById("time");

//set intitial height to %
document.getElementById("mybar").style.height = "55%";

function drain() {
  var h = document.getElementById("mybar").style.height;
  var hAsNum = parseInt(h, 10); //10 denotes decimal system

  if (hAsNum > 0) {
    hAsNum = hAsNum -= 1; //decrement by 1
    var hAsPercent = hAsNum.toString().concat("%");
    console.log(hAsPercent);
    document.getElementById("mybar").style.height = hAsPercent;
    if (hAsNum >= 30) {
      document.getElementById("mybar").style.backgroundColor = "green";
    } else if (hAsNum >= 10) {
      document.getElementById("mybar").style.backgroundColor = "yellow";
    } else if (hAsNum > 0) {
      console.log("DANGER!!!");
      document.getElementById("mybar").style.backgroundColor = "red";
    } else {
      console.log("YOU LOSE.");
      document.getElementById("button").setAttribute("onclick", "");
    }

    //setTimeout(function, delay, parameter)
    setTimeout(drain, 200);
  }
}

function boost() {
  var h = document.getElementById("mybar").style.height;
  var hAsNum = parseInt(h, 10); //10 denotes decimal system
  var hAsNum = (hAsNum += 5);

  if (hAsNum >= 105) {
    hAsNum = 100;
  }
  var hAsPercent = hAsNum.toString().concat("%");
  console.log("Boost to " + hAsPercent);
  document.getElementById("mybar").style.height = hAsPercent;
}

drain();
