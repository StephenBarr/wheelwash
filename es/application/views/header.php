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
<title>Wheel Cleaning Solutions</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="http://wheelwash.com/favicon.ico">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="http://wheelwash.com/css/mini/normalize.min.css">
<!--<script src="http://wheelwash.com/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>-->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
<!--<link rel="stylesheet" href="http://wheelwash.com/css/main.css">-->
<link rel="stylesheet" href="http://wheelwash.com/css/mini/main.min.css">
<!--<link rel="stylesheet" href="http://wheelwash.com/css/styles.css">-->
<link rel="stylesheet" href="http://wheelwash.com/css/mini/styles.min.css">
<style>
.header-container nav ul li .dropdown li a {
    width: 172px;
}
</style>
</head>
<body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<!--<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.js"><\/script>')</script> --> 
<!--<script src="http://wheelwash.com/js/main.js"></script>-->
<script src="http://wheelwash.com/es/main.js"></script>
<?php if($this->uri->segment(1) == 'product' && $this->uri->segment(2) == '') { ?>
	<script src="http://wheelwash.com/es/dial.js"></script>
	<script src="http://wheelwash.com/js/mini/jquery.flot.min.js"></script>
    <script src="http://wheelwash.com/js/mini/jquery.flot.pie.min.js"></script>   
    <!--<script src="http://wheelwash.com/js/kinetic.min.js"></script>-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/kineticjs/5.0.6/kinetic.min.js"></script>
<?php } ?>
<?php if($this->uri->segment(1) == 'product' || $this->uri->segment(1) == 'contact') { ?>
    <!--<script src="http://wheelwash.com/js/jquery.validate.min.js"></script>-->
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/jquery.validate.min.js"></script>
<?php } ?>
<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<div class="language-link" style="display:none;"><?php echo base_url();?></div>
<div class="header-container">
  <header class="wrapper clearfix">
    <div class="logo-container"> <a href="<?php echo base_url();?>"><img src="http://wheelwash.com/img/logo-stretch.png" /></a><img src="http://wheelwash.com/img/25.png" class="twofive" /> </div>
    <!--<h1 class="title">h1.title</h1>--> 
    <a class="mobile-button" href="#"></a>
    <ul class="mobile-menu">
      <li><a href="<?php echo base_url('product');?>">Productos</a>
        <ul>
          <li class="hide-mobile"><a href="<?php echo base_url('product');?>">Selector de Productos</a></li>
          <li><a href="<?php echo base_url('product/express');?>">Ecowash Express</a></li>
          <li><a href="<?php echo base_url('product/excel');?>">Ecowash Excel</a></li>
          <li><a href="<?php echo base_url('product/extra');?>">Ecowash Extra</a></li>
          <li><a href="<?php echo base_url('product/extraclear');?>">Ecowash Extra Clear</a></li>
          <li><a href="<?php echo base_url('product/extreme');?>">Ecowash Extreme</a></li>
          <li><a href="<?php echo base_url('product/ecoramp');?>">Ecoramp</a></li>
          <li><a href="<?php echo base_url('product/ecobath');?>">Ecobath</a></li>
          <li><a href="<?php echo base_url('product/bespoke');?>">Bespoke</a></li>
          <li><a href="<?php echo base_url('product/ecoclear');?>">Ecoclear</a></li>
          <li><a href="http://agriwash.com/" target="_blank">Agriwash</a></li>
        </ul>
      </li>
      <li><a href="<?php echo base_url('services');?>">Servicios</a></li>
      <li><a href="<?php echo base_url('about');?>">Acerca de</a></li>
      <li><a href="<?php echo base_url('contact');?>">Contacto</a></li>
      <li>
        <form action="<?php echo base_url();?>search.php" method="get">
          <input type="text" name="query" id="query" size="40" value="" action="http://wheelwash.com/sphider/include/js_suggest/suggest.php" columns="2" autocomplete="off" delay="1500">
          <input type="submit" value="Search" style="display:none;">
          <input type="hidden" name="search" value="1">
        </form>
      </li>
      <li><a href="http://wheelwash.com/en/">English</a> / <a href="http://wheelwash.com/es/" class="active">Español</a></li>
    </ul>
    <div class="regions-container"> <a href="#" class="regions">Language</a>
      <ul class="regions-dropdown">
        <li><a href="http://wheelwash.com/en/">English</a></li>
        <li><a href="http://wheelwash.com/es/" class="active">Español</a></li>
      </ul>
    </div>
    <nav style="width:68%;">
      <ul>
        <li class="products"><a href="<?php echo base_url('product');?>">Productos</a>
          <ul class="dropdown">
            <li><a href="<?php echo base_url('product');?>">SELECTOR DE PRODUCTO</a></li>
            <li><a href="<?php echo base_url('product/express');?>">Ecowash Express</a></li>
            <li><a href="<?php echo base_url('product/excel');?>">Ecowash Excel</a></li>
            <li><a href="<?php echo base_url('product/extra');?>">Ecowash Extra</a></li>
            <li><a href="<?php echo base_url('product/extraclear');?>">Ecowash Extra Clear</a></li>
            <li><a href="<?php echo base_url('product/extreme');?>">Ecowash Extreme</a></li>
            <li><a href="<?php echo base_url('product/ecoramp');?>">Ecoramp</a></li>
            <li><a href="<?php echo base_url('product/ecobath');?>">Ecobath</a></li>
            <li><a href="<?php echo base_url('product/bespoke');?>">Bespoke</a></li>
            <li><a href="<?php echo base_url('product/ecoclear');?>">Ecoclear</a></li>
            <li><a href="http://agriwash.com/" target="_blank">Agriwash</a></li>
          </ul>
          <div class="beside-dropdown"> </div>
        </li>
        <li><a href="<?php echo base_url('services');?>">Servicios</a></li>
        <li><a href="<?php echo base_url('about');?>">Acerca de</a></li>
        <li><a href="<?php echo base_url('contact');?>">Contacto</a></li>
        <li>
          <form action="<?php echo base_url();?>search.php" method="get">
            <input type="text" name="query" id="query" size="40" value="" action="http://wheelwash.com/sphider/include/js_suggest/suggest.php" columns="2" autocomplete="off" delay="1500">
            <input type="submit" value="Search" style="display:none;">
            <input type="hidden" name="search" value="1">
          </form>
        </li>
      </ul>
    </nav>
  </header>
</div>
