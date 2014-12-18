<div class="main-container sitemap">
  <div class="main wrapper clearfix">
  	<h1>Sitemap</h1>
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/" title="Wheelwash - Wheel cleaning solutions home page">Home</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product" title="Wheelwash - Wheel cleaning solutions View all products selector">Products</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/express" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino Ecowash Express">Ecowash Express</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/excel" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash excel">Ecowash Excel</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/extra" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra">Ecowash Extra</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/extraclear" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra clear">Extra Clear</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/extreme" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extreme">Ecowash Extreme</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/ecoramp" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino Ecoramp">Ecoramp</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/ecobath" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecobath">Ecobath</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/bespoke" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino bespoke">Bespoke</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/product/ecoclear" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecoclear">Ecoclear</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/services" title="Wheelwash - Wheel cleaning solutions Services Information">Services</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/about" title="Wheelwash - Wheel cleaning solutions About Infromation">About</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/contact" title="Wheelwash - Wheel cleaning solutions International contact information">Contact</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/privacy" title="Wheelwash - Wheel cleaning solutions - Privacy policy and other website information">Privacy</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/termsofuse" title="Wheelwash - Wheel cleaning solutions - Terms of use and important information">Terms of Use</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>es/faq" title="Wheelwash - Wheel cleaning solutions - Frequently asked questions about our products">FAQs</a><br />
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="<?php echo base_url('news');?>" title="Wheelwash - Wheel cleaning solutions - Recent news articles and updates">NOTICIAS</a></p>
    </div><div class="news-right">
      <ul class="news-content">
        <?php $v = 0; foreach ($news as $newsitem) { ?>
        <li>
          <?php $v++; ?>
          <figure><img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $newsitem->image_link; ?>" alt="Wheelwash wheel cleaning solutions - Recent news articles" /></figure>
          <p><a href="<?php echo base_url('news');?>/show/<?php echo $newsitem->id; ?>" title="Wheelwash wheel cleaning solutions - Recent news articles - <?php echo $newsitem->title; ?>"><?php echo $newsitem->title; ?></a><br /><br /><?php echo substr($newsitem->content, 0, 120) . '...'; ?></p>
          <?php if($v == 5) break; ?>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</div>