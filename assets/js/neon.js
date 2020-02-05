let allTextHolders = document.getElementsByClassName("neon-text-container"); 
console.log(allTextHolders);
let numTextHolders = allTextHolders.length;
var n;

for (n = 0; n < numTextHolders; n+=1) {
  let textHolderAl = allTextHolders[n];

  // let textHolderAl = document.getElementsByClassName("neon-text-container")[0];
  let textAl = textHolderAl.innerText;
  let charsAl = textAl.length;
  let newTextAl = "";
  var i;

  for (i = 0; i < charsAl; i+=1) {
    newTextAl += "<span>" + textAl.charAt(i) + "</span>";
  }
  textHolderAl.innerHTML = newTextAl;
  console.log(textHolderAl);

  let lettersAl = textHolderAl.getElementsByTagName("span");
  let flickersAl = [15, 13, 9, 11, 13, 15, 17];
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
      randomLetterAl.className = '';
      // console.log(randomLetterAl);
      // console.log(randomLetterAl.className);
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
    var rand = randomFromInterval(1000,6000);

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
}


