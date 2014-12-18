$( document ).ready(function() {

	//Get current language
	prelink = $('.language-link').html();
	
	//Logout
	$('.admin-nav .right li').click(function() { window.location = './auth/logout'; });
	
	//Start at news
	$('.admin-nav .left').find('li:first-child').addClass('active');
	$('.main-container.casestudies-admin').hide();
	$('.main-container.slides-admin').hide();
	$('.main-container.news-admin .control a').click(function() { addThis(0); });
	$('.main-container.news-admin .item h3').click(function() { editThis(0, this); });
	
	$('.admin-nav .left').find('li').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		//Activate News
		if($(this).index() == 0) {
			$('.main-container.casestudies-admin').hide(200);
			$('.main-container.slides-admin').hide(200);
			$('.main-container.news-admin').show(200);
			$('.main-container.casestudies-admin .control a').unbind('click');
			$('.main-container.casestudies-admin .item h3').unbind('click');
			$('.main-container.slides-admin .slides-about figure i').unbind('click');
			$('.main-container.slides-admin .slides-about figure').find('input').unbind('change');
			$('.main-container.slides-admin .slides-services figure i').unbind('click');
			$('.main-container.slides-admin .slides-services figure').find('input').unbind('change');
			$('.main-container.news-admin .control a').click(function() { addThis(0); });
			$('.main-container.news-admin .item h3').click(function() { editThis(0, this); });
			whoisit = 0;
		}
		//Activate Case Studies
		if($(this).index() == 1) {
			$('.main-container.news-admin').hide(200);
			$('.main-container.slides-admin').hide(200);
			$('.main-container.casestudies-admin').show(200);
			$('.main-container.news-admin .control a').unbind('click');
			$('.main-container.news-admin .item h3').unbind('click');
			$('.main-container.slides-admin .slides-about figure i').unbind('click');
			$('.main-container.slides-admin .slides-about figure').find('input').unbind('change');
			$('.main-container.slides-admin .slides-services figure i').unbind('click');
			$('.main-container.slides-admin .slides-services figure').find('input').unbind('change');
			$('.main-container.casestudies-admin .control a').click(function() { addThis(1); });
			$('.main-container.casestudies-admin .item h3').click(function() { editThis(1, this); });
			whoisit = 1;
		}
		//Activate Slides Tab
		if($(this).index() == 2) {
			$('.main-container.news-admin').hide(200);
			$('.main-container.casestudies-admin').hide(200);
			$('.main-container.slides-admin').show(200);
			$('.main-container.news-admin .control a').unbind('click');
			$('.main-container.news-admin .item h3').unbind('click');
			$('.main-container.casestudies-admin .control a').unbind('click');
			$('.main-container.casestudies-admin .item h3').unbind('click');
			whoisit = 2;
			//Start at Services
			$('.main-container.slides-admin').find('.slides-services').show();
			$('.main-container.slides-admin').find('.slides-about').hide();
			slideAdmin();
		}
	});
	
	//Arrange content
	$('.main-container.news-admin .item').each(function() {
		var con = $(this).find('.content').html().substr(0, 255)+'...';
		$(this).find('.content').hide().before('<div class="summary">'+con+'</div>');
	});
	$('.main-container.casestudies-admin .item').each(function() {
		var con = $(this).find('.content').html().substr(0, 255)+'...';
		$(this).find('.content').hide().before('<div class="summary">'+con+'</div>');
	});
	
	//Add functions
	deleteThis();
	interact();
	
});

//Global variables
var prelink;

//Overlay
var overlay = $('<div class="black-out"><div class="admin-content"><form class="admin-form"><h3>Title</h3><input type="text" class="title" name="title" id="title" value="Enter the title here..." /><h3>Content</h3><textarea name="content" class="content" id="content">Enter the content here...</textarea><h3>Upload an image</h3><figure></figure><input type="file" class="image_link" name="image_link" /><div class="buttoned"><input type="submit" value="Save" class="save" /></div></form></div></div>');

var caselay = $('<h3>Upload bottom circular images</h3><div class="circle"><input type="file" class="circle_image_1" name="circle_image_1" /></div><div class="circle"><input type="file" class="circle_image_2" name="circle_image_2" /></div><div class="circle"><input type="file" class="circle_image_3" name="circle_image_3" /></div>');

//Interact
function interact() {
	$('.main-container.news-admin .item h3').hover(function() {
		$(this).find('span').stop().animate({'opacity': 0}, 200, function() {
			$(this).css('display', 'none');
			$(this).before('<span class="edit">Click to edit this</span>').fadeIn(200);
		});
	}, function() {
		$(this).find('span').stop().animate({'opacity': 0}, 200, function() {
			if($(this).hasClass('edit')) $(this).remove();
			$(this).stop().animate({'opacity': 1}, 200);
		});
	});
	$('.main-container.casestudies-admin .item h3').hover(function() {
		$(this).find('span').stop().animate({'opacity': 0}, 200, function() {
			$(this).css('display', 'none');
			$(this).before('<span class="edit">Click to edit this</span>').fadeIn(200);
		});
	}, function() {
		$(this).find('span').stop().animate({'opacity': 0}, 200, function() {
			if($(this).hasClass('edit')) $(this).remove();
			$(this).stop().animate({'opacity': 1}, 200);
		});
	});
}

//Delete Item
function deleteThis() {
	$('.main-container.news-admin .item .delete').click(function() {
		var deleteThis = $(this).parent().attr('id');
		var answer = confirm("Are you sure you want to delete this? This cannot be undone.");
		if (answer){
    		$.post(prelink + 'news/delete/'+parseInt(deleteThis));
			$(this).parent().fadeOut(200).remove();
		} else{ }
	});
	$('.main-container.casestudies-admin .item .delete').click(function() {
		var deleteThis = $(this).parent().attr('id');
		var answer = confirm("Are you sure you want to delete this? This cannot be undone.");
		if (answer){
    		$.post(prelink + 'casestudies/delete/'+parseInt(deleteThis));
			$(this).parent().fadeOut(200).remove();
		} else{ }
	});
}

//Add Item
var whoisit;
function addThis(whoisit) {
	overlay.css('opacity', 0);
	overlay.find('figure').hide();
	overlay.find('textarea').css('height', 'auto');
	$('body').addClass('noscroll').append(overlay);
	
	if(whoisit == 0) {
		overlay.find('.circle').remove();
		var urla = prelink + 'news/add';
		var urlb = prelink + 'news/getone/';
		var show = 'News item added!';
		var hold = $('.main-container.news-admin');
	} else {
		var urla = prelink + 'casestudies/add';
		var urlb = prelink + 'casestudies/getone/';
		var show = 'Case study added!';
		var hold = $('.main-container.casestudies-admin');
		overlay.find('.buttoned').before(caselay);
	}
	
	overlay.animate({'opacity': 1}, 200, function() {
		$('.admin-content textarea[name=content]').focus(function() { 
			if($(this).val() == 'Enter the content here...') $(this).val('');
		}).blur(function() {
			if($(this).val() == '') $(this).val('Enter the content here...');
		}).autosize();
		$('.admin-content input[name=title]').focus(function() { 
			if($(this).val() == 'Enter the title here...') $(this).val('');
		}).blur(function() {
			if($(this).val() == '') $(this).val('Enter the title here...');
		}).select();
		
		overlay.click(function(e) {
			if($(e.target).hasClass('black-out')) {
				var answer = confirm('Are you sure you want to exit this screen? Any changes will be lost.');
				if (answer){
					overlay.animate({'opacity': 0}, 200, function() {
						$(this).find('.admin-form').trigger('reset');
						$(this).remove();
					});
					$('body').removeClass('noscroll');
				} else{ }
			}
		});
		
		overlay.find('.image_link').on('change', function() { fileNameCheck($(this)); } );
		if(whoisit == 1) overlay.find('.circle input').on('change', function() { fileNameCheck($(this)); } );
		
		$('.admin-form').submit(function (e) {
			e.preventDefault();
			
			$(this).animate({'opacity': 0.1}, 500);
			$(this).after('<div class="hider" style="width:100%;height:100%;z-index:999;display:block;"><img src="../img/admin-loader.gif" style="position:absolute;left:50%;top:50%;" /></div>');
			
			var formData = new FormData($(this)[0]);
			
			$('.black-out').animate({
				scrollTop: $('.black-out').offset().top
			}, 200);
			
			$.ajax({
				url: urla,
				type: 'POST',
				data: formData,
				async: true,
				success: function(response) {
					$.get(urlb + parseInt(response), function(data) {

						$('.admin-form').animate({'opacity': 0}, 200, function() { 
							alert(show);
						});
						overlay.delay(1000).animate({'opacity': 0}, 200, function() {
						  
							overlay.find('.hider').remove();
							overlay.find('.admin-form').css('opacity', 1).trigger('reset');
							overlay.remove();
							var newItem = $('<div class="item" id="'+response+'"><a href="#" class="delete"><i class="fa fa-times"></i></a>'+data+'</div>');
							$(newItem).find('h3').click(function() { editThis(whoisit, this) });
							hold.find('.control').after(newItem).fadeIn(200);
							deleteThis();
							interact();
							$('body').removeClass('noscroll');
				
						});
					});
				},
				error: function() {
					alert('There seems to be a problem. Please check your internet connection and try again.')
					$('.admin-form').animate({'opacity': 1}, 200);
					$('.admin-content').find('.hider').fadeOut(200).remove();
					$('.black-out').animate({
						scrollTop: $('.black-out').offset().top
					}, 200);
				},
				cache: false,
				contentType: false,
				processData: false
			});
			
		});
	});
	
}

//Edit Item
function editThis(whoisit, obj) {
	overlay.css('opacity', 0);
	$('body').addClass('noscroll').append(overlay);
	var title = $(obj);
	$(title).find('span').remove();
	var content = $(obj).siblings('.content').html();
	
	var imageSrc = $(obj).siblings('.image').find('img').attr('src');
	$.ajax({ url: imageSrc, type: 'HEAD', success:function(){
		overlay.find('figure').empty().append('<img src="' + imageSrc + '" />').show();
	}, error:function(){
		overlay.find('figure').hide();
	}});
	
	if(whoisit == 1) {
		overlay.find('.buttoned').before(caselay);
		var thisDiv = $(obj).siblings('.circle');
		thisDiv.find('img').each(function(i) {
			if(this.width == 0) {
				$('.admin-form .circle').eq(i).find('img').remove();
			} else {
				$('.admin-form .circle').eq(i).prepend('<img src="' + this.src + '" />');
				$('.admin-form .circle').eq(i).find('img').click(function() { window.open(this.src); });
			}
		});
		var urla = prelink + 'casestudies/update/';
		var urlb = prelink + 'casestudies/getone/';
		var show = 'Case study updated successfully!';
		var hold = $('.main-container.casestudies-admin .item');
	} else {
		overlay.find('.circle').remove();
		var urla = prelink + 'news/update/';
		var urlb = prelink + 'news/getone/';
		var show = 'News item updated successfully!';
		var hold = $('.main-container.news-admin .item');
	}
	
	overlay.find('textarea').css('height', 'auto');
	var id = $(obj).parent().attr('id');
	
	overlay.animate({'opacity': 1}, 200, function() {
		
		$('.admin-form input.title').val($(title).html()).focus();
		$('.admin-form textarea.content').val(content).autosize();
		$('.admin-form figure').css('opacity', 1).find('img').click(function() { window.open(imageSrc); });
				
		overlay.click(function(e) {
			if($(e.target).hasClass('black-out')) {
				var answer = confirm('Are you sure you want to exit this screen? Any changes will be lost.');
				if (answer){
					overlay.animate({'opacity': 0}, 200, function() {
						$(this).find('.admin-form').trigger('reset');
						$(this).find('.circle img').each(function() { $(this).remove(); });
						$(this).remove();
					});
					$('body').removeClass('noscroll');
				} else{ }
			}
		});
		
		overlay.find('.image_link').on('change', function() { fileNameCheck($(this)); } );
		if(whoisit == 1) overlay.find('.circle input').on('change', function() { fileNameCheck($(this)); } );
		
		$('.admin-form').submit(function (e) {
			e.preventDefault();
			
			$(this).animate({'opacity': 0.1}, 500);
			$(this).after('<div class="hider" style="width:100%;height:100%;z-index:999;display:block;"><img src="../img/admin-loader.gif" style="position:absolute;left:50%;top:50%;" /></div>');
			
			var formData = new FormData($(this)[0]);
			
			$('.black-out').animate({
				scrollTop: $('.black-out').offset().top
			}, 200);
			
			$.ajax({
				url: urla + id,
				type: 'POST',
				data: formData,
				async: true,
				success: function(response) {
					$('.admin-form').animate({'opacity': 0}, 200, function() {
						var newTitle = $(this).find('input.title').val();
						var newContent = $(this).find('textarea.content').val();
						alert(show);
						$.get(urlb + id, function(data) {
							overlay.delay(1000).animate({'opacity': 0}, 200, function() {
								overlay.find('.hider').remove();
								overlay.find('.admin-form').css('opacity', 1).trigger('reset');
								overlay.find('.circle img').each(function() { $(this).remove(); });
								overlay.remove();
								hold.each(function() {
									if($(this).attr('id') == id) {
										var newItem = $('<div class="item" id="'+response+'"><a href="#" class="delete"><i class="fa fa-times"></i></a>'+data+'</div>');
										$(this).replaceWith(newItem);
										$(newItem).find('h3').click(function() { editThis(whoisit, this) });
									}
								});
								deleteThis();
								interact();
								$('body').removeClass('noscroll');
							});	
						});
					});
				},
				error: function() {
					alert('There seems to be a problem. Please check your internet connection and try again.');
					$('.admin-form').animate({'opacity': 1}, 200);
					$('.admin-content').find('.hider').fadeOut(200).remove();
					$('.black-out').animate({
						scrollTop: $('.black-out').offset().top
					}, 200);
				},
				cache: false,
				contentType: false,
				processData: false
			});
		});
	});
}

//Check for Invalid Characters
function fileNameCheck(input) {
	if(/^[^<>%$#%@|]*$/.test($(input).val())) { } else {
		alert('Invalid characters in filename. Please rename the file and try again.');
		$(input).val('');
		$(input).on('change', function() { fileNameCheck($(this)); } );
		return true;
	}	
}

//Slides Function
function slideAdmin() {
	servicesSlideManager();
	//Initiate Control Functions
	$('.main-container.slides-admin .control').find('a').click(function(e) {
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		if($(this).index() == 0) {
			$('.main-container.slides-admin').find('.slides-services').show();
			$('.main-container.slides-admin').find('.slides-about').hide();
			$('.main-container.slides-admin .slides-about figure i').unbind('click');
			$('.main-container.slides-admin .slides-about figure').find('input').unbind('change');
			servicesSlideManager();
		}
		if($(this).index() == 1) {
			$('.main-container.slides-admin').find('.slides-services').hide();
			$('.main-container.slides-admin').find('.slides-about').show();
			$('.main-container.slides-admin .slides-services figure i').unbind('click');
			$('.main-container.slides-admin .slides-services figure').find('input').unbind('change');
			aboutSlideManager();
		}
	});
}

//Slides - Services Functions
function servicesSlideManager() {
	$('.main-container.slides-admin .slides-services figure i').click(function() {
		window.open($(this).siblings('img').attr('src'));
	});
	$('.main-container.slides-admin .slides-services figure').find('input').on('change', function() {
		if(fileNameCheck($(this))) return;
		var thisInput = $(this);
		var thisImage = $(this).siblings('img'); 
		
		var formData = new FormData($('.slides-services').find('form')[0]);
		
		$(this).siblings('img').fadeOut(500, function() { $(this).remove(); });

		$(this).replaceWith('<img src="../img/admin-loader-white.gif" class="loader" />');
		
		$.ajax({
			url: prelink + 'slides/updateservices/' + thisInput.attr('name'),
			type: 'POST',
			data: formData,
			async: true,
			success: function(response) {
				$('.slides-services .loader').replaceWith(thisInput.val(''));
				$(thisInput).before('<img src="../../uploads/' + response + '" />');
				$('.main-container.slides-admin .slides-services figure i').unbind('click');
				$('.main-container.slides-admin .slides-services figure').find('input').unbind('change');
				servicesSlideManager();
			},
			error: function() {
				alert('There seems to be a problem. Please check your internet connection and refresh this page to try again.');
				$('.slides-services .loader').replaceWith(thisInput);
				$(thisInput).before(thisImage);
			},
			cache: false,
			contentType: false,
			processData: false

		});
	});
}

//Slides - About Functions
function aboutSlideManager() {
	$('.main-container.slides-admin .slides-about figure i').click(function() {
		window.open($(this).siblings('img').attr('src'));
	});
	$('.main-container.slides-admin .slides-about figure').find('input').on('change', function() {
		if(fileNameCheck($(this))) return;
		var thisInput = $(this);
		var thisImage = $(this).siblings('img'); 
		
		var formData = new FormData($('.slides-about').find('form')[0]);
		
		$(this).siblings('img').fadeOut(500, function() { $(this).remove(); });
		var id = $('.slides-about form').attr('id');

		$(this).replaceWith('<img src="../img/admin-loader-white.gif" class="loader" />');
		
		$.ajax({
			url: prelink + 'slides/updateabout/' + thisInput.attr('name'),
			type: 'POST',
			data: formData,
			async: true,
			success: function(response) {
				$('.slides-about .loader').replaceWith(thisInput.val(''));
				$(thisInput).before('<img src="../../uploads/' + response + '" />');
				$('.main-container.slides-admin .slides-about figure i').unbind('click');
				$('.main-container.slides-admin .slides-about figure').find('input').unbind('change');
				aboutSlideManager();
			},
			error: function() {
				alert('There seems to be a problem. Please check your internet connection and refresh this page to try again.');
				$('.slides-about .loader').replaceWith(thisInput);
				$(thisInput).before(thisImage);
			},
			cache: false,
			contentType: false,
			processData: false

		});
	});
}