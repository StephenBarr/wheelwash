<div class="main-container showcase">
  <div class="main wrapper clearfix">
    <figure> <img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $case['image_link']; ?>" alt="Wheelwash wheel cleaning solutions - Case studies - <?php echo $case['title']; ?>" /> </figure>
    <h3><?php echo $case['title']; ?></h3>
    <h4><?php echo  substr($case['modified_date'], 0, 10); ?></h4>
    <p><?php echo nl2br($case['content']); ?></p>
    <div class="casecircle"><img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $case['circle_image_1']; ?>"  alt="Wheelwash wheel cleaning solutions - Case studies - <?php echo $case['title']; ?>"/></div>
    <div class="casecircle"><img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $case['circle_image_2']; ?>" alt="Wheelwash wheel cleaning solutions - Case studies - <?php echo $case['title']; ?>" /></div>
    <div class="casecircle"><img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $case['circle_image_3']; ?>" alt="Wheelwash wheel cleaning solutions - Case studies - <?php echo $case['title']; ?>" /></div>
	<center><a href="<?php echo base_url('casestudies');?>" class="button" title="Wheelwash wheel cleaning solutions - Case studies">View all Case Studies</a></center>
  </div>
</div>
