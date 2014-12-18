<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Wheel Cleaning Solutions | <?php echo $title;
	if($this->uri->segment(2) == 'show') {
		if($this->uri->segment(1) == 'casestudies') {
			echo ' | ' . $case['title'];
		} else if($this->uri->segment(1) == 'news') {
			echo ' | ' . $news['title'];
		}
	} ?></title>
<meta name="description" content="<?php echo $description; ?>">
<meta name="keywords" content="wheel washing cleaning solutions ecowash ecobath ecoramp ecoclear extra clear excel express bespoke agriwash international canada north america chile britain netherland ireland sweden norway aurstralia newzealand israel germany spain bath recycling ramp construction spraw global">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="<?php echo $this->config->item('outside_base_url'); ?>favicon.ico">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo $this->config->item('outside_base_url'); ?>css/normalize.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
<link rel="stylesheet" href="<?php echo $this->config->item('outside_base_url'); ?>css/main.min.css">
<link rel="stylesheet" href="<?php echo $this->config->item('outside_base_url'); ?>css/styles.css">
<style>
.header-container nav ul li .dropdown li a {
    width: 172px;
}
</style>
</head>
<body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="<?php echo $this->config->item('outside_base_url'); ?>js/jquery.cookiebar.min.js"></script>
<script src="<?php echo base_url(); ?>main.js"></script>
<?php if($this->uri->segment(1) == 'product' && $this->uri->segment(2) == '') { ?>
	<script src="<?php echo base_url(); ?>dial.js"></script>
	<script src="<?php echo $this->config->item('outside_base_url'); ?>js/jquery.flot.min.js"></script>
    <script src="<?php echo $this->config->item('outside_base_url'); ?>js/jquery.flot.pie.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/kineticjs/5.0.6/kinetic.min.js"></script>
<?php } ?>
<?php if($this->uri->segment(1) == 'product' || $this->uri->segment(1) == 'contact') { ?>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/jquery.validate.min.js"></script>
<?php } ?>
<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<div class="language-link" style="display:none"><?php echo base_url();?></div>
<div class="main-link" style="display:none"><?php echo $this->config->item('outside_base_url'); ?></div>
<div class="header-container">
  <header class="wrapper clearfix">
    <div class="logo-container"> <a href="<?php echo base_url();?>" title="Wheelwash - Wheel cleaning solutions home page"><img src="<?php echo $this->config->item('outside_base_url'); ?>img/logo-stretch.png" alt="Wheelwash - Wheel cleaning solutions Logo" /></a><img src="<?php echo $this->config->item('outside_base_url'); ?>img/25.png" class="twofive" alt="Wheelwash - Wheel cleaning solutions completes 25 years" /> </div>
    <!--<h1 class="title">h1.title</h1>--> 
    <a class="mobile-button" href="#"></a>
    <ul class="mobile-menu">
      <li><a href="<?php echo base_url('product');?>" title="Wheelwash - Wheel cleaning solutions View all products selector">Productos</a>
        <ul>
          <li class="hide-mobile"><a href="<?php echo base_url('product');?>" title="Wheelwash - Wheel cleaning solutions View all products selector">Selector de Productos</a></li>
          <li><a href="<?php echo base_url('product/express');?>" title="Wheelwash - Wheel cleaning solutions Rhino Ecowash Express">Ecowash Express</a></li>
          <li><a href="<?php echo base_url('product/excel');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash excel">Ecowash Excel</a></li>
          <li><a href="<?php echo base_url('product/extra');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra">Ecowash Extra</a></li>
          <li><a href="<?php echo base_url('product/extraclear');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra clear">Ecowash Extra Clear</a></li>
          <li><a href="<?php echo base_url('product/extreme');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extreme">Ecowash Extreme</a></li>
          <li><a href="<?php echo base_url('product/ecoramp');?>" title="Wheelwash - Wheel cleaning solutions Rhino Ecoramp">Ecoramp</a></li>
          <li><a href="<?php echo base_url('product/ecobath');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecobath">Ecobath</a></li>
          <li><a href="<?php echo base_url('product/bespoke');?>" title="Wheelwash - Wheel cleaning solutions Rhino bespoke">Bespoke</a></li>
          <li><a href="<?php echo base_url('product/ecoclear');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecoclear">Ecoclear</a></li>
          <li><a href="http://agriwash.com/" target="_blank" title="Wheelwash - Wheel cleaning solutions Rhino Agriwash">Agriwash</a></li>
        </ul>
      </li>
      <li><a href="<?php echo base_url('services');?>" title="Wheelwash - Wheel cleaning solutions Services Information">Servicios</a></li>
      <li><a href="<?php echo base_url('about');?>" title="Wheelwash - Wheel cleaning solutions About Infromation">Acerca de</a></li>
      <li><a href="<?php echo base_url('contact');?>" title="Wheelwash - Wheel cleaning solutions International contact information">Contacto</a></li>
      <li>
        <form action="<?php echo base_url();?>pages/search/" method="post">
          <input type="text" name="q" id="query" size="40" value="" columns="2" autocomplete="off" delay="1500">
          <input type="submit" value="Search" style="display:none;">
        </form>
      </li>
      <li><a href="<?php echo $this->config->item('outside_base_url'); ?>en/" title="Wheelwash - Wheel cleaning solutions View site in English language">English</a> / <a href="<?php echo $this->config->item('outside_base_url'); ?>es/" class="active">Español</a></li>
    </ul>
    <div class="regions-container"> <a href="#" class="regions">Language</a>
      <ul class="regions-dropdown">
        <li><a href="<?php echo $this->config->item('outside_base_url'); ?>en/" title="Wheelwash - Wheel cleaning solutions View site in English language">English</a></li>
        <li><a href="<?php echo $this->config->item('outside_base_url'); ?>es/" class="active" title="Wheelwash - Wheel cleaning solutions View site in Spanish language">Español</a></li>
      </ul>
    </div>
    <nav style="width:68%;">
      <ul>
        <li class="products"><a href="<?php echo base_url('product');?>" title="Wheelwash - Wheel cleaning solutions View all products selector">Productos</a>
          <ul class="dropdown">
            <li><a href="<?php echo base_url('product');?>" title="Wheelwash - Wheel cleaning solutions View all products selector">SELECTOR DE PRODUCTO</a></li>
            <li><a href="<?php echo base_url('product/express');?>">Ecowash Express</a></li>
            <li><a href="<?php echo base_url('product/excel');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash excel">Ecowash Excel</a></li>
            <li><a href="<?php echo base_url('product/extra');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra">Ecowash Extra</a></li>
            <li><a href="<?php echo base_url('product/extraclear');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra clear">Ecowash Extra Clear</a></li>
            <li><a href="<?php echo base_url('product/extreme');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extreme">Ecowash Extreme</a></li>
            <li><a href="<?php echo base_url('product/ecoramp');?>" title="Wheelwash - Wheel cleaning solutions Rhino Ecoramp">Ecoramp</a></li>
            <li><a href="<?php echo base_url('product/ecobath');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecobath">Ecobath</a></li>
            <li><a href="<?php echo base_url('product/bespoke');?>" title="Wheelwash - Wheel cleaning solutions Rhino bespoke">Bespoke</a></li>
            <li><a href="<?php echo base_url('product/ecoclear');?>" title="Wheelwash - Wheel cleaning solutions Rhino ecoclear">Ecoclear</a></li>
            <li><a href="http://agriwash.com/" target="_blank" title="Wheelwash - Wheel cleaning solutions Rhino Agriwash">Agriwash</a></li>
          </ul>
          <div class="beside-dropdown"> </div>
        </li>
        <li><a href="<?php echo base_url('services');?>" title="Wheelwash - Wheel cleaning solutions Services Information">Servicios</a></li>
        <li><a href="<?php echo base_url('about');?>" title="Wheelwash - Wheel cleaning solutions About Infromation">Acerca de</a></li>
        <li><a href="<?php echo base_url('contact');?>" title="Wheelwash - Wheel cleaning solutions International contact information">Contacto</a></li>
        <li>
          <form action="<?php echo base_url();?>pages/search/" method="post">
            <input type="text" name="q" id="query" size="40" value="" columns="2" autocomplete="off" delay="1500">
            <input type="submit" value="Search" style="display:none;">
          </form>
        </li>
      </ul>
    </nav>
  </header>
</div>
