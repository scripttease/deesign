let textHolderAl = document.getElementsByClassName("neon-text-container")[0];
let textAl = textHolderAl.innerText;
console.log(textAl);
let charsAl = textAl.length;
console.log(charsAl);
let newTextAl = "";
var i;

for (i = 0; i < charsAl; i+=1) {
  newTextAl += "<span>" + textAl.charAt(i) + "</span>";
}

textHolderAl.innerHTML = newTextAl;
console.log(textHolderAl);

let lettersAl = textHolderAl.getElementsByTagName("span");
let flickersAl = [5, 7, 9, 11, 13, 15, 17];
var randomLetterAl;
var randomLetterNumAl;
var flickerNumberAl;
var counterAl;


function randomFromInterval(from,to) {
  return Math.floor(Math.random()*(to-from+1)+from);
}

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function flickerAl() {
  counterAl += 1;

  if (counterAl === flickerNumberAl)
  {
    return;
  }

  setTimeout
  (
    function ()
    {
      if(hasClass(randomLetterAl, 'off')) {
        randomLetterAl.className = '';
      }
      else {
        randomLetterAl.className = 'off';
      }

      flickerAl();
    }, 30);
}

(function loop() {
  var rand = randomFromInterval(500,3000);

  randomLetterNumAl = randomFromInterval(0, charsAl - 1);
  randomLetterAl = lettersAl[randomLetterNumAl];

  flickerNumberAl = randomFromInterval(0, 6);
  flickerNumberAl = flickersAl[flickerNumberAl];

  setTimeout(function() {
    counterAl = 0;
    flickerAl();
    loop();
  }, rand);
}());
