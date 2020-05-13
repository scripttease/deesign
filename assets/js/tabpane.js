//array from html collection
// arrayMe :: HTMLCollection -> Array
function arrayMe(htmlColl) {
  return Array.prototype.slice.call(htmlColl);
}


let active = document.querySelectorAll('active-show');
let navLink = document.querySelectorAll('.nav-link');
// console.log(navLink)
let tabPane = document.querySelectorAll('.tab-pane');


function swapActive(elem) {
  if (elem.classList.contains('active-show')) {
    elem.classList.remove('active-show')
  } else {
    elem.classList.add('active-show')
  }
};

let re = /(#[a-z0-9]+)/;

// function name() {
//   tabPane.forEach(pane) => {
//     if (pane.querySelector == (result[1]) !& link.classList.contains('active-show')) {
//       //  has href ANDNOT classlist active show) {
//       // classlist add active show
//     } else {
//       // classlist remove active-show
//     }
//   }
// }


navLink.forEach(link => {
  link.addEventListener("click", function () {
    swapActive(link);
    let hrf = re.exec(link.href)[1];
    console.log(hrf)

    let targetTabPane = document.querySelector(hrf)
    console.log(targetTabPane)

    tabPane.forEach(pane => {
      console.log('tabpaneforeach')
      if ((pane.id == hrf) && (pane.classList.contains('active-show') !== true )) {
        pane.classList.add('active-show')
        console.log('add')
      } else if ((pane.id !== hrf) && (pane.classList.contains('active-show') == true )){
        pane.classList.remove('active-show')
        console.log('remove')
      } else {
        console.log('sadtimes')
      }
    })
    // let targetTabPane = document.querySelector(hrf)
    // targetTabPane.classList.add('active-show')
  });

});

// navLink.forEach(link => {
//   link.addEventListener("click", function () {
//     swapActive(link);
//     let result = re.exec(link.href);
//     let targetTabPane = document.querySelector(result[1])
//     targetTabPane.classList.add('active-show')
//   });
// });

// navLink[0].onclick = function swapActive() {
//     active[0].className = 'nav-link';
//     navLink[1].className = 'nav-link active-show'
// }

// function swapActive() {
//   navLink[0].onclick = function() {
//     active[0].className = 'nav-link';
//     navLink[1].className = 'nav-link active-show'
//   }
// }

// swapActive()

// document.getElementById('the-box').addEventListener('click', function () {
//   // Using an if statement to check the class
//   if (this.classList.contains('bad')) {
//     // The box that we clicked has a class of bad so let's remove it and add the good class
//    this.classList.remove('bad');
//    this.classList.add('good');
//   } else {
//     // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//     alert("You can proceed!");
//   }
// });