$( document ).ready(function() {
	 
	var data = [
		{ label: "extra", data: 12.5, color: "#199b90", h3: "Rhino Ecowash Extra", h6: "Sistema de lavado de alto rendimiento por aspersión con sistema de recirculación de agua", li: "<li><img src='http://wheelwash.com/img/icon-7.png' />Variador de velocidad</li><li><img src='http://wheelwash.com/img/icon-9.png' />Costes operacionales</li><li><img src='http://wheelwash.com/img/icon-10.png' />4.2 BAR</li><li><img src='http://wheelwash.com/img/icon-11.png' />60 Amps<br />40 Kva</li><li><img src='http://wheelwash.com/img/icon-1.png' />36,000 L Reciclaje de Agua</li><li><img src='http://wheelwash.com/img/icon-2.png' />1-2 Revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li><li><img src='http://wheelwash.com/img/icon-3.png' />Funcionamiento automático</li>", desc: "<img src='http://wheelwash.com/img/extra-1.jpg' />", circ: "<figure><img src='http://wheelwash.com/img/extra-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Tuberia de petróleo</figure><figure><img src='http://wheelwash.com/img/extra-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-us.png' class='flag' /><b>EEUU</b><br />Construcción</figure><figure><img src='http://wheelwash.com/img/extra-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-sp.png' class='flag' /><b>Espana</b><br />Vertedero</figure>", pdf: "Rhino%20Ecowash%20Extra.pdf" },
		{ label: "extraclear", data: 12.5, color: "#25b571", h3: "Rhino Extra Clear", h6: "Sistema de lavado de alto rendimiento por aspersión con filtro de lamelas y sistema de recirculación de agua. ", li: "<li><img src='http://wheelwash.com/img/icon-7.png' />Variador de velocidad</li><li><img src='http://wheelwash.com/img/icon-9.png' />Costes operacionales</li><li><img src='http://wheelwash.com/img/icon-10.png' />4.2 BAR</li><li><img src='http://wheelwash.com/img/icon-11.png' />63 Amps<br />45 Kva</li><li><img src='http://wheelwash.com/img/icon-1.png' />200m<sup>2</sup> capacidad de sedimentación</li><li><img src='http://wheelwash.com/img/icon-2.png' />1-2 Revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li><li><img src='http://wheelwash.com/img/icon-3.png' />Funcionamiento automático</li>", desc: "<img src='http://wheelwash.com/img/extraclear-1.jpg' />", circ: "<figure><img src='http://wheelwash.com/img/extraclear-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Construcción</figure><figure><img src='http://wheelwash.com/img/extraclear-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Construcción</figure><figure><img src='http://wheelwash.com/img/extraclear-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Construcción</figure>", pdf: "Rhino%20Ecowash%20Extra%20Clear.pdf" },
		{ label: "extreme", data: 12.5, color: "#73c15d", h3: "Rhino Ecowash Extreme", h6: "Sistema de lavado de alto rendimiento por aspersión con sistema de recirculación de agua", li: "<li><img src='http://wheelwash.com/img/icon-7.png' />Variador de velocidad</li><li><img src='http://wheelwash.com/img/icon-9.png' />Costes operacionales</li><li><img src='http://wheelwash.com/img/icon-8.png' />5 BAR</li><li><img src='http://wheelwash.com/img/icon-11.png' />80 Amps<br />80 Kva</li><li><img src='http://wheelwash.com/img/icon-1.png' />56,000 L Reciclaje de Agua</li><li><img src='http://wheelwash.com/img/icon-2.png' />4 Revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li><li><img src='http://wheelwash.com/img/icon-3.png' />Funcionamiento automático</li>", circ: "<figure><img src='http://wheelwash.com/img/extreme-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-sp.png' class='flag' /><b>Espana</b><br />Puerto</figure><figure><img src='http://wheelwash.com/img/extreme-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Cantera</figure><figure><img src='http://wheelwash.com/img/extreme-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-gr.png' class='flag' /><b>Grecia</b><br />Cantera</figure>", desc: "<img src='http://wheelwash.com/img/extreme-1.jpg' />", pdf: "Rhino%20Ecowash%20Extreme.pdf" },
		{ label: "ecoramp", data: 12.5, color: "#ff6633", h3: "Rhino Ecoramp", h6: "Sistema de lavado de ruedas de alto rendimiento", li: "<li><img src='http://wheelwash.com/img/icon-4.png' />No requiere energía</li><li><img src='http://wheelwash.com/img/icon-15.png' />No requiere agua</li><li><img src='http://wheelwash.com/img/icon-16.png' />Min. 5 revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-3.png' />No necesita operarios</li><li><img src='http://wheelwash.com/img/icon-6.png' />Movil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li>", circ: "<figure><img src='http://wheelwash.com/img/ecoramp-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Cantera</figure><figure><img src='http://wheelwash.com/img/ecoramp-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-fr.png' class='flag' /><b>Francia</b><br />Remediacion</figure><figure><img src='http://wheelwash.com/img/ecoramp-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Construcción</figure>", desc: "<img src='http://wheelwash.com/img/ecoramp-1.jpg' />", pdf: "Rhino%20Ecoramp.pdf" },
		{ label: "ecobath", data: 12.5, color: "#660099", h3: "Rhino Ecobath", h6: "Sistema de lavado de ruedas de alto rendimiento", li: "<li><img src='http://wheelwash.com/img/icon-4.png' />No necesita energía</li><li><img src='http://wheelwash.com/img/icon-15.png' />13.750 litros de agua</li><li><img src='http://wheelwash.com/img/icon-16.png' />Mínimo 3 revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-3.png' />funcionamiento automático</li><li><img src='http://wheelwash.com/img/icon-6.png' />Movil</li><li><img src='http://wheelwash.com/img/icon-5.png' />Sin obra civil</li>", circ: "<figure><img src='http://wheelwash.com/img/ecobath-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Construcción</figure><figure><img src='http://wheelwash.com/img/ecobath-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-us.png' class='flag' /><b>EEUU</b><br />Construcción</figure><figure><img src='http://wheelwash.com/img/ecobath-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-be.png' class='flag' /><b>Bélgica</b><br />Sitio Industrial</figure>", desc: "<img src='http://wheelwash.com/img/ecobath-1.jpg' />", pdf: "Rhino%20Ecobath.pdf" },
		{ label: "bespoke", data: 12.5, color: "#999999", h3: "Rhino Bespoke", h6: "Cualquier sistema de la gama Eco puede ser adaptado según sus requerimientos.  ", li: "<li><img src='http://wheelwash.com/img/icon-7.png' />Variador de velocidad</li><li><img src='http://wheelwash.com/img/icon-9.png' />Costes operacionales</li><li><img src='http://wheelwash.com/img/icon-17.png' />BAR alto</li><li><img src='http://wheelwash.com/img/icon-11.png' />Bajo consumo de energía</li><li><img src='http://wheelwash.com/img/icon-1.png' />Reciclaje de agua opcional</li><li><img src='http://wheelwash.com/img/icon-2.png' />Varias revoluciones de rueda</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li><li><img src='http://wheelwash.com/img/icon-3.png' />No necesita operarios</li>", circ: "<figure><img src='http://wheelwash.com/img/bespoke-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Vertedero</figure><figure><img src='http://wheelwash.com/img/bespoke-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-au.png' class='flag' /><b>Australia</b><br />Cantera</figure><figure><img src='http://wheelwash.com/img/bespoke-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Cantera</figure>", desc: "", pdf: "#" },
		{ label: "express", data: 12.5, color: "#31559d", h3: "Rhino Ecowash Express", h6: "Sistema de lavado de alto rendimiento por aspersión con sistema de recirculación de agua", li: "<li><img src='http://wheelwash.com/img/icon-13.png' />1.5 BAR</li><li><img src='http://wheelwash.com/img/icon-11.png' />32 Amps<br />20 Kva</li><li><img src='http://wheelwash.com/img/icon-1.png' />4,000 L Reciclaje de Agua</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil<li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-3.png' />Funcionamiento automático</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li>", circ: "<figure><img src='http://wheelwash.com/img/express-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Instalación de inseminación de bovinos</figure><figure><img src='http://wheelwash.com/img/express-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-su.png' class='flag' /><b>Suriname</b><br />Mina</figure><figure><img src='http://wheelwash.com/img/express-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-sp.png' class='flag' /><b>España</b><br />Construcción</figure>", desc: "<img src='http://wheelwash.com/img/express-1.jpg' />", pdf: "Rhino%20Ecowash%20Express.pdf" },
		{ label: "excel", data: 12.5, color: "#247aa2", h3: "Rhino Ecowash Excel", h6: "Sistema de lavado de alto rendimiento por aspersión con sistema de recirculación de agua", li: "<li><img src='http://wheelwash.com/img/icon-14.png' />BAR</li><li><img src='http://wheelwash.com/img/icon-11.png' />30 Amps<br />30 Kva</li><li><img src='http://wheelwash.com/img/icon-1.png' />15,000 L Reciclaje de Agua</li><li><img src='http://wheelwash.com/img/icon-2.png' />1 Revolución de rueda</li><li><img src='http://wheelwash.com/img/icon-6.png' />Móvil</li><li><img src='http://wheelwash.com/img/icon-5.png' />No requiere obra civil</li><li><img src='http://wheelwash.com/img/icon-12.png' />Sumidero externo</li><li><img src='http://wheelwash.com/img/icon-3.png' />Funcionamiento automático</li>", circ: "<figure><img src='http://wheelwash.com/img/excel-circle-1.jpg' /><img src='http://wheelwash.com/img/flag-uk.png' class='flag' /><b>Reino Unido</b><br />Vertederoe</figure><figure><img src='http://wheelwash.com/img/excel-circle-2.jpg' /><img src='http://wheelwash.com/img/flag-au.png' class='flag' /><b>Australia</b><br />Obra de construcción</figure><figure><img src='http://wheelwash.com/img/excel-circle-3.jpg' /><img src='http://wheelwash.com/img/flag-us.png' class='flag' /><b>EEUU</b><br />Obra de construcción</figure>", desc: "<img src='http://wheelwash.com/img/excel-1.jpg' />", pdf: "Rhino%20Ecowash%20Excel.pdf" }
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
	
	$('.flot-base').after('<div class="product-names"><img src="http://wheelwash.com/es/product-names.png" /></div>');
	$('.flot-base').after('<div id="flot-needle"><img src="http://wheelwash.com/img/needle.png" /></div>');
	
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
					$('.dial-below .circ').empty().after('<a href="http://wheelwash.com/product/'+obj.series.label+'" class="moreinfo button">Haga clic aquí para más información</a><a href="#" class="contct button">Contactar</a>').css('opacity', '1');
				} else {
					$('.dial-below .circ').empty().after('<a href="'+obj.series.pdf+'" class="download button" target="_blank">Descargar ficha técnica en .pdf</a><a href="http://wheelwash.com/product/'+obj.series.label+'" class="moreinfo button">Haga clic aquí para más información</a><a href="#" class="contct button">Contactar</a>').css('opacity', '1');
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
	
		var overlay = $('<div class="black-out"><div class="pdf-content"><form class="pdform"><label>Nombre</label><input type="text" class="name" name="name" value="Déjanos tu nombre..." /><label>E-mail</label><input name="email" class="email" value="Déjanos tu E-mail..." /><input type="submit" value="Descarga" class="download button" /></div></form></div></div>');
		
		overlay.css('opacity', 0);
		$('body').append(overlay);
		overlay.animate({'opacity': 1}, 500, function() {
			$('.pdf-content input[name=name]').focus(function() { 
				if($(this).val() == 'Déjanos tu nombre...') $(this).val('');
			}).blur(function() {
				if($(this).val() == '') $(this).val('Déjanos tu nombre...');
			}).select();
			$('.pdf-content input[name=email]').focus(function() { 
				if($(this).val() == 'Déjanos tu E-mail...') $(this).val('');
			}).blur(function() {
				if($(this).val() == '') $(this).val('Déjanos tu E-mail...');
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
					url : 'http://wheelwash.com/contact/download/' + filename,
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
		var overlay = $('<div class="black-out"><div class="black-content"><h3>Mensaje<i class="fa fa-times"></i></h3><form class="contactform" id="contactform"><label>Nombre</label><input type="text" id="name" placeholder="Introduzca su nombre" class="name" name="name" /><label>Email</label><input type="email" id="email" placeholder="Introduzca su email" class="email" name="email" /><label>Mensaje</label><textarea placeholder="Introduzca su mensaje" class="message" name="message" id="message"></textarea><center><input type="submit" class="button" value="Enviar"></center></form><div class="cf"></div><div class="phone-numbers"><p>Reino Unido: <b>+(44) 01606 592044</b></p><p>Irlanda: <b>+(353) 01626 3366</b></p><p>Alemania: <b>+(49) 5147 9800 18</b></p><p>España: <b>+(34) 984 107 007</b></p><p>Los EEUU: <b>+(1) 732 921 7934</b></p><p>Canada: <b>+(1) 732 921 7934</b></p><p>Chile: <b>+(56) 32 2133200</b></p><p>Australia: <b>+(61) 3 9308 5915</b></p><p>Nueva Zelanda: <b>+(61) 3 9308 5915</b></p><p>Israel: <b>+(972) 8 9352707</b></p><p>Países Bajos: <b>+(31) 71 5610096</b></p><p>Suecia / Noruega: <b>+(46) 72 2242554</b></p></div></div></div>');
		
		overlay.css('opacity', 0);
		$('body').append(overlay);
		
		overlay.stop().animate({'opacity': 1}, 200, function() {
			
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
							url : 'http://wheelwash.com/contact/message',
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
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-us.png" class="flag" /><b>EEUU</b><br>Obra de construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-5.jpg" /><img src="http://wheelwash.com/img/flag-ch.png" class="flag" /><b>Chile</b><br>Planta de fundición de cobre').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-6.jpg" /><img src="http://wheelwash.com/img/flag-ho.png" class="flag" /><b>Hollanda</b><br>Puerto').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Vertedero').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-3.jpg" /><img src="http://wheelwash.com/img/flag-au.png" class="flag" /><b>Australia</b><br>Obra de construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/excel-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-us.png" class="flag" /><b>EEUU</b><br>Obra de construcción').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularExtreme() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-sp.png" class="flag" /><b>Espana</b><br>Cantera').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-5.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Reciclaje Inert').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-6.jpg" /><img src="http://wheelwash.com/img/flag-sp.png" class="flag" /><b>Espana</b><br>Cantera').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-sp.png" class="flag" /><b>Espana</b><br>Puerto').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-2.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Cantera').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extreme-circle-3.jpg" /><img src="http://wheelwash.com/img/flag-gr.png" class="flag" /><b>Greece</b><br>Cantera').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularEcobath() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Infraestructura').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-5.jpg" /><img src="http://wheelwash.com/img/flag-au.png" class="flag" /><b>Australia</b><br>Vertedero').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-6.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Construcción').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br>Construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-2.jpg" /><img src="http://wheelwash.com/img/flag-us.png" class="flag" /><b>EEUU</b><br>Construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/ecobath-circle-3.jpg" /><img src="http://wheelwash.com/img/flag-be.png" class="flag" /><b>Bélgica</b><br>Sitio industrial').stop().animate({'opacity': 1}, 500);
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
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Mina').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-5.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Puerto').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Vertedero').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Vertedero').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-2.jpg" /><img src="http://wheelwash.com/img/flag-au.png" class="flag" /><b>Australia</b><br />Cantera').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/bespoke-circle-3.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Cantera').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
function circularExtra() {
	if(cir == 0) {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-4.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Cantera y vertedero').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-5.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-6.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Cantera').stop().animate({'opacity': 1}, 500);
		});
		cir = 1;
	} else {
		$('.dial-below .circ').find('figure').eq(0).stop().animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-1.jpg" /><img src="http://wheelwash.com/img/flag-uk.png" class="flag" /><b>Reino Unido</b><br />Tuberia de petróleo').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(1).stop().delay(1000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-2.jpg" /><img src="http://wheelwash.com/img/flag-us.png" class="flag" /><b>EEUU</b><br />Construcción').stop().animate({'opacity': 1}, 500);
		});
		$('.dial-below .circ').find('figure').eq(2).stop().delay(2000).animate({'opacity': 0}, 500, function(){
			$(this).empty().append('<img src="http://wheelwash.com/img/extra-circle-3.jpg" /><img src="http://wheelwash.com/img/flag-sp.png" class="flag" /><b>Espana</b><br />Vertedero').stop().animate({'opacity': 1}, 500);
		});
		cir = 0;
	}
}
//Preloading Images
function preload(src) {
	$('<img/>')[0].src = src;
}
