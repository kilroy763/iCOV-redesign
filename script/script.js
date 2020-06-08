
// Code to toggle the hamburger menu ------------------------

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

//---------------------------------------------------------


// code to toggle the line under NL and ENG ---------------

var el = {
  one: document.querySelector('.nl'),
  two: document.querySelector('.eng'), 
  container: document.querySelector('.language_toggle')
};

var func = {
  toggleActive: function(ele) {
    ele = event.target;
    var hold = el.container.children,
        huh = el.container.children.length,
        hasActive = ele.classList.contains('toggled');
    for (i = 0; i < huh; i++) {
      if (hold[i].classList.contains('toggled')) {
        hold[i].classList.remove('toggled');
      }
    }
    if (!hasActive) {
      ele.classList.add('toggled');
    }
  }
};

el.one.addEventListener("click", func.toggleActive);
el.two.addEventListener("click", func.toggleActive);

//-------------------------------------------------------- 

 
// Code to show the audio player within an overlay at the bottom of a viewport
document.querySelector(".removeoverlay").addEventListener("click", stopaudio);

document.querySelector(".showaudio").addEventListener("click", myFunction);

function myFunction() {
    var element = document.querySelector(".removeaudioplayer");
    element.classList.add("show");
    audio.play();
    isPlaying = true;
    playSound();
    console.log("het werkt")
}
//------------------------------------------------------ 


//code to stop the podcast with custom buttom
function stopaudio() {
    var element = document.querySelector(".removeaudioplayer");
    element.classList.remove("show");
    isPlaying = false;
    playSound();
    console.log("het werkt")
}
//------------------------------------------------------ 

//code to play the podcast with custom button
function playSound() {
    var audioPlayer = document.getElementById(audio);
    if (audioPlayer.pause()) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

//------------------------------------------------------ 


const acc = document.getElementsByClassName("accordion");

 for (let i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function(i) {
  const panel = document.getElementsByClassName("panel");
  console.log(panel)
  panel[i].classList.add("panelOn")
 })
}

// Commented code, WIP -----------------------------------

//  function klap(a) {
//   console.log("hallo")
//   panel[a].classList.toggle("panelOn")
//  }

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