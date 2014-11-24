<div class="main-container showcase">
  <div class="main wrapper clearfix">
    <figure> <img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case['image_link']; ?>" /> </figure>
    <h3><?php echo $case['title']; ?></h3>
    <h4><?php echo  substr($case['modified_date'], 0, 10); ?></h4>
    <p><?php echo nl2br($case['content']); ?></p>
    <div class="casecircle"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case['circle_image_1']; ?>" /></div>
    <div class="casecircle"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case['circle_image_2']; ?>" /></div>
    <div class="casecircle"><img src="http://renewgroupuk.com/wheelwash/uploads/<?php echo $case['circle_image_3']; ?>" /></div>
	<center><a href="http://renewgroupuk.com/wheelwash/casestudies" class="button">View all Case Studies</a></center>
  </div>
</div>
