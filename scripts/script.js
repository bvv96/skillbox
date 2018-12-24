$(function() {
	$('body').on('click', '.mob-menu-btn', function(){
		$('.mob-menu').slideToggle();
	});

	$('body').on('click', '.requestcall', function(){
		$('.requestcall-container').slideToggle();
	});

	$('body').on('click', '.requestcall-post-body', function(){
		$('.requestcall-container').slideToggle();
	});

	$('body').on('click', '.more-btn', function(){
		$('.aboutme-container').slideToggle()
	});

	$('body').on('click', '.cost-btn', function(){
		$('.services-item__cost').slideToggle()
	});

	$('body').on('click', '.project-btn', function(){
		$('.request-project-container').slideToggle()
	});

	$('body').on('click', '.remove-btn', function(){
		$('.requestcall-container').hide(500);
	});

	$('body').on('click', '.remove-btn', function(){
		$('.request-project-container').hide(500);
	});


// slider

$('.slider').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
})