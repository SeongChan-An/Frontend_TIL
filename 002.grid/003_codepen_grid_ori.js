$(document).ready(function() {

    // Init Isotope
    var container = $('.work-grid');
    var grid = container.isotope({
      layoutMode: 'fitRows',
      itemSelector: '.fsd-perspective-grid-item',
      stagger: 30,
      percentPosition: true,
      fitRows: {
        gutter: '.gutter-guide'
      }
    });
  
    // Filter items on button click
    $('.filter-button-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      grid.isotope({ filter: filterValue });
    });
    $('a.button').on('click', function(){
      $('a.button').removeClass('active');
      $(this).addClass('active');
    });
    $('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
      $('.wrap-the-grid').addClass('turn');
    } else {
      $(mainParent).removeClass('active');
      $('.wrap-the-grid').removeClass('turn');
    }
  
  })
  
    //animate width for 1 second during expand and move left to 0
  
    $(this).on('click', function() {
  
     $(this).find('.animate-groww').css({
        position:'fixed',
        left: $(this).find('.animate-groww').offset().left - $(window).scrollLeft() +'px',
        //left: $(this).find('.animate-groww').offset().left - $(window).scrollLeft() +'px',
        top: $(this).find('.animate-groww').offset().top - $(window).scrollTop()+'px',
        width: $(this).find('.animate-groww').width()
    })
    
    .animate({
      top:"50%",
      width: "100%",
      left: "0%"
    }, 2000);
     
  });
  
  
  });