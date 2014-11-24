<div class="main-container shownews">
  <div class="main wrapper clearfix">
    <figure> <img src="http://wheelwash.com/uploads/<?php echo $news['image_link']; ?>" /> </figure>
    <h3><?php echo $news['title']; ?></h3>
    <h4><?php echo  substr($news['modified_date'], 0, 10); ?></h4>
    <p><?php echo nl2br($news['content']); ?></p>
    <center><a href="<?php echo base_url('news');?>" class="button">View all News</a></center>
  </div>
</div>
