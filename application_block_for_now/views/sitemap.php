<div class="main-container sitemap">
  <div class="main wrapper clearfix">
  	<h1>Sitemap</h1>
    <a href="http://renewgroupuk.com/wheelwash/">Home</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product">Products</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/express" style="margin-left:24px;">Ecowash Express</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/excel" style="margin-left:24px;">Ecowash Excel</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/extra" style="margin-left:24px;">Ecowash Extra</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/extraclear" style="margin-left:24px;">Extra Clear</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/extreme" style="margin-left:24px;">Ecowash Extreme</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/ecoramp" style="margin-left:24px;">Ecoramp</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/ecobath" style="margin-left:24px;">Ecobath</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/bespoke" style="margin-left:24px;">Bespoke</a><br />
    <a href="http://renewgroupuk.com/wheelwash/product/ecoclear" style="margin-left:24px;">Ecoclear</a><br />
    <a href="http://renewgroupuk.com/wheelwash/services">Services</a><br />
    <a href="http://renewgroupuk.com/wheelwash/about">About</a><br />
    <a href="http://renewgroupuk.com/wheelwash/contact">Contact</a><br />
    <a href="http://renewgroupuk.com/wheelwash/privacy">Privacy</a><br />
    <a href="http://renewgroupuk.com/wheelwash/termsofuse">Terms of Use</a><br />
    <a href="http://renewgroupuk.com/wheelwash/">FAQs</a><br />
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="http://renewgroupuk.com/wheelwash/news">NEWS</a></p>
    </div><div class="news-right">
      <ul class="news-content">
        <?php $v = 0; foreach ($news as $newsitem) { ?>
        <li>
          <?php $v++; ?>
          <figure><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $newsitem->image_link; ?>" /></figure>
          <p><a href="http://renewgroupuk.com/wheelwash/news/show/<?php echo $newsitem->id; ?>"><?php echo $newsitem->title; ?></a><br /><br /><?php echo substr($newsitem->content, 0, 120) . '...'; ?></p>
          <?php if($v == 5) break; ?>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</div>