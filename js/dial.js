var mainLink;
$( document ).ready(function() {
	mainLink = $('.main-link').html();
	var data = [
		{ label: "extra", data: 12.5, color: "#199b90", h3: "Rhino Ecowash Extra", h6: "High performance spray wash system with recycling", li: "<li><img src='"+mainLink+"img/icon-7.png' />Inverter</li><li><img src='"+mainLink+"img/icon-9.png' />Operational Costs</li><li><img src='"+mainLink+"img/icon-10.png' />4.2 BAR</li><li><img src='"+mainLink+"img/icon-11.png' />63 Amps<br />45 Kva</li><li><img src='"+mainLink+"img/icon-1.png' />36,000 L Water Recycling</li><li><img src='"+mainLink+"img/icon-2.png' />1-2 Revolutions</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li>", desc: "<img src='"+mainLink+"img/extra-1.jpg' />", circ: "<figure><img src='"+mainLink+"img/extra-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Oil Pipeline</figure><figure><img src='"+mainLink+"img/extra-circle-2.jpg' /><img src='"+mainLink+"img/flag-us.png' class='flag' /><b>USA</b><br />Construction</figure><figure><img src='"+mainLink+"img/extra-circle-3.jpg' /><img src='"+mainLink+"img/flag-sp.png' class='flag' /><b>Spain</b><br />Landfill</figure>", pdf: "Rhino%20Ecowash%20Extra.pdf" },
		{ label: "extraclear", data: 12.5, color: "#25b571", h3: "Rhino Extra Clear", h6: "High performance spray wash system with high capacity lamella clarifier for recycling", li: "<li><img src='"+mainLink+"img/icon-7.png' />Inverter</li><li><img src='"+mainLink+"img/icon-9.png' />Operational Costs</li><li><img src='"+mainLink+"img/icon-10.png' />4.2 BAR</li><li><img src='"+mainLink+"img/icon-11.png' />63 Amps<br />45 Kva</li><li><img src='"+mainLink+"img/icon-1.png' />200m<sup>2</sup> Recycling Capacity</li><li><img src='"+mainLink+"img/icon-2.png' />1-2 Revolutions</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li>", desc: "<img src='"+mainLink+"img/extraclear-1.jpg' />", circ: "<figure><img src='"+mainLink+"img/extraclear-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Construction</figure><figure><img src='"+mainLink+"img/extraclear-circle-2.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Construction</figure><figure><img src='"+mainLink+"img/extraclear-circle-3.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Construction</figure>", pdf: "Rhino%20Ecowash%20Extra%20Clear.pdf" },
		{ label: "extreme", data: 12.5, color: "#73c15d", h3: "Rhino Ecowash Extreme", h6: "High performance spray wash system with high capacity, effective water recycling", li: "<li><img src='"+mainLink+"img/icon-7.png' />Inverter</li><li><img src='"+mainLink+"img/icon-9.png' />Operational Costs</li><li><img src='"+mainLink+"img/icon-8.png' />5 BAR</li><li><img src='"+mainLink+"img/icon-11.png' />80 Amps<br />80 Kva</li><li><img src='"+mainLink+"img/icon-1.png' />Water Recycling 56,000 L</li><li><img src='"+mainLink+"img/icon-2.png' />4 Revolutions</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li>", circ: "<figure><img src='"+mainLink+"img/extreme-circle-1.jpg' /><img src='"+mainLink+"img/flag-sp.png' class='flag' /><b>Spain</b><br />Port</figure><figure><img src='"+mainLink+"img/extreme-circle-2.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Quarry</figure><figure><img src='"+mainLink+"img/extreme-circle-3.jpg' /><img src='"+mainLink+"img/flag-gr.png' class='flag' /><b>Greece</b><br />Quarry</figure>", desc: "<img src='"+mainLink+"img/extreme-1.jpg' />", pdf: "Rhino%20Ecowash%20Extreme.pdf" },
		{ label: "ecoramp", data: 12.5, color: "#ff6633", h3: "Rhino Ecoramp", h6: "High performance dry ramp system", li: "<li><img src='"+mainLink+"img/icon-4.png' />No Power</li><li><img src='"+mainLink+"img/icon-15.png' />No Water</li><li><img src='"+mainLink+"img/icon-16.png' />Min 5 wheel revolutions</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li>", circ: "<figure><img src='"+mainLink+"img/ecoramp-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Quarry</figure><figure><img src='"+mainLink+"img/ecoramp-circle-2.jpg' /><img src='"+mainLink+"img/flag-fr.png' class='flag' /><b>France</b><br />Remediation</figure><figure><img src='"+mainLink+"img/ecoramp-circle-3.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Construction</figure>", desc: "<img src='"+mainLink+"img/ecoramp-1.jpg' />", pdf: "Rhino%20Ecoramp.pdf" },
		{ label: "ecobath", data: 12.5, color: "#660099", h3: "Rhino Ecobath", h6: "High performance drive through bath system", li: "<li><img src='"+mainLink+"img/icon-4.png' />No Power</li><li><img src='"+mainLink+"img/icon-15.png' />13,750 litres water capacity</li><li><img src='"+mainLink+"img/icon-16.png' />Min 3 wheel revolutions</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li>", circ: "<figure><img src='"+mainLink+"img/ecobath-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Construction</figure><figure><img src='"+mainLink+"img/ecobath-circle-2.jpg' /><img src='"+mainLink+"img/flag-us.png' class='flag' /><b>USA</b><br />Construction</figure><figure><img src='"+mainLink+"img/ecobath-circle-3.jpg' /><img src='"+mainLink+"img/flag-be.png' class='flag' /><b>Belgium</b><br />Industrial Site</figure>", desc: "<img src='"+mainLink+"img/ecobath-1.jpg' />", pdf: "Rhino%20Ecobath.pdf" },
		{ label: "bespoke", data: 12.5, color: "#999999", h3: "Rhino Bespoke", h6: "Any of the Ecowash Range can be made bespoke to your requirements", li: "<li><img src='"+mainLink+"img/icon-7.png' />Inverter</li><li><img src='"+mainLink+"img/icon-9.png' />Operational Costs</li><li><img src='"+mainLink+"img/icon-17.png' />High BAR</li><li><img src='"+mainLink+"img/icon-11.png' />Low Power</li><li><img src='"+mainLink+"img/icon-1.png' />Optional Water Recycling</li><li><img src='"+mainLink+"img/icon-2.png' />Various Wheel Revolutions</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li>", circ: "<figure><img src='"+mainLink+"img/bespoke-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Landfill Site</figure><figure><img src='"+mainLink+"img/bespoke-circle-2.jpg' /><img src='"+mainLink+"img/flag-au.png' class='flag' /><b>Australia</b><br />Quarry</figure><figure><img src='"+mainLink+"img/bespoke-circle-3.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Quarry</figure>", desc: "", pdf: "#" },
		{ label: "express", data: 12.5, color: "#31559d", h3: "Rhino Ecowash Express", h6: "High performance compact spray wash system with recycling", li: "<li><img src='"+mainLink+"img/icon-13.png' />1.5 BAR</li><li><img src='"+mainLink+"img/icon-11.png' />32 Amps<br />20 Kva</li><li><img src='"+mainLink+"img/icon-1.png' />4,000 L Water Recycling</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile<li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li>", circ: "<figure><img src='"+mainLink+"img/express-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Bovine Insemination Facility</figure><figure><img src='"+mainLink+"img/express-circle-2.jpg' /><img src='"+mainLink+"img/flag-su.png' class='flag' /><b>Suriname</b><br />Mine</figure><figure><img src='"+mainLink+"img/express-circle-3.jpg' /><img src='"+mainLink+"img/flag-sp.png' class='flag' /><b>Spain</b><br />Construction</figure>", desc: "<img src='"+mainLink+"img/express-1.jpg' />", pdf: "Rhino%20Ecowash%20Express.pdf" },
		{ label: "excel", data: 12.5, color: "#247aa2", h3: "Rhino Ecowash Excel", h6: "High performance compact spray wash system with recycling", li: "<li><img src='"+mainLink+"img/icon-14.png' />BAR</li><li><img src='"+mainLink+"img/icon-11.png' />30 Amps<br />30 Kva</li><li><img src='"+mainLink+"img/icon-1.png' />15,000 L Water Recycling</li><li><img src='"+mainLink+"img/icon-2.png' />1 Revolution</li><li><img src='"+mainLink+"img/icon-6.png' />Mobile</li><li><img src='"+mainLink+"img/icon-5.png' />No Civils</li><li><img src='"+mainLink+"img/icon-12.png' />External Sump</li><li><img src='"+mainLink+"img/icon-3.png' />No Operator</li>", circ: "<figure><img src='"+mainLink+"img/excel-circle-1.jpg' /><img src='"+mainLink+"img/flag-uk.png' class='flag' /><b>UK</b><br />Landfill Site</figure><figure><img src='"+mainLink+"img/excel-circle-2.jpg' /><img src='"+mainLink+"img/flag-au.png' class='flag' /><b>Australia</b><br />Construction Site</figure><figure><img src='"+mainLink+"img/excel-circle-3.jpg' /><img src='"+mainLink+"img/flag-us.png' class='flag' /><b>USA</b><br />Construction</figure>", desc: "<img src='"+mainLink+"img/excel-1.jpg' />", pdf: "Rhino%20Ecowash%20Excel.pdf" }
	];
	
	var plot = $.plot('#dial', data, {
		series: {
			pie: {
				show: true,
				radius: 4/5,
				label: {
					show: false
				},
				innerRadius: 24
			}
		},
		grid: {
			hoverable: true,
			clickable: true
		},
		legend: {
            show: false
        }
	});
	
	// Explode Function
    var explodeTo = null;
    function animateExplode(plot, duration) {
        var start = (new Date()).valueOf();
        var end = start + duration;
        explodePump(plot, start, end);
    }
    function explodePump(plot, start, end) {
        var now = Math.min(end, (new Date()).valueOf());
        clearTimeout(explodeTo);
        var ss = plot.getData();
        var p = (now - start) / (end - start);
        p = Math.pow(p, 1/3);
        
        for( var i = 0; i < ss.length; i++ ) {
            ss[i].explode = (1-p)*(ss[i].explodeFrom || 0) + p*(ss[i].explodeTo || 0);					
        }
        plot.draw();
        if( now < end ) {
            explodeTo = setTimeout(function() { explodePump(plot, start, end)}, 15);
        }
    }    
	
	$('#dial').bind('plothover', pieHover);
	$('#dial').bind('plotclick', pieClick);
	
	$('.flot-base').after('<div class="product-names"><img src="'+mainLink+'img/product-names.png" /></div>');
	$('.flot-base').after('<div id="flot-needle"><img src="'+mainLink+'img/needle.png" /></div>');
	
	$('#flot-needle img').css({ WebkitTransform: 'rotate(43deg)'});
    $('#flot-needle img').css({ '-moz-transform': 'rotate(43deg)'});
	
	function pieHover(event, pos, obj) {
		if (!obj) return;
		// Hover Commands
	}
	
	function pieClick(event, pos, obj) {
		if (!obj) {
            return;
        }	
        
        var s = obj.series;
        
        if( typeof(s.exploded) == "undefined" ) s.exploded = s.explode > 0;
        
        var ss = plot.getData();
        for( var i = 0; i < ss.length; i++ ) {
            if( ss[i] != s ) {
                ss[i].explodeFrom = ss[i].explode;
                ss[i].explodeTo = 0;
                ss[i].exploded = false;
            }
        }
        
        s.exploded = !s.exploded;
        s.explodeFrom = s.explode;
        s.explodeTo = s.exploded ? 0.06 : 0;
        
        animateExplode(plot, 200);
		
		var tmpLabel;
		if (tmpLabel != obj.series.label) {
			tmpLabel = obj.series.label;
			switch(obj.series.label) {
				case 'express':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 335 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 335+ 'deg)'});
					slideProductOut(obj);
					break;
				case 'excel':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 21 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 21 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'extra':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 65 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 65 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'extraclear':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 112 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 112 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'extreme':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 155 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 155 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'ecoramp':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 201 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 201 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'ecobath':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 246 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 246 + 'deg)'});
					slideProductOut(obj);
					break;
				case 'bespoke':
					$('#flot-needle img').css({ WebkitTransform: 'rotate(' + 291 + 'deg)'});
					$('#flot-needle img').css({ '-moz-transform': 'rotate(' + 291 + 'deg)'});
					slideProductOut(obj);
					break;
			}
		}
	}
	
});

var cinterval;
function slideProductOut(obj) {
	$('.dial-below .circ').stop().animate({'opacity': 0}, 200, function() {
		$(this).empty();
		$('.dial-below ul').stop().animate({'opacity': 0}, 200, function() {
			$(this).empty();
			if($('.dial-below .download').length) $('.dial-below .download').remove();
			if($('.dial-below .moreinfo').length) $('.dial-below .moreinfo').remove();
			if($('.dial-below .contct').length) $('.dial-below .contct').remove();
			$('.dial-content').find('figure').stop().animate({'opacity': 0}, 200, function() {
				$(this).remove();
				$('.dial-content').find('h6').stop().animate({'opacity': 0}, 200, function(){
					$(this).remove();
					$('.dial-content').find('h3').stop().animate({'opacity': 0}, 200, function(){
						$(this).remove();
						clearInterval(cinterval);
						slideProductIn(obj);
					});
				});
			});
		});
	});
}

function slideProductIn(obj) {
	$('.dial-content').append('<h3 style="opacity:0">' + obj.series.h3 + '</h3>');
	$('.dial-content h3').stop().animate({'opacity': 1}, 200, function() {
		$('.dial-content').append('<h6 style="opacity:0">' + obj.series.h6 + '</h6>')
		$('.dial-content h6').stop().animate({'opacity': 1}, 200, function() {
			$('.dial-content').append('<figure style="opacity:0;">' + obj.series.desc + '</figure>')
			$('.dial-content').find('figure').stop().animate({'opacity': 1}, 200, function() {
				$('.dial-below ul').empty().css('opacity', '1');
				if($(window).width() <= 1026) $('html, body').animate({ scrollTop: $(".dial-content").offset().top - 96 }, 500);
				$(obj.series.li).each(function(i, element) {
					preload($(element).find('img').attr('src'));
					$(element).css('opacity', 0);
					$('.dial-below ul').append(element);
					$(element).stop().delay(200*i).animate({'opacity': 1}, 200);	
				});
				if(obj.series.label == 'bespoke') {
					$('.dial-below .circ').empty().after('<a href="'+mainLink+'product/'+obj.series.label+'" class="moreinfo button">Click here for more information</a><a href="#" class="contct button">Contact</a>').css('opacity', '1');
				} else {
					$('.dial-below .circ').empty().after('<a href="'+obj.series.pdf+'" class="download button" target="_blank">Download PDF File</a><a href="'+mainLink+'product/'+obj.series.label+'" class="moreinfo button">Click here for more information</a><a href="#" class="contct button">Contact</a>').css('opacity', '1');
				}
				$(obj.series.circ).each(function(i, element) {
					preload($(element).find('img').attr('src'));
					$(element).css('opacity', 0);
					$('.dial-below .circ').append(element);
					$(element).stop().delay(1000*i).animate({'opacity': 1}, 200);		
				});
				contactBox();
				pdform();
				cir = 0;
				if(obj.series.label == 'excel') cinterval = setInterval(circularExcel, 5000);
				if(obj.series.label == 'extreme') cinterval = setInterval(circularExtreme, 5000);
				if(obj.series.label == 'ecobath') cinterval = setInterval(circularEcobath, 5000);
				if(obj.series.label == 'express' || obj.series.label == 'extraclear' || obj.series.label == 'ecoramp') cinterval = setInterval(circularRotation, 5000);
				if(obj.series.label == 'bespoke') cinterval = setInterval(circularBespoke, 5000);
				if(obj.series.label == 'extra') cinterval = setInterval(circularExtra, 5000);
			});
		});
	});
}

var bufferObj = null;

//PDF Download Script
function pdform() {
	$('.dial-below .download').click(function(e) {
		e.preventDefault();
		
		var filename = $(this).attr('href');
	
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
					url : mainLink+'contact/download/' + filename,
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
}
//End PDF Download Script

// Contact Form Button
function contactBox() {
	
	$('.contct').click(function(e) {
		
		e.preventDefault();
		var overlay = $('<div class="black-out"><div class="black-content"><h3>Message<i class="fa fa-times"></i></h3><form class="contactform" id="contactform"><label>Name</label><input type="text" id="name" placeholder="Enter Name" class="name" name="name" /><label>Email</label><input type="email" id="email" placeholder="Enter Email" class="email" name="email" /><label>Message</label><textarea placeholder="Enter your message" class="message" name="message" id="message"></textarea><center><input type="submit" class="button" value="Submit"></center></form><div class="cf"></div><div class="phone-numbers"><p>Great Britain: <b>+(44) 01606 592044</b></p><p>Ireland: <b>+(353) 01626 3366</b></p><p>Germany: <b>+(49) 5147 9800 18</b></p><p>Spain: <b>+(34) 984 107 007</b></p><p>North America: <b>+(1) 732 921 7934</b></p><p>Canada: <b>+(1) 732 921 7934</b></p><p>Chile: <b>+(56) 32 2133200</b></p><p>Australia: <b>+(61) 3 9308 5915</b></p><p>New Zealand: <b>+(61) 3 9308 5915</b></p><p>Israel: <b>+(972) 8 9352707</b></p><p>The Netherlands: <b>+(31) 71 5610096</b></p><p>Sweden/Norway: <b>+(46) 72 2242554</b></p></div></div></div>');
		
		overlay.css('opacity', 0);
		$('body').append(overlay);
		
		overlay.stop().animate({'opacity': 1}, 200, function() {

			$('.black-content textarea[name=message]').focus(function() { 
				if($(this).val() == 'Enter your message') $(this).val('');
			}).blur(function() {
				if($(this).val() == '') $(this).val('Enter your message');
			});
			
			overlay.click(function(e) {
				if($(e.target).hasClass('black-out') || $(e.target).hasClass('fa-times')) {
					$('.black-out').stop().animate({'opacity': 0}, 200, function() { $(this).remove(); });
				}
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
							url : mainLink+'contact/message',
							data : $('.contactform').serialize(),
							type: 'POST',
							success : function(data) {
								$('.contactform').hide();
								$('.cf').html(data).fadeIn(200);
								$('.black-out').stop().delay(1000).animate({'opacity': 0}, 200, function() { $(this).remove(); });
							}
						})
						return false;
				  }
			});
				  
		});

	});

}

// Circles Script
var cir = 0;
function circularExcel() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-4.jpg" /><img src="'+mainLink+'img/flag-us.png" class="flag" /><b>USA</b><br>Construction Site').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-5.jpg" /><img src="'+mainLink+'img/flag-ch.png" class="flag" /><b>Chile</b><br>Copper Smelting Plant').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-6.jpg" /><img src="'+mainLink+'img/flag-ho.png" class="flag" /><b>Holland</b><br>Port').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-1.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Landfill Site').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-3.jpg" /><img src="'+mainLink+'img/flag-au.png" class="flag" /><b>Australia</b><br>Construction Site').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/excel-circle-4.jpg" /><img src="'+mainLink+'img/flag-us.png" class="flag" /><b>USA</b><br>Construction Site').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularExtreme() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-4.jpg" /><img src="'+mainLink+'img/flag-sp.png" class="flag" /><b>Spain</b><br>Quarry').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-5.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Inert Recycling').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-6.jpg" /><img src="'+mainLink+'img/flag-sp.png" class="flag" /><b>Spain</b><br>Quarry').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-1.jpg" /><img src="'+mainLink+'img/flag-sp.png" class="flag" /><b>Spain</b><br>Port').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-2.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Quarry').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extreme-circle-3.jpg" /><img src="'+mainLink+'img/flag-gr.png" class="flag" /><b>Greece</b><br>Quarry').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularEcobath() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-4.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Infrastructure').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-5.jpg" /><img src="'+mainLink+'img/flag-au.png" class="flag" /><b>Australia</b><br>Landfill Site').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-6.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Construction').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-1.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br>Construction').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-2.jpg" /><img src="'+mainLink+'img/flag-us.png" class="flag" /><b>USA</b><br>Construction').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/ecobath-circle-3.jpg" /><img src="'+mainLink+'img/flag-be.png" class="flag" /><b>Belgium</b><br>Industrial Site').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularRotation() {
	var a = $('.dial-below .circ').find('figure').eq(0).html();
	var b = $('.dial-below .circ').find('figure').eq(1).html();
	var c = $('.dial-below .circ').find('figure').eq(2).html();
	$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function() {
		$(this).replaceWith('<figure>'+c+'</figure>').stop().animate({'opacity': 1}, 500);
	});
	$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
		$(this).empty().replaceWith('<figure>'+a+'</figure>').stop().animate({'opacity': 1}, 500);
	});
	$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function() {
		$(this).empty().replaceWith('<figure>'+b+'</figure>').stop().animate({'opacity': 1}, 500);
	});

}
function circularBespoke() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-4.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Mine').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-5.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Port').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-1.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Landfill Site').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-1.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Landfill Site').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-2.jpg" /><img src="'+mainLink+'img/flag-au.png" class="flag" /><b>Australia</b><br />Quarry').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/bespoke-circle-3.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Quarry').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularExtra() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-4.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Quarry & Landfill').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-5.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Construction').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-6.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Quarry').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-1.jpg" /><img src="'+mainLink+'img/flag-uk.png" class="flag" /><b>UK</b><br />Oil Pipeline').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-2.jpg" /><img src="'+mainLink+'img/flag-us.png" class="flag" /><b>USA</b><br />Construction').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="'+mainLink+'img/extra-circle-3.jpg" /><img src="'+mainLink+'img/flag-sp.png" class="flag" /><b>Spain</b><br />Landfill').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
//Preloading Images
function preload(src) {
	$('<img/>')[0].src = src;
}
