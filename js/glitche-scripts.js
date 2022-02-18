

$(function () {
	'use strict';

	$(window).unload(function () { });

	/* Set full height in blocks */
	var width = $(window).width();
	var height = $(window).height();
	$('.section.started').css({ 'height': height - 60 });

	/* Typed preload text */
	$('.typed-load').typed({
		stringsElement: $('.typing-load'),
		loop: true
	});

	/* Preloader */
	$(window).load(function () {
		$(".preloader .pre-inner").fadeOut(800, function () {
			/* Preload hide */
			$('.preloader').fadeOut();
			$('body').addClass('loaded');

			/* Typed subtitle */
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});

			/* Typed breadcrumbs */
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});

			/* One Page Nav */
			var url_hash = location.hash;
			var sectionElem = $(url_hash);
			if (url_hash.indexOf('#section-') == 0 && sectionElem.length) {
				$('body, html').animate({ scrollTop: $(url_hash).offset().top - 70 }, 400);
			}
		});
	});

	/*Fade-out animation between load pages*/
	$('header .top-menu, .typed-bread').on('click', 'a', function () {
		var link = $(this).attr('href');
		if (link.indexOf('#section-') == 0) {
			if (!$('body').hasClass('home')) {
				location.href = '/' + link;
			}

			$('body, html').animate({ scrollTop: $(link).offset().top - 110 }, 400);
			if ($('header').hasClass('active')) {
				$('.menu-btn').trigger('click');
			}
		} else {
			$('body').removeClass('loaded');
			setTimeout(function () {
				location.href = "" + link;
			}, 500);
		}
		return false;
	});

	/*Menu mobile*/
	$('header').on('click', '.menu-btn', function () {
		if ($('header').hasClass('active')) {
			$('header').removeClass('active');
			$('body').addClass('loaded');
		} else {
			$('header').addClass('active');
			$('body').removeClass('loaded');
		}

		return false;
	});

	/* Hide mouse button on scroll */
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 1 /*$('#blue_bor').offset().top*/) {
			$('.mouse_btn').fadeOut();
		}
		else {
			$('.mouse_btn').fadeIn();
		}
	});

	/* On click mouse button, page scroll down */
	$('.section').on('click', '.mouse_btn', function () {
		$('body,html').animate({
			scrollTop: height - 150
		}, 800);
	});

	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-effect-white');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-effect-white');
			$('.top-menu ul li.active a.btn').addClass('glitch-effect-white');
		}
	}, 'a.btn, .btn');

	/*
		Filter items on button click
	*/
	$('.filters').on('click', '.btn-group', function () {
		var filterValue = $(this).find('input').val();
		$container.isotope({ filter: filterValue });
		$('.filters .btn-group label').removeClass('glitch-effect');
		$(this).find('label').addClass('glitch-effect');
	});


	/* Resize function */
	$(window).resize(function () {
		var width = $(window).width();
		var height = $(window).height();

		$('.section.started').css({ 'height': height - 60 });

		/* Dotted Skills Line On Resize Window */
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if (skills_dotted.length) {
			skills_dotted.find('.percentage .da').css({ 'width': skills_dotted_w + 1 });
		}
	});

	if (width < 840) {
		$('.section.started').css({ 'height': height - 30 });
	}

	/* One Page Menu Nav */
	if ($('.section').length && $('.top-menu li a').length) {
		$(window).on('scroll', function () {
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				if ($(this).attr('href').indexOf('#section-') == 0) {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.length) {
						if (refElement.offset().top <= scrollPos + 400) {
							$('.top-menu ul li').removeClass("active");
							currLink.closest('li').addClass("active");
						}
					}
					if (scrollPos == 0) {
						$('.top-menu ul li').removeClass("active");
					}
				}
			});
		});
	}

	/*
		Dotted Skills Line
	*/

	function skills() {
		var skills_dotted = $('.skills.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if (skills_dotted.length) {
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({ 'width': skills_dotted_w });
		}
	}
	setTimeout(skills, 1000);

	/*
		Circle Skills Line
	*/

	var skills_circles = $('.skills.circles .progress');
	if (skills_circles.length) {
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}
});