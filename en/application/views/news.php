<div class="main-container newsall">
  <div class="main wrapper clearfix">
	<?php foreach ($news as $newsitem) { ?>
      <div class="item">
        <h2><?php echo $newsitem->title; ?></h2>
        <h4><?php echo substr($newsitem->modified_date, 0, 10); ?></h4>
        <figure><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $newsitem->image_link; ?>" /></figure>
        <div class="content"><p><?php echo substr(nl2br($newsitem->content), 0, 480) . '...'; ?></p></div>
        <a href="<?php echo base_url('news');?>/show/<?php echo $newsitem->id; ?>">Read more</a>
        <div class="line"></div>
      </div>
    <?php } ?>
  </div>
</div>