<div class="main-container sitemap">
  <div class="main wrapper clearfix">
  	<h1>Sitemap</h1>
    <a href="http://wheelwash.com/es/">Home</a><br />
    <a href="http://wheelwash.com/es/product">Products</a><br />
    <a href="http://wheelwash.com/es/product/express" style="margin-left:24px;">Ecowash Express</a><br />
    <a href="http://wheelwash.com/es/product/excel" style="margin-left:24px;">Ecowash Excel</a><br />
    <a href="http://wheelwash.com/es/product/extra" style="margin-left:24px;">Ecowash Extra</a><br />
    <a href="http://wheelwash.com/es/product/extraclear" style="margin-left:24px;">Extra Clear</a><br />
    <a href="http://wheelwash.com/es/product/extreme" style="margin-left:24px;">Ecowash Extreme</a><br />
    <a href="http://wheelwash.com/es/product/ecoramp" style="margin-left:24px;">Ecoramp</a><br />
    <a href="http://wheelwash.com/es/product/ecobath" style="margin-left:24px;">Ecobath</a><br />
    <a href="http://wheelwash.com/es/product/bespoke" style="margin-left:24px;">Bespoke</a><br />
    <a href="http://wheelwash.com/es/product/ecoclear" style="margin-left:24px;">Ecoclear</a><br />
    <a href="http://wheelwash.com/es/services">Services</a><br />
    <a href="http://wheelwash.com/es/about">About</a><br />
    <a href="http://wheelwash.com/es/contact">Contact</a><br />
    <a href="http://wheelwash.com/es/privacy">Privacy</a><br />
    <a href="http://wheelwash.com/es/termsofuse">Terms of Use</a><br />
    <a href="http://wheelwash.com/es/faq">FAQs</a><br />
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="<?php echo base_url('news');?>">NEWS</a></p>
    </div><div class="news-right">
      <ul class="news-content">
        <?php $v = 0; foreach ($news as $newsitem) { ?>
        <li>
          <?php $v++; ?>
          <figure><img src="http://wheelwash.com/uploads/<?php echo $newsitem->image_link; ?>" /></figure>
          <p><a href="<?php echo base_url('news');?>/show/<?php echo $newsitem->id; ?>"><?php echo $newsitem->title; ?></a><br /><br /><?php echo substr($newsitem->content, 0, 120) . '...'; ?></p>
          <?php if($v == 5) break; ?>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</div>