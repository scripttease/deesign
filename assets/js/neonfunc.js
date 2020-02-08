const FLICKER_COUNTS = Object.freeze([15, 13, 9, 11, 13, 15, 17]);

// random integer from range
// randInt :: (num, num) -> num
function randInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

//array from html collection
// arrayMe :: HTMLCollection -> Array
function arrayMe(htmlColl) {
  return Array.prototype.slice.call(htmlColl);
}

// spanifySign :: elem -> elem
function spanifySign(elem) {
  let signText = elem.innerText;
  let spans = "";
  signText.split("").forEach(function(letter) {
    spans += "<span>" + letter + "</span>";
  });
  elem.innerHTML = spans;
  return elem;
}

function flickerLetter(letter, maxIterations) {
  let counter = 0;
  function flickerLetter() {
    counter += 1;

    if (counter >= maxIterations) {
      letter.classList.remove("off");
      return;
    }

    setTimeout(function() {
      letter.classList.toggle("off");
      flickerLetter();
    }, 30);
  }
  flickerLetter();
}

function keepFlickeringRandomLetters(element, minInterval, maxInterval) {
  let letterSpans = element.getElementsByTagName("span");
  function flickerNext() {
    let randomLetter = randomElement(letterSpans);
    let randomNum = randomElement(FLICKER_COUNTS);
    flickerLetter(randomLetter, randomNum);
    setTimeout(flickerNext, randInt(minInterval, maxInterval));
  }
  flickerNext();
}

// randomElement :: Iterable<a> -> a
function randomElement(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

let allSigns = document.getElementsByClassName("neon-text-container");
let allSignsArray = arrayMe(allSigns);

allSignsArray.forEach(function(sign) {
  spanifySign(sign);
  keepFlickeringRandomLetters(sign, 600, 8000);
});
