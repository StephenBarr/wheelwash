<div class="main-container casestudies">
  <div class="main wrapper clearfix">
    <?php $i = 0; foreach ($casestudies as $case) { ?>
    <div class="item">
      <h2><?php echo $case->title; ?></h2>
      <h4><?php echo  substr($case->modified_date, 0, 10); ?></h4>
      <figure><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case->image_link; ?>" /></figure>
      <div class="content"><p><?php echo substr(nl2br($case->content), 0, 450) . '...'; ?></p></div>
      <a href="http://renewgroupuk.com/wheelwash/casestudies/show/<?php echo $case->id; ?>">Read more</a>
      <div class="line"></div>
    </div>
    <?php } ?>
  </div>
</div>
