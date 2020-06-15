
// Code to toggle the hamburger menu ------------------------

 const menuBtn = document.querySelector('.nav_toggle');
 const menu = document.querySelector('.menu');
 let menuOpen = false;
 menuBtn.addEventListener('click', () => {
   if(!menuOpen) {
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

video.addEventListener( 'click', function() {
  headerText.classList.toggle('hide');
}); 

// // code to toggle the line under NL and ENG ---------------

// var el = {
//   one: document.querySelector('.nl'),
//   two: document.querySelector('.eng'), 
//   container: document.querySelector('.language_toggle')
// };

// var func = {
//   toggleActive: function(ele) {
//     ele = event.target;
//     var hold = el.container.children,
//         huh = el.container.children.length,
//         hasActive = ele.classList.contains('toggled');
//     for (i = 0; i < huh; i++) {
//       if (hold[i].classList.contains('toggled')) {
//         hold[i].classList.remove('toggled');
//       }
//     }
//     if (!hasActive) {
//       ele.classList.add('toggled');
//     }
//   }
// };

$(function(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $('.popup').show();
  $('.close').click(function(){
  $('.popup').hide();
  overlay.appendTo(document.body).remove();
  return false;
  });
  
  
   
  
  $('.x').click(function(){
  $('.popup').hide();
  overlay.appendTo(document.body).remove();
  return false;
  });
  });

 


// var swiper3 = new Swiper('.swiper-container', {
//     centeredSlides: true,
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//       breakpoints: {
//     // when window width is >= 320px
//     1500: {

// 			noSwiping: true,
// 			allowSlidePrev: false,
// 			allowSlideNext: false
//     },
//   }});



// el.one.addEventListener("click", func.toggleActive);
// el.two.addEventListener("click", func.toggleActive);

// //-------------------------------------------------------- 

 
// // Code to show the audio player within an overlay at the bottom of a viewport
// document.querySelector(".removeoverlay").addEventListener("click", stopaudio);

// document.querySelector(".showaudio").addEventListener("click", myFunction);

// function myFunction() {
//     var element = document.querySelector(".removeaudioplayer");
//     element.classList.add("show");
//     audio.play();
//     isPlaying = true;
//     playSound();
//     console.log("het werkt")
// }
// //------------------------------------------------------ 


// //code to stop the podcast with custom buttom
// function stopaudio() {
//     var element = document.querySelector(".removeaudioplayer");
//     element.classList.remove("show");
//     isPlaying = false;
//     playSound();
//     console.log("het werkt")
// }
// //------------------------------------------------------ 

// //code to play the podcast with custom button
// function playSound() {
//     var audioPlayer = document.getElementById(audio);
//     if (audioPlayer.pause()) {
//         audioPlayer.play();
//     } else {
//         audioPlayer.pause();
//     }
// }

// //------------------------------------------------------ 

// Commented code, WIP -----------------------------------

// $(window).resize(function(){
//   if ( $('.swiper-slide').height() < $('.swiper-container').height() ) $('.swiper-scrollbar').hide();
//   else $('.swiper-scrollbar').show()
// })

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 15,
 
  grabCursor: true,
  navigation: {
    nextEl: '.button_topic_right'
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
}});


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


/**
 * Instructies voor tijdlijn:
 * 
 * - data-year attribute toevoegen aan elke sectie
 * - class 'year-section' toevoegen aan elke sectie
 * - elke sectie 100% hoog / breed maken
 * - in JS, IntersectionObserver gebruiken
 */


 

//  var observer = new IntersectionObserver(onIntersect, {
//    threshold: 0.3
//  });

//  var sections = document.querySelectorAll('.year-section');

//  sections.forEach(section => observer.observe(section));

//  function onIntersect(entries) {
//    var element = entries[1];
//    var year = element.dataset.year;
//    console.log("werkt")
//  }


// var intersectionObserver = new IntersectionObserver(function(entries) {
//   // If intersectionRatio is 0, the target is out of view
//   // and we do not need to do anything.
//   if (entries[0].intersectionRatio <= 0) return;

//   loadItems(10);
//   console.log('Loaded new items');
// });
// // start observing
// intersectionObserver.observe(document.querySelector('.scrollerFooter'));

//





// const header = document.querySelector(".werkend");
// const sectionOne = document.querySelector("#one");

// var thresholds = IntersectionObserver.thresholds;
// console.log(thresholds)

// const sectionOneOptions = {
//   threshold: 0.5
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.intersectionRatio > 0.5) {
//       header.classList.add("werkt");
//       console.log('werkt')
//     } else {
//       header.classList.remove("werkt");
//       console.log('weg')
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);














// const blok = document.querySelectorAll('.year-section');

// observer = new IntersectionObserver((entries) =>{
// entries.forEach(entry =>{
//   if(entry.intersectionRatio > 0.5){
//     blok.classList.add("werkt");
//     console.log('werkt')
//   }
//   else {
//     blok.classList.remove("werkt");
//     console.log('weg')
//   }
// })
// })

// blok.forEach(blokje => {
//   observer.observe(blokje)
// })
