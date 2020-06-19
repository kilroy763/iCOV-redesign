// Code to toggle the hamburger menu ------------------------

const menuBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('active');
    menuOpen = true;
    console.log("open")
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
    console.log("open")
  }
});

// //---------------------------------------------------------

const video = document.querySelector('.headervideo');
const headerText = document.querySelector('.headertext');
const vidContainer = document.querySelector('.videocontainer');

video.addEventListener('click', hideVid);
video.addEventListener('ontouchstart', hideVid);

function hideVid() {
  let viewWidth = window.innerWidth;
  if (viewWidth > 768) {
    headerText.classList.toggle('hide');
    vidContainer.classList.toggle('bigvideocontainer');
    console.log('het werkt')
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// Code to show the audio player within an overlay at the bottom of a viewport
document.querySelector(".removeoverlay").addEventListener("click", stopaudio);

document.querySelector(".showaudio").addEventListener("click", myFunction);

function myFunction() {
  console.log("het werkt")
  var element = document.querySelector(".removeaudioplayer");
  element.classList.add("show");
  audio.play();
  isPlaying = true;
  playSound();
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

// //------------------------------------------------------ 

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 15,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.button_topic_right',
    prevEl: '.button_topic_left'
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      spaceBetween: 15,
      slidesPerView: 1.5
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2.5
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 3
    },
  }
});