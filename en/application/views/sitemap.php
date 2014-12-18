<div class="main-container sitemap">
  <div class="main wrapper clearfix">
  	<h1>Sitemap</h1>
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/" title="Wheelwash - Wheel cleaning solutions home page">Home</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product" title="Wheelwash - Wheel cleaning solutions View all products selector">Products</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/express" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino Ecowash Express">Ecowash Express</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/excel" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash excel">Ecowash Excel</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/extra" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra">Ecowash Extra</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/extraclear" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extra clear">Extra Clear</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/extreme" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecowash extreme">Ecowash Extreme</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/ecoramp" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino Ecoramp">Ecoramp</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/ecobath" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecobath">Ecobath</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/bespoke" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino bespoke">Bespoke</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/product/ecoclear" style="margin-left:24px;" title="Wheelwash - Wheel cleaning solutions Rhino ecoclear">Ecoclear</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/services" title="Wheelwash - Wheel cleaning solutions Services Information">Services</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/about" title="Wheelwash - Wheel cleaning solutions About Infromation">About</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/contact" title="Wheelwash - Wheel cleaning solutions International contact information">Contact</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/privacy" title="Wheelwash - Wheel cleaning solutions - Privacy policy and other website information">Privacy</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/termsofuse" title="Wheelwash - Wheel cleaning solutions - Terms of use and important information">Terms of Use</a><br />
    <a href="<?php echo $this->config->item('outside_base_url'); ?>en/faq" title="Wheelwash - Wheel cleaning solutions - Frequently asked questions about our products">FAQs</a><br />
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="<?php echo base_url('news');?>" title="Wheelwash - Wheel cleaning solutions - Recent news articles and updates">NEWS</a></p>
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