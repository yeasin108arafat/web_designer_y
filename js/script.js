$(document).ready(function () {
	//Owl Carousel
	$('.what-content ul').owlCarousel({
		items: 6,
		center: false,
		loop: true,
		margin: 30,
		nav: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		responsive:{
			0:{
				items:3,
			},
			400:{
				items:4,
			},
			500:{
				items:5,
			},
			600:{
				items:6,
			}
		}

	});
	//Owl Carousel
	$('.all-blogs').owlCarousel({
		items: 2.5,
		center: true,
		loop: true,
		margin: 15,
		nav: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1.5,
			},
			800:{
				items:2.5,
			}
		}

	});

	//Header 
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 500 ) {
	        $('.header-area').fadeIn();
	    }
	    else {
	        $('.header-area').fadeOut()
	    };
	});

	$('.header-menu-wrap a, .menu-list a').click(function(e){
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
	    var scrollTo = target.offset().top;
	    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
	  }
	});

	//Video Popup
    $('.video-btn').click(function(){
        $('.video-popup').fadeIn();
        $('#iframeHolder').html('');
        var link = $(this).attr("link");
        $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
	$('.close-video').click(function(){
        $('.video-popup').fadeOut();
        $('#iframeHolder').html('');
    });

	//Devide Txt
	$('.btn-txt-wrap').html(function(index,html){
	    return html.replace(/<br ?\/?>/g, '@');
	});
	$('.btn-txt-wrap').html(function(index,html){
	    return html.replace(/./g, "<span>$&</span>");
	});
	$('.btn-txt-wrap').html(function(index,html){
	    return html.replace(/\s/g, "&nbsp;").replace(/<span>@<\/span>/g, "<br>");
	});

	//Portfolio Hover Effect
	jQuery(function() {
	  jQuery('ul.da-thumbs > li').hoverdir();
	});

	//Counter up
	$('.count-text').counterUp({
		time: 3000,
		delay: 10,
	});
	
	//Placeholder Animation
    Placeholdem(document.querySelectorAll('[placeholder]'));


	//Disable Right Click
	$(document).on({
		"contextmenu": function(e) {
			console.log("ctx menu button:", e.which); 
	
			// Stop the context menu
			e.preventDefault();
		},
		"mousedown": function(e) { 
			console.log("normal mouse down:", e.which); 
		},
		"mouseup": function(e) { 
			console.log("normal mouse up:", e.which); 
		}
	});
	document.onkeydown = function(e) {
	    if(e.keyCode == 123) {
	     return false;
	    }
	    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
	     return false;
	    }
	    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
	     return false;
	    }
	    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
	     return false;
	    }

	    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
	     return false;
	    }      
	}

	$('input[name="filterBtn"]').click(function(){
		$('input[name="filterBtn"]:checked').each(function() {
		   var checkedItem = $(this).val();
		   $('.pro-catagory').hide();
		   $('.pro-catagory.'+checkedItem).fadeIn();
		});
	});

});
