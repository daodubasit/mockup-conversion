var classname="carousel";
  function myFunction(x) {
    if (x.matches) { // If media query matches
        classname= "carousel1";
    } else {
        classname= "carousel";
    }
}

// window.onresize = function(event) {
// };

$( window ).resize(function() {
    var x = window.matchMedia("(min-width: 360px) and (max-width: 767px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  });

$('#carouselExampleControls').carousel({
    interval: 4000
  })
  
  $('.'+classname+' .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });
