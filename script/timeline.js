$(function(){
    var overlay = $('<div class="overlay"></div>');
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
  
const intersectItems = document.querySelectorAll('.year-section');

const config = {
  rootMargin: '-50px 0px -55%'
};

const iObserver = new IntersectionObserver(entries => {
  const target = entries[0].target;

  if (entries[0].isIntersecting) {
    const year = target.dataset.year;
    const currentlyActive = document.querySelector('.verticalnav a.active');
    const shouldBeActive = document.querySelector('.verticalnav a[data-year="' + year + '"]');

    if (currentlyActive) {
      currentlyActive.classList.remove('active');
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add('active');
    }
  }
},  config);

intersectItems.forEach(el => iObserver.observe(el));
