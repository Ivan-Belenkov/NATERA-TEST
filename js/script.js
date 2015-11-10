$(document).ready(function() {

	handleScroll();
	$(window).scroll(handleScroll);

	// cover images animation
	
	$('html').on('mousemove', '.cover', function(e) {
		var $width = $(this).outerWidth(),
			$height = $(this).outerHeight(),
			$img = $(this).find('img'),
			$xOrig = 100 * e.offsetX / $width,
			$yOrig = 100 * e.offsetY / $height;

		$img.css({
			transformOrigin: $xOrig + '% ' + $yOrig + '% 0'
		});
	});

	// scroll handler
	
	function handleScroll() {

		stickyHeader();
		handleBlock1();
		handleBlock2();
		handleBlock3();
		handleBlock4();

	}

	// sticky header
	
	function stickyHeader() {
		var $header = $('.header');

		if ($(window).scrollTop() > 1) {
			$header.addClass('header_sticky');
		} else {
			$header.removeClass('header_sticky');
		}
	}

	// block1 handling
	
	function handleBlock1() {
		var block = $('#showbus'),
			backdrop = block.find('.block1__backdrop'),
			button = block.find('.block1__main-button-wrap'),
			newsitem = block.find('.block1__new2');

		if (getScreenOffset(block) <= 195) {
			backdrop.addClass('animated');
			button.addClass('animated');
		} else {
			backdrop.removeClass('animated');
			button.removeClass('animated');
		}

		if (getScreenOffset(block) <= -25) {
			newsitem.addClass('animated');
		} else {
			newsitem.removeClass('animated');
		}
	}

	// block2 handling
	
	function handleBlock2() {
		var block = $('#art'),
			backdrop = block.find('.block2__backdrop'),
			newsitem = block.find('.block2__main');

		if (getScreenOffset(block) <= 250) {
			backdrop.addClass('animated');
		} else {
			backdrop.removeClass('animated');
		}

		if (getScreenOffset(block) <= 45) {
			newsitem.addClass('animated');
		} else {
			newsitem.removeClass('animated');
		}
	}

	// block3 handling

	function handleBlock3() {
		var block = $('#fashion'),
			backdrop = block.find('.block3__backdrop'),
			newsitem = block.find('.block3__main'),
			row = block.find('.block3__n-row');

		row.each(function() {
			var self = $(this),
				win = $(window).height();

			if (getScreenOffset(self) - win <= - 50) {
				self.addClass('animated');
			} else {
				self.removeClass('animated');
			}
		});

		if (getScreenOffset(block) <= 220) {
			backdrop.addClass('animated');
			newsitem.addClass('animated');
		} else {
			backdrop.removeClass('animated');
			newsitem.removeClass('animated');
		}
	}

	// block4 handling
	
	function handleBlock4() {
		var block = $('#society'),
			newsitems = block.find('.block4__new');

		newsitems.each(function() {
			var self = $(this),
				win = $(window).height();

			if (getScreenOffset(self) - win <= -100) {
				self.addClass('animated');
			} else {
				self.removeClass('animated');
			}
		});
	}

	// screen ofsset
	
	function getScreenOffset(el) {
		var st = $(window).scrollTop(),
			ot = el.offset().top;

		return ot - st;
	}

});