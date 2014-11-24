$( document ).ready(function() {

// Navigation Menu
	var menu = 0;
	$('.mobile-button').click(function() {
		if(menu == 0) {
			$('.mobile-button').css({ WebkitTransform: 'rotate(90deg)'});
			$('.mobile-button').css({ '-moz-transform': 'rotate(90deg)'});
			$('.mobile-menu').addClass('respond');
			menu = 1;
		} else {
			$('.mobile-button').css({ WebkitTransform: 'rotate(0deg)'});
			$('.mobile-button').css({ '-moz-transform': 'rotate(0deg)'});
			$('.mobile-menu').removeClass('respond');
			menu = 0;
		}
	});
// End Navigation Menu

// Slider
	var bgArr = [];
	var txArr= [];
	var istext = 0;
	
	$('.slide-container li').each(function() {
		bgArr.push($(this).find('img:first-child').attr('src'));
		if($('.slide-content').length) {
			istext = 1;
			txArr.push($(this).find('.slide-content').html());
		}
		$(this).remove();
	});

	var i = 0;
	
	//Welcome Animation
	if(istext == 1) {
		$('<h1 class="slide-content">' + txArr[i] + '</h1>').appendTo('.slide-container ul').find('span').each(function(u) {
			$(this).stop().css({'opacity': 0}).delay(800 + u*800).animate({'opacity': 1}, 500, 'easeOutExpo',  function(){
				$(this).delay(800).animate({'opacity': 0}, 500);
			});
		});
	}
	//Scroll Images timer
	function backgroundSlide() {	
	
		if(i == bgArr.length-1) i = 0; else i++;
		
		$('.slide-container ul').css('background-image', 'url('+bgArr[i]+')');
		var c = i + 1; if(c == bgArr.length) c = 0;	
		$('.slide-container').css('background-image', 'url('+bgArr[c]+')');	
		
		if($('.slide-content').length) { $('.slide-container ul').find('.slide-content').stop().animate({'opacity': 0}, 500, function(){ $(this).remove(); }); }
		
		if(i == 0 && istext == 1) {
			$('<h1 class="slide-content">' + txArr[i] + '</h1>').appendTo('.slide-container ul').find('span').each(function(u) {
				$(this).stop().css({'opacity': 0}).delay(u*800).animate({'opacity': 1}, 500, 'easeOutExpo',  function(){
					//$(this).stop().delay(800).animate({'opacity': 0}, 500);
				});
			});
		} else if(istext == 1) {
			$('<h1 class="slide-content">' + txArr[i] + '</h1>').stop().css('opacity', 0).appendTo($('.slide-container ul')).animate({'opacity': 1}, 500);
		}
	
	}
	
	//Set adverts into 3 rows
	if($(window).width() <= 768){
		var imga = $('.logoscroll .row:nth-of-type(1)').find('img').eq(3);
		var imgb = $('.logoscroll .row:nth-of-type(1)').find('img').eq(4);
		var imgc = $('.logoscroll .row:nth-of-type(2)').find('img').eq(3);
		var imgd = $('.logoscroll .row:nth-of-type(2)').find('img').eq(4);
		var holder = '<div class="row"><img src="'+imga.attr('src')+'" /><img src="'+imgb.attr('src')+'" /></div><div class="row"><img src="'+imgc.attr('src')+'" /><img src="'+imgd.attr('src')+'" /></div>';
		$('.logoscroll .wrapper').append(holder);
		$(imga).remove();
		$(imgb).remove();
		$(imgc).remove();
		$(imgd).remove();
	}
	
	var interval = setInterval(backgroundSlide, 5000);
	var intervala = setInterval(logoScroll, 3000);
	//Stop when out of focus
	$(window).focus(function() {
		if (!interval) interval = setInterval(backgroundSlide, 5000);
		if (!intervala) intervala = setInterval(logoScroll, 3000);
	});
	$(window).blur(function() {
		clearInterval(interval);
		interval = 0;
		clearInterval(intervala);
		intervala = 0;
	});
	//Left Right Slide
	$('.arrow-left').click(function(e) {
		e.preventDefault();
		clearInterval(interval);

		if(i == 0) i = bgArr.length-1; else i--;
		
		$('.slide-container ul').css('background-image', 'url('+bgArr[i]+')');
		var g = i - 1; if(g == -1) g = bgArr.length-1;	
		$('.slide-container').css('background-image', 'url('+bgArr[g]+')');
		
		if(istext == 1) {
			$('.slide-container ul').find('.slide-content').stop().animate({'opacity': 0}, 500, function(){ $(this).remove(); });
			$('<h1 class="slide-content">' + txArr[i] + '</h1>').stop().css('opacity', 0).appendTo($('.slide-container ul')).animate({'opacity': 1}, 500);
		}
	
		interval = setInterval(backgroundSlide, 5000);
	});
	$('.arrow-right').click(function(e) {
		e.preventDefault();
		clearInterval(interval);
		
		if(i == bgArr.length-1) i = 0; else i++;
		
		$('.slide-container ul').css('background-image', 'url('+bgArr[i]+')');
		var h = i + 1; if(h == bgArr.length) h = 0;	
		$('.slide-container').css('background-image', 'url('+bgArr[h]+')');
		
		if(istext == 1) {
			$('.slide-container ul').find('.slide-content').stop().animate({'opacity': 0}, 500, function(){ $(this).remove(); });
			$('<h1 class="slide-content">' + txArr[i] + '</h1>').stop().css('opacity', 0).appendTo($('.slide-container ul')).animate({'opacity': 1}, 500);
		}
		
		interval = setInterval(backgroundSlide, 5000);
	});
// End Slider

// Scrolling Adverts
	function logoScroll() {
		if($('.logoscroll').length) {
			var thisRow = $('.logoscroll').find('.row:first-child').html();
			$('.logoscroll').find('.row:first-child').animate({'opacity': 0}, 500, function() {
				$(this).remove();
				$('.logoscroll .wrapper').append('<div class="row">' + thisRow + '</div>').fadeIn(500);	
			});
		}
	}
// End Scrolling Adverts
	
// Products Dropdown
	$('nav ul .products').hover(function() {
		if(!$(this).hasClass('active')) {
	    	$(this).children('.dropdown').stop().slideDown(200);
			$(this).addClass('active');
		}
	});
	$('.products, .dropdown').mouseleave(function() {
		if($('.products').hasClass('active')) {
			$(this).children('.dropdown').stop().slideUp(200);
			$('li.products').removeClass('active');
		}
	});
// End Products Dropdown

// Regions Dropdown
	$('.regions-container .regions').click(function() {
		if(!$(this).hasClass('active')) {
	    	$(this).siblings('.regions-dropdown').stop().slideDown(200);
			$(this).addClass('active');
		} else {
			$(this).siblings('.regions-dropdown').stop().slideUp(200);
			$(this).removeClass('active');
		}
	});
// End Regions Dropdown

// News Slider
	var shft = $('.news-right').width();
	$('.news-content li').each(function() { $(this).width(shft); });
	$('.news-content').width($('.news-content li').length * shft);
	if($(window).width() <= 768) $('.news-content li').find('p').css('width', (shft) + 'px');
	else $('.news-content li').find('p').css('width', (shft - 180) + 'px');
	$( window ).resize(function() {
		shft = $('.news-right').width();
		$('.news-content li').each(function() { $(this).width(shft); });
		$('.news-content').width($('.news-content li').length * shft);
		if($(window).width() <= 768) $('.news-content li').find('p').css('width', (shft) + 'px');
		else $('.news-content li').find('p').css('width', (shft - 180) + 'px');
	});
	
	// Center news image
	$('.news-content li').find('img').each(function() {
		if($(this).length) {
			chop = ($(this).width() - $(this).parent().width())/2;
			$(this).css('margin-left', -Math.abs(chop));
		}
	});
	
	var z = 1;
	function newsSlide() {	
		var val = 0 - z*shft;
		$('.news-content').css('margin-left', val+'px');
		if (z == $('.news-content li').length-1) z = 0; else z++;
	}
	
	var news_interval = setInterval(newsSlide, 5000);
	$(window).focus(function() {
		if (!news_interval)
			news_interval = setInterval(newsSlide, 5000);
	});
	$(window).blur(function() {
		clearInterval(news_interval);
		news_interval = 0;
	});
// End News Slider

//Casestudies & News Image Adjust
	if('.main-container.casestudies') {
		$('.item').each(function(i, element) {
			$(element).find('img').load(function() {
				$(this).css('margin-left', -(Math.abs($(this).width() - $(element).find('figure').width()) / 2));
			});
        });
	}
	if('.main-container.newsall') {
		$('.item').each(function(i, element) {
			$(element).find('img').load(function() {
				$(this).css('margin-left', -(Math.abs($(this).width() - $(element).find('figure').width()) / 2));
			});
        });
	}
// Contact Map Script
	if('.main-container.contact') {
		$('.map-container').find('.button').click(function(e) {
			e.preventDefault();
			var sel = $(this).attr('class').split(' ')[0];
			switch (sel) { 
				case 'canada': 
					var latitude = 40.3053376;
					var longitude = -74.0093195;
					var addr = '<b>Wheelwash Canada</b><br/>c/o Kiely Distribution Co.<br />700 McClellan Street<br />Long Branch<br/>N.J. 07740';
					
					$('.map-info').find('.title').html('Canada');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Benjamin Taylor');
					$('.map-left').find('.tel').html('<b>T:</b> +(1) 732 921 7934<br /><b>F:</b> +(1) 732 403 8012<br /><b>E:</b><a href="mailto:btaylor@wheelwash.com"> btaylor@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').stop().animate({scrollTop: $('.main-container').offset().top}, 1000);
					break;
				case 'namerica': 
					var latitude = 40.3053376;
					var longitude = -74.0093195;
					var addr = '<b>Wheelwash North America</b><br/>c/o Kiely Distribution Co.<br />700 McClellan Street<br />Long Branch<br/>N.J. 07740';
					
					$('.map-info').find('.title').html('North America');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Benjamin Taylor');
					$('.map-left').find('.tel').html('<b>T:</b> +(1) 732 921 7934<br /><b>F:</b> +(1) 732 403 8012<br /><b>E:</b><a href="mailto:btaylor@wheelwash.com"> btaylor@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'ireland': 
					var latitude = 53.329457;
					var longitude = -6.358937200000014;
					var addr = '<b>Wheelwash Ireland</b><br/>c/o Walkers Municipal Services<br />Unit 2D Kylemore Industrial Estate<br />Killeen Road<br/>Dublin 10';
					
					$('.map-info').find('.title').html('Ireland');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Francis Cunningham');
					$('.map-left').find('.tel').html('<b>T:</b> +(353) 01626 3366<br /><b>F:</b> +(353) 01626 7411<br /><b>E:</b><a href="mailto:ireland@wheelwash.com"> ireland@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'spain': 
					var latitude = 43.3841357;
					var longitude = -6.071890800000006;
					var addr = '<b>Wheelwash España</b><br/>c/o Instalaciones y Representaciones Industriales Irimac, S.L.éíó<br />C/ Cimadevilla, 1, Oficina D<br />33820 Grado<br/>Asturias';
					
					$('.map-info').find('.title').html('Spain');
					$('.map-left').find('img').replaceWith('<img src="img/face-sp.jpg" />');
					$('.map-left').find('.name').html('Marcos Antonio Fernandez Di­az');
					$('.map-left').find('.tel').html('<b>T:</b> +(34) 984 107 007<br /><b>F:</b> +(34) 984 109 007<br /><b>E:</b><a href="mailto:spain@wheelwash.com"> spain@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'chile': 
					var latitude = -33.3609425;
					var longitude = -70.5156745;
					var addr = '<b>Wheelwash Chile</b><br/>c/o Fernando Ponce<br />Av. La Dehesa 1201,<br />Of. 515 Oriente,<br />Lo Barnechea<br />Santiago, Chile';
					
					$('.map-info').find('.title').html('Chile');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Fernando Ponce');
					$('.map-left').find('.tel').html('<b>T:</b> +(56) 9 98790452<br /><b>E: </b><a href="mailto:fernando@wheelwashchile.com">fernando@wheelwashchile.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'gbritain': 
					var latitude = 53.1061947;
					var longitude = -2.469686599999932;
					var addr = '<b>Wheelwash Limited</b><br/>Pyms Lane<br />Crewe<br />Cheshire<br />CW1 3PJ';
					
					$('.map-info').find('.title').html('Great Britain');
					$('.map-left').find('img').replaceWith('<img src="img/face-gb.jpg" />');
					$('.map-left').find('.name').html('Alison Galley');
					$('.map-left').find('.tel').html('<b>T:</b> +(44) 01270 214886<br /><b>F:</b> +(44) 01270 214583<br /><b>E:</b><a href="mailto:sales@wheelwash.com"> sales@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'germany': 
					var latitude = 53.1061947;
					var longitude = -2.469686599999932;
					var addr = '<b>Wheelwash Limited</b><br/>Crewe<br />Cheshire<br />CW1 3PJ';
					
					$('.map-info').find('.title').html('Germany');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Henning Dieckmann');
					$('.map-left').find('.tel').html('<b>T:</b> +(49) 5147 9800 18<br /><b>E:</b><a href="mailto:deutschland@wheelwash.com"> deutschland@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'newzealand': 
					var latitude = -37.6332889;
					var longitude = 144.944665;
					var addr = '<b>Wheelwash Australia</b><br/>c/o Hugo Kandelaars<br />PO Box 227<br />Somerton<br />Victoria 3062';
					
					$('.map-info').find('.title').html('New Zealand');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Hugo Kandelaars');
					$('.map-left').find('.tel').html('<b>T:</b> +(61) 3 9308 5915<br /><b>F:</b> +(61) 3 9308 5920<br /><b>E:</b><a href="mailto:nz@wheelwash.com"> nz@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'australia': 
					var latitude = -37.6332889;
					var longitude = 144.944665;
					var addr = '<b>Wheelwash Australia</b><br/>c/o Hugo Kandelaars<br />PO Box 227<br />Somerton<br />Victoria 3062';
					
					$('.map-info').find('.title').html('Australia');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Hugo Kandelaars');
					$('.map-left').find('.tel').html('<b>T:</b> +(61) 3 9308 5915<br /><b>F:</b> +(61) 3 9308 5920<br /><b>E:</b><a href="mailto:australia@wheelwash.com"> australia@wheelwash.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'israel': 
					var latitude = 31.8679506;
					var longitude = 34.8265262;
					var addr = '<b>Mortec Infrastructure & Recycling Equipment Ltd.</b><br />16 Hazait St.<br />Kfar Bilu<br />76965<br />Israel';
					
					$('.map-info').find('.title').html('Israel');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Arnon Mor');
					$('.map-left').find('.tel').html('<b>W:</b> www.mortec.co.il<br /><b>T:</b> +(972) 8 9352707<br /><b>F:</b> +(972) 8 9153152<br /><b>M:</b>+(972) 50 5770295<br /><b>E:</b><a href="mailto:info@mortec.co.il"> info@mortec.co.il</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'norway': 
					var latitude = 59.5391075;
					var longitude = 12.7462481;
					var addr = '<b>Svensk Vattenförsörjning AB</b><br />Fjäll Rönningen<br />671 95<br />Klässbol<br />Värmlands län<br />Sweden';
					
					$('.map-info').find('.title').html('Sweden / Norway');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Martin Lilejstrand');
					$('.map-left').find('.tel').html('<b>T:</b> +(46) 72 2242554  <br /><b>E:</b><a href="mailto:martin@svfs.se"> martin@svfs.se</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
				case 'netherland': 
					var latitude = 52.130295;
					var longitude = 4.434727;
					var addr = '<b>MB Dustcontrol B.V.</b><br />Industrieweg 2<br />2254 AE Voorschoten<br />The Netherlands';
					
					$('.map-info').find('.title').html('The Netherlands');
					$('.map-left').find('img').replaceWith('<img src="img/space.jpg" />');
					$('.map-left').find('.name').html('Ben van Fruchten');
					$('.map-left').find('.tel').html('<b>T:</b> +(31) 71 5610096<br /><b>E:</b><a href="mailto:info@mb-dustcontrol.com"> info@mb-dustcontrol.com</a>');
					$('.map-left').find('.addr').html(addr);
					
					$('.map-info').animate({'opacity': 0}, 500, function() {
						$('.map-info').css({'height': 'auto', 'opacity': 1});
						$('#gmap_canvas').empty();
						init_map(latitude, longitude, addr);
					});
					$('html, body').animate({scrollTop: $('.map-info').offset().top}, 1000);
					break;
			}
		});
	}	
	
// End Contact Map Script

// Contact Form Script
	if($('.contactform').length) {
		
		$('.main-content.contact textarea[name=message]').focus(function() { 
			if($(this).val() == 'Enter your Message') $(this).val('');
		}).blur(function() {
			if($(this).val() == '') $(this).val('Enter your Message');
		});
	
		$('.contactform').validate({
		  rules: {
		   name: {
			minlength: 2,
			required: true
		   },
		   email: {
			required: true,
			email: true
		   },
		   message: {
			minlength: 2,
			required: true
		   }
		  },
		  highlight: function(element) {
		   $(element).closest('.control-group').removeClass('success').addClass('error');
		  },
		  success: function(element) {
		   element.text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
		  }, 
		  
		  submitHandler: function( form ) {
			   
				$.ajax({
					url : 'http://wheelwash.com/contact/message',
					data : $('.contactform').serialize(),
					type: "POST",
					success : function(data){
					 $(".contactform").hide('slow');
					 $('.cf').html(data);
					}
				})
				return false;
			 }
		  
		 });
		
	}
// End Contact Form Script

//PDF Download Script
	$('.productbottomleft .download').click(function(e) {
		e.preventDefault();
		
		var filename = $(this).attr('href');
		if(filename == '#') return false;

		var overlay = $('<div class="black-out"><div class="pdf-content"><form class="pdform"><label>Name</label><input type="text" class="name" name="name" value="Leave us your name..." /><label>E-mail</label><input name="email" class="email" value="Leave us your E-mail..." /><input type="submit" value="Download" class="download button" /></div></form></div></div>');
		
		overlay.css('opacity', 0);
		$('body').append(overlay);
		overlay.animate({'opacity': 1}, 500, function() {
			$('.pdf-content input[name=name]').focus(function() { 
				if($(this).val() == 'Leave us your name...') $(this).val('');
			}).blur(function() {
				if($(this).val() == '') $(this).val('Leave us your name...');
			}).select();
			$('.pdf-content input[name=email]').focus(function() { 
				if($(this).val() == 'Leave us your E-mail...') $(this).val('');
			}).blur(function() {
				if($(this).val() == '') $(this).val('Leave us your E-mail...');
			});
		});
		
		overlay.click(function(e) {
			if($(e.target).hasClass('black-out')) {
				overlay.stop().animate({'opacity': 0}, 200, function() {
					$(this).remove();
				});
			}
		});
		
		$('.pdform').validate({
			rules: {
				name: {
					minlength: 2,
					required: true
				},
				email: {
					required: true,
					email: true
				},
			},
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element.text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
			},
			submitHandler: function( form ) {
				$.ajax({
					url : 'http://wheelwash.com/en/contact/download/' + filename,
					data : $('.pdform').serialize(),
					type: 'POST',
					success : function(data) {
						overlay.find('.pdform').replaceWith(data);
						$('.pdf-content').find('.final').click(function() {
							overlay.animate({'opacity': 0}, 500, function() {
								$(this).remove();	
							});
						});
					}
				});
				return false;
			}
		});
		
	});
//End PDF Download Script

//Case Circle
	if($('.casecircle')) {
		$('.casecircle').height($('.casecircle').width());
		$('.casecircle img').each(function() {
			$(this).load(function() {
				var shft = ($(this).width() - $(this).parent().width()) /2;
				$(this).css('margin-left', '-' + shft + 'px');
			});
		});
		$( window ).resize(function() {
			$('.casecircle').height($('.casecircle').width());
			$('.casecircle img').each(function() {
				$(this).load(function() {
					var shft = ($(this).width() - $(this).parent().width()) /2;
					$(this).css('margin-left', '-' + shft + 'px');
				});
			});
		});
	}
//End Case Circle
});

//Easing Function
$.easing.jswing = $.easing.swing;
$.extend($.easing,
{
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
});
//Google Map Embed script
function init_map(latitude, longitude, addr) {
	var myOptions = {zoom:12,center:new google.maps.LatLng(latitude,longitude),scrollwheel:false,mapTypeId: google.maps.MapTypeId.ROADMAP};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(latitude, longitude)});
	infowindow = new google.maps.InfoWindow({content:addr});
	google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
	infowindow.open(map,marker);
}
//Remove Console Errors
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()
