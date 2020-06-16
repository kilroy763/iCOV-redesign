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
  
   
    
/**
 * Instructies voor tijdlijn:
 * 
 * - data-year attribute toevoegen aan elke sectie
 * - class 'year-section' toevoegen aan elke sectie
 * - elke sectie 100% hoog / breed maken
 * - in JS, IntersectionObserver gebruiken
 */


 

 

let intersectItem = document.querySelectorAll('.year-section'), i;

const config = {
    rootMargin: '-50px 0px -55%'
  };


const iObserver = new IntersectionObserver(items => {

  // Intersecting? (is the element in the available viewport)
  if (items[0].isIntersecting) {
		// Log visibility
    console.log('Visible? Yes');


		
		// Element that is visible
		console.log(items[0].target);
		

  } else {
    console.log('Visible? No')

  

    visiblity = 'invisible';
    statusText = 'Nothing is visible, scroll!';
  }



},  config);

// Loop through and observe intersect items
for (i = 0; i < intersectItem.length; ++i) {
  iObserver.observe(intersectItem[i]);
}


function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.verticalnav a.active');
    const shouldBeActive = document.querySelector('.verticalnav a[data-year=' + id + ']');
  
    if (currentlyActive) {
      currentlyActive.classList.remove('active');
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add('active');
    }
  }


// let observer = new IntersectionObserver(function (entries, self) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       intersectionHandler(entry); 
//     }
//   });
// }, config);

// sections.forEach(section => {
//   observer.observe(section);
// });

