/** Load HTML */

$(document).ready(function(){
    var offset1 = $(".header-end").offset().top;
        var offset2 = $(".header").outerHeight();
        var offset3 = $(".header").offset().top;

        if($( window ).width() > 999){
            $(this).scroll(function() {
            if ($(window).scrollTop() > offset1) {
                $(".header").addClass("on-scroll");
            }
            else if ($(window).scrollTop() < offset2){
                $(".header").removeClass("on-scroll");
            }

        });

        }
        else{
            $(this).scroll(function() {
            if ($(window).scrollTop() > offset1) {
                $(".header").addClass("on-scroll");
            }
            else if ($(window).scrollTop() < offset2){
                $(".header").removeClass("on-scroll");
            }

        });
        }
        
        
        
});

// Update Play Button Text Based on Completion
 $(document).ready(function() {
    $('.card.completed').each(function () {
      $(this).find('.play-btn').text('PLAY AGAIN');
      if ($(this).find('.done').length === 0) {
        $(this).append('<span class="done"></span>');
      }
    });
});

$(document).ready(function () {
  // Open Modal
  // $("#openModal").on("click", function () {
  //   $("#infoModal").css("display", "flex");
  //   $("body").css("overflow-y", "hidden");
  // });

  // Close Modal via close button
  // $(".close-button").on("click", function () {
  //   $("#infoModal").css("display", "none");
  //   $("body").css("overflow-y", "scroll");
  // });

  // Close Modal on background click
  // $(window).on("click", function (e) {
  //   if ($(e.target).is("#infoModal")) {
  //     $("#infoModal").css("display", "none");
  //     $("body").css("overflow-y", "scroll");
  //   }
    
  // });
  // Hover BG Gray Cards 

  const bgGrayCards = document.querySelectorAll('.bg-gray');

  bgGrayCards.forEach((card) => {
    const playMoreBtn = card.querySelector('.playmore');
  
    card.addEventListener('mouseenter', () => {
      playMoreBtn.classList.add('active');
    });
  
    card.addEventListener('mouseleave', () => {
      playMoreBtn.classList.remove('active');
    });
  });
  


});


$(document).ready(function () {
  // Disable scroll function
  function disableScroll() {
    $('body').addClass('modal-open');
    document.addEventListener('touchmove', preventScroll, { passive: false });
  }

  // Enable scroll function
  function enableScroll() {
    $('body').removeClass('modal-open');
    document.removeEventListener('touchmove', preventScroll);
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  // Open Modal
  $("#openModal").on("click", function () {
    $("#infoModal").css("display", "flex");
    disableScroll();
  });

  // Close Modal via close button
  $(".close-button").on("click", function () {
    $("#infoModal").css("display", "none");
    enableScroll();
  });

  // Close Modal on background click
  $("#infoModal").on("click", function (e) {
    if ($(e.target).is("#infoModal")) {
      $("#infoModal").css("display", "none");
      enableScroll();
    }
  });
});
