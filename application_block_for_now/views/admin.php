<nav class="admin-nav">
  <div class="main wrapper clearfix">
    <ul class="left">
      <li>News</li>
      <li>Case Studies</li>
      <li>Slides</li>
    </ul>
    <ul class="right">
      <li>Logout</li>
    </ul>
  </div>
</nav>
<div class="main-container news-admin">
  <div class="main wrapper clearfix">
    <div class="control"> <a href="#">Add news entry<i class="fa fa-plus fa-lg"></i></a> <span>Images should be at least <b>870</b>px wide.</span> </div>
    <?php foreach ($news as $newsitem) { ?>
    <div class="item" id="<?php echo $newsitem->id; ?>"> <a href="#" class="delete"><i class="fa fa-times"></i></a>
      <h3><?php echo $newsitem->title; ?><span><?php echo substr($newsitem->modified_date, 0, 10); ?></span></h3>
      <div class="content"><?php echo $newsitem->content; ?></div>
      <div class="image" style="display:none;"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $newsitem->image_link; ?>" /></div>
    </div>
    <?php } ?>
  </div>
</div>
<div class="main-container casestudies-admin">
  <div class="main wrapper clearfix">
    <div class="control"> <a href="#">Add case study<i class="fa fa-plus fa-lg"></i></a> <span>Larger images should be at least <b>870</b>px wide. Circular images should be <b>square</b>.</span> </div>
    <?php foreach ($casestudies as $case) { ?>
    <div class="item" id="<?php echo $case->id; ?>"> <a href="#" class="delete"><i class="fa fa-times"></i></a>
      <h3><?php echo $case->title; ?><span><?php echo substr($case->modified_date, 0, 10); ?></span></h3>
      <div class="content"><?php echo $case->content; ?></div>
      <div class="image" style="display:none;"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case->image_link; ?>" /></div>
      <div class="circle" style="display:none;"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case->circle_image_1; ?>" /> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case->circle_image_2; ?>" /> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case->circle_image_3; ?>" /></div>
    </div>
    <?php } ?>
  </div>
</div>
<div class="main-container slides-admin">
  <div class="main wrapper clearfix">
    <div class="control"> <a href="#" class="active">Services<i class="fa fa-cogs fa-lg"></i></a> <a href="#">About<i class="fa fa-question-circle fa-lg"></i></a> <span>Images should ideally be <b>1026</b>px * <b>428</b>px.</span> </div>
    <?php foreach ($slides as $slide) { ?>
    <div class="slides-<?php echo $slide->name; ?> image-container">
      <form class="<?php echo $slide->name; ?>">
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_1; ?>" /> <input type="file" name="image_link_1" class="image_link_1" /> <i class="fa fa-external-link fa-2x"></i> </figure>
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_2; ?>" /> <input type="file" name="image_link_2" class="image_link_2" /> <i class="fa fa-external-link fa-2x"></i> </figure>
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_3; ?>" /> <input type="file" name="image_link_3" class="image_link_3" /> <i class="fa fa-external-link fa-2x"></i> </figure>
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_4; ?>" /> <input type="file" name="image_link_4" class="image_link_4" /> <i class="fa fa-external-link fa-2x"></i> </figure>
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_5; ?>" /> <input type="file" name="image_link_5" class="image_link_5" /> <i class="fa fa-external-link fa-2x"></i> </figure>
          <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $slide->image_link_6; ?>" /> <input type="file" name="image_link_6" class="image_link_6" /> <i class="fa fa-external-link fa-2x"></i> </figure>
      </form>
    </div>
    <?php } ?>
  </div>
</div>
