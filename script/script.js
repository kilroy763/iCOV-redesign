// =================================================================================================

// All buttons in een keer:
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => button.addEventListener('click', onClick));

// function onClick(event) {
//   // Welke button?

//   const button = event.target;

//   // <button data-direction="left"></button>
//   // <button data-direction="right"></button>

//   const direction = button.dataset.direction;

//   let translation = '33%';

//   if (direction === 'left') {
//     translation = '-33%';
//   }
// }

// =================================================================================================

// Per button:
// const buttonLeft = document.querySelector('[data-direction="left"]');
// const buttonRight = document.querySelector('[data-direction="right"]');

// buttonLeft.addEventListener('click', () => scrollWithinSection('left'));
// buttonRight.addEventListener('click', () => scrollWithinSection('right'));

// function scrollWithinSection(direction) {
//   let translation = '33%';

//   if (direction === 'left') {
//     translation = '-33%';
//   }
// }

// =================================================================================================




const menuBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
  }
});

 

document.querySelector(".wegaudio").addEventListener("click", stopaudio);

document.querySelector(".hoiaudio").addEventListener("click", myFunction);

function myFunction() {
    var element = document.querySelector(".wegaudioplayer");
    element.classList.add("latenzien");
    //var audio = document.getElementById("audio")
    audio.play();
    isPlaying = true;
    playSound();
    console.log("het werkt")
}

function stopaudio() {
    var element = document.querySelector(".wegaudioplayer");
    element.classList.remove("latenzien");
    isPlaying = false;
    playSound();
    console.log("het werkt")
}

function playSound() {
    var audioPlayer = document.getElementById(audio);
    if (audioPlayer.pause()) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// let acc = document.getElementsByClassName("accordion");
// let panel = document.getElementsByClassName("panel");
// let i;

//  for (i = 0; i < acc.length; i++) {
//  acc[i].addEventListener("click", function() {
//     console.log('klikie')
//     // const panelt = document.querySelector(".panel");
//     let panelState;
//     if (panelState == true) {
//       panel[i].classList.remove("panelOn");
//       panelState = false;
//     } else {
//       panel[i].classList.add("panelOn");
//       panelState = true;
//     }
//   });
// }

const acc = document.getElementsByClassName("accordion");

 for (let i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function(i) {
  const panel = document.getElementsByClassName("panel");
  console.log(panel)
  panel[i].classList.add("panelOn")
 })
}

//  function klap(a) {
//   console.log("hallo")
//   panel[a].classList.toggle("panelOn")
//  }