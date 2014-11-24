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
<title>Wheelwash | Cleaning Solutions</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="http://renewgroupuk.com/wheelwash/favicon.ico">
<?php if($this->uri->segment(1) == 'admin' || $this->uri->segment(1) == 'product') { ?>
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<?php } ?>
<link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/mini/normalize.min.css">
<script src="http://renewgroupuk.com/wheelwash/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
<!--<link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/main.css">-->
<link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/mini/main.min.css">
<!--<link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/styles.css">-->
<link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/mini/styles.min.css">
</head>
<body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<!--<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.js"><\/script>')</script> --> 
<!--<script src="http://renewgroupuk.com/wheelwash/js/main.js"></script>-->
<script src="http://renewgroupuk.com/wheelwash/js/mini/main.min.js"></script>
<?php if($this->uri->segment(1) == 'product' && $this->uri->segment(2) == '') { ?>
	<!--<script src="http://renewgroupuk.com/wheelwash/js/dial.js"></script>-->
	<script src="http://renewgroupuk.com/wheelwash/js/mini/dial.min.js"></script>
	<script src="http://renewgroupuk.com/wheelwash/js/mini/jquery.flot.min.js"></script>
    <script src="http://renewgroupuk.com/wheelwash/js/mini/jquery.flot.pie.min.js"></script>
    
    <script src="http://renewgroupuk.com/wheelwash/js/kinetic.min.js"></script>
<?php } ?>
<?php if($this->uri->segment(1) == 'product' || $this->uri->segment(1) == 'contact') { ?>
    <script src="http://renewgroupuk.com/wheelwash/js/jquery.validate.min.js"></script>
<?php } ?>
<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<div class="header-container">
  <header class="wrapper clearfix">
    <div class="logo-container"> <a href="<?php echo base_url();?>"><img src="http://renewgroupuk.com/wheelwash/img/logo-stretch.png" /></a><img src="http://renewgroupuk.com/wheelwash/img/25.png" class="twofive" /> </div>
    <!--<h1 class="title">h1.title</h1>--> 
    <a class="mobile-button" href="#"></a>
    <ul class="mobile-menu">
      <li><a href="<?php echo base_url('product');?>">Products</a>
        <ul>
          <li><a href="<?php echo base_url('product');?>">Product Selector</a></li>
          <li><a href="<?php echo base_url('product/express');?>">Ecowash Express</a></li>
          <li><a href="<?php echo base_url('product/excel');?>">Ecowash Excel</a></li>
          <li><a href="<?php echo base_url('product/extra');?>">Ecowash Extra</a></li>
          <li><a href="<?php echo base_url('product/extraclear');?>">Ecowash Extra Clear</a></li>
          <li><a href="<?php echo base_url('product/extreme');?>">Ecowash Extreme</a></li>
          <li><a href="<?php echo base_url('product/ecoramp');?>">Ecoramp</a></li>
          <li><a href="<?php echo base_url('product/ecobath');?>">Ecobath</a></li>
          <li><a href="<?php echo base_url('product/bespoke');?>">Bespoke</a></li>
          <li><a href="<?php echo base_url('product/ecoclear');?>">Ecoclear</a></li>
        </ul>
      </li>
      <li><a href="<?php echo base_url('services');?>">Services</a></li>
      <li><a href="<?php echo base_url('about');?>">About</a></li>
      <li><a href="<?php echo base_url('contact');?>">Contact</a></li>
      <li>
        <form action="http://renewgroupuk.com/wheelwash/search.php" method="get">
          <input type="text" name="query" id="query" size="40" value="" action="http://renewgroupuk.com/wheelwash/sphider/include/js_suggest/suggest.php" columns="2" autocomplete="off" delay="1500">
          <input type="submit" value="Search" style="display:none;">
          <input type="hidden" name="search" value="1">
        </form>
      </li>
    </ul>
    <div class="regions-container"> <a href="#" class="regions">Regions</a>
      <ul class="regions-dropdown">
        <li><a href="#">UK / Northern Ireland</a></li>
        <li><a href="#">USA / Canada</a></li>
        <li><a href="#">Australia / New Zealand</a></li>
        <li><a href="#">Français</a></li>
        <li><a href="#">España</a></li>
        <li><a href="#">Deutsch</a></li>
      </ul>
    </div>
    <nav>
      <ul>
        <li class="products"><a href="<?php echo base_url('product');?>">Products</a>
          <ul class="dropdown">
            <li><a href="<?php echo base_url('product');?>">Product Selector</a></li>
            <li><a href="<?php echo base_url('product/express');?>">Ecowash Express</a></li>
            <li><a href="<?php echo base_url('product/excel');?>">Ecowash Excel</a></li>
            <li><a href="<?php echo base_url('product/extra');?>">Ecowash Extra</a></li>
            <li><a href="<?php echo base_url('product/extraclear');?>">Ecowash Extra Clear</a></li>
            <li><a href="<?php echo base_url('product/extreme');?>">Ecowash Extreme</a></li>
            <li><a href="<?php echo base_url('product/ecoramp');?>">Ecoramp</a></li>
            <li><a href="<?php echo base_url('product/ecobath');?>">Ecobath</a></li>
            <li><a href="<?php echo base_url('product/bespoke');?>">Bespoke</a></li>
            <li><a href="<?php echo base_url('product/ecoclear');?>">Ecoclear</a></li>
          </ul>
          <div class="beside-dropdown"> </div>
        </li>
        <li><a href="<?php echo base_url('services');?>">Services</a></li>
        <li><a href="<?php echo base_url('about');?>">About</a></li>
        <li><a href="<?php echo base_url('contact');?>">Contact</a></li>
        <li>
          <form action="http://renewgroupuk.com/wheelwash/search.php" method="get">
            <input type="text" name="query" id="query" size="40" value="" action="http://renewgroupuk.com/wheelwash/sphider/include/js_suggest/suggest.php" columns="2" autocomplete="off" delay="1500">
            <input type="submit" value="Search" style="display:none;">
            <input type="hidden" name="search" value="1">
          </form>
        </li>
      </ul>
    </nav>
  </header>
</div>
