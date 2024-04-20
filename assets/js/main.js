/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";

// smoooth scroll activation start
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();


	  
			  }, 1000 ) ;
		}

		// hero-1-slider
		if($('.blta-hero-1-active').length) {
			let hero1 = new Swiper('.blta-hero-1-active', {
				loop: true,
				speed: 1000,
				effect: 'fade',
				autoplay: {
					delay: 6000,
				},
				fadeEffect: {
					crossFade: true
				},
				navigation: {
					nextEl: ".blta_hero_1_next",
					prevEl: ".blta_hero_1_prev",
				},
			});
		}


		// home-2-hero-2-animation
		const h2tl = gsap.timeline();

		h2tl.fromTo(".bg-plane" , { xPercent: -100 , yPercent: 150 }, { xPercent: 180, yPercent: -80, duration: 2 });
		h2tl.from(".bg-building img" , { scale: 2, duration: 1 } , "<1" );
		h2tl.from(".blta-hero-2-bg-img-overly" , { opacity: 0, duration: .5 }, "<.5" );
		h2tl.from(".blta-hero-2-bg-shape " , { xPercent: -100, duration: .5 }, "<.5" );
		h2tl.from(".blta-hero-2-title-3" , { Transform: "rotateY(81deg)" }, "<.5" );
		h2tl.from(".blta-hero-2-title-2" , { Transform: "rotateY(81deg)"  }, "<.5" );
		h2tl.from(".blta-hero-2-title-1" , { Transform: "rotateY(81deg)"  }, "<.5" );
		h2tl.from(".blta-hero-2-disc" , { Transform: "rotateY(81deg)"  }, "<.5" );
		h2tl.from(".blta-hero-2-btn" , { Transform: "rotateY(81deg)"  }, "<.5" );
		h2tl.from(".blta-hero-2-img img" , { yPercent: 100 , duration: 1 }, "<.5" );
		

	})

});


function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.gly_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('gly_sticky');
      } else {
        $header.removeClass('gly_sticky');
        $header.removeClass('gly_sticky_show');
      }

      if ($header.hasClass('gly_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('gly_sticky_show');
        } else {
          $header.removeClass('gly_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  


// mobile-menu-start
if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}

$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});


// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



// gsap-start
gsap.registerPlugin(ScrollTrigger);


// mobile-menu-toggle-start

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		duration: 0,
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-bg span' , {
		duration: .5,
		height: "100%",
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		x: -50,
		opacity: 0,
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-close' , {
		duration: 0,
		x: 0,
		rotate: 0,
		opacity: 1,
		ease: 'Expo.easeInOut'
	}, "<");
	menubgline.fromTo('.mobile-main-navigation  ul li' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut',
		stagger: 0.2,
	} , {
		opacity: 1,
		y: 0,
	}, "<");
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut'
	}, "<");

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
		ease: 'Expo.easeInOut'
	}, "<");

	
	menubgline.reverse();

	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}



// image-paralax-animation-start
gsap.utils.toArray(".image-pllx").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      }); 
      tl.from(image, {
        yPercent: -30,
		scale: 1.1,
        ease: "none",
      }).to(image, {
        yPercent: 30,
		scale: 1.1,
        ease: "none",
      }); 
  });

// blta-img-animation
gsap.utils.toArray('.blta-img').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateY(60deg) translateX(-190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-img-animation-2
gsap.utils.toArray('.blta-img-2').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateY(-60deg) translateX(190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-img-animation-2
gsap.utils.toArray('.blta-img-3').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateX(-60deg) translateY(190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-scale-plus
gsap.utils.toArray('.blta-scale-plus').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { scale: 2 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-left
gsap.utils.toArray('.blta-fade-left').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 70%",
		end: "top 10%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , xPercent: -100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-right
gsap.utils.toArray('.blta-fade-right').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 70%",
		end: "top 10%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , xPercent: 100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-down
gsap.utils.toArray('.blta-fade-down img').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: ".blta-fade-down",
		scrub: 2,
		start: "top 70%",
		end: "top 10%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , yPercent: 100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// hero-2-animation
var bltahro2 = gsap.timeline({

	scrollTrigger: {
	  animation: bltahro2,
	  trigger: '.blta-hero-2-area',
	  start: "top 100%",
	  end: "bottom 0%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltahro2.from( ".blta-hero-2-bg-img .bg-building" , { scale: 2 ,  duration:1 } )

// blta-categories-1-img
var bltact1 = gsap.timeline({

	scrollTrigger: {
	  animation: bltact1,
	  trigger: '.blta-categories-1-img',
	  start: "top 80%",
	  end: "top 30%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltact1.from( ".blta-categories-1-img img" , { yPercent: -100 , stagger: 0.2 ,  duration:1 } )







var st = $(".blta-split-text");
if(st.length == 0) return;
gsap.registerPlugin(SplitText);
st.each(function(index, el) {
	el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	});
	gsap.set(el, { perspective: 400 });


	if( $(el).hasClass('split-in-left') ){
		gsap.set(el.split.chars, {
			opacity: 1,
			color: "#ff6600",
			x: "-50",
			ease: "circ.out",
		});
	}

	el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
			trigger: el,
			start: "top 90%",
		},
		x: "0",
		y: "0",
		rotateX: "0",
		color: "inherit",
		scale: 1,
		opacity: 1,
		duration: 0.8, 
		stagger: 0.02,
	});
});

  
// team-1-active
let team1_thumb = new Swiper('.team-1-slider-prw-active', {
	spaceBetween: 30,
	loop: true,
	speed: 1000,
	// watchSlidesProgress: true,	
	slidesPerView: 2,

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
	  },
});

let team1 = new Swiper('.team-1-slider-main-active', {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},
	thumbs: {
		swiper: team1_thumb,
	},
});


// product-1-active
let product1 = new Swiper('.product-1-slider-active', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 1,
	speed: 1000,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: ".blta_product_1_next",
		prevEl: ".blta_product_1_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
});


// range-1-active
let range1 = new Swiper('.range-1-active', {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 2000,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: ".range_1_next",
		prevEl: ".range_1_prev",
	},
});


// range-1-active
let bltarange2 = new Swiper('.range-2-active', {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 2000,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: ".range_2_next",
		prevEl: ".range_2_prev",
	},
});


// range-1-active
let bltateam2 = new Swiper('.team-2-active', {
	loop: true,
	spaceBetween: 0,
	speed: 1000,
	slidesPerView: 2,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: ".team_2_next",
		prevEl: ".team_2_prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
	},
});


// testimonial-1-active
let bltatestimonial1 = new Swiper('.testimonial-2-active', {
	loop: true,
	spaceBetween: 0,
	speed: 1000,
	slidesPerView: 1,
	autoplay: {
		delay: 5000,
	},

	pagination: {
		el: ".testimonial-2-pagination",
		clickable: true,
	
	},

});




// cursor follow
$(document).ready(function () {
	var mWrap = $(".blta-categories-1-tabs-content ");
  
	mWrap.hover(function () {
	  var mContent = $(this).find("#magnetic-content");
	  var mArea = $(this).find("#magnetic-area");
  
	  function parallaxIt(e, target, movement = 1) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var boundingRect = mArea[0].getBoundingClientRect();
		var relX = e.pageX - boundingRect.left;
		var relY = e.pageY - boundingRect.top;
  
		gsap.to(mContent, {
		  x: (relX - boundingRect.width / 2) * movement,
		  y: (relY - boundingRect.height / 2 - scrollTop) * movement,
		  ease: "power1",
		  duration: 1
		});
	  }
  
	  function callParallax(e) {
		parallaxIt(e, mWrap);
	  }
  
	  mArea.mousemove(function (e) {
		callParallax(e);
	  });
	  mArea.mouseleave(function (e) {
		gsap.to(mContent, {
		  scale: 1,
		  x: 0,
		  y: 0,
		  ease: "power1",
		  duration: 1.5
		});
	  });
	});
  });





/* faq-active-class */
$(document).on('click', '.gly-accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})


/* back-to-top */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}



})(jQuery);