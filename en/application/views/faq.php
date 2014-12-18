<div class="main-container faq">
  <div class="main wrapper clearfix">
  	<!--<div class="middle" style="background:url(<?php echo $this->config->item('outside_base_url'); ?>img/faq.jpg) no-repeat center center;"><div class="gradient"></div></div>-->
    <h1>Frequently Asked Questions</h1>
    <h2>How do the wheel cleaning units get delivered?</h2>
	<p>Most systems are delivered to domestic locations on a crane off-load vehicle.  Systems for export can be containerised or delivered on a curtainsider/ tautliner vehicle.   In all instances, there must be sufficient space available on site, adjacent to the preferred location of the wheel wash, for a side lift off the delivery vehicle.</p>
	<h2>How do I clean the units out?</h2>
	<p>Accumulated silt from recycling tanks can be easily cleaned out by opening the valves at the base of each compartment, using a loading shovel from above or by employing a vacuum tanker.</p>
	<p>Rhino Ecowash systems have an effective, separate wash down cycle to keep the wash platform clean.  However, in the event of a build-up of silt, the internal grids can be removed for access to the base.  The Rhino Ecobath range is also supplied with removable internal grids so that silt can be removed by loading shovel or by manual shovelling.</p>
	<h2>Are the units available for hire?</h2>
	<p>Yes, the whole range of wheel cleaning products is available for hire.  Rates are calculated by duration of hire.   Contact us for more information.</p>
	<h2>How are the units powered?</h2>
	<p>The Rhino Ecoramp and Rhino Ecobath systems require no power at all.  However, systems in the Rhino Ecowash require a 415 v 3 phase supply. Please refer to the individual specification sheets for the product-specific generator sizes. Wheelwash can offer competitive rates for generator hire.</p>
	<h2>How do I provide water to the units?</h2>
	<p>For the Rhino Ecowash range, we recommend a mains water supply, where possible, via 25mm or 50mm BSP female connector.  Bowser re-fills are also possible as most of our spray wash systems are supplied with low water level indicators, which ensure the pumps are protected.</p>
	<p>After the initial bulk fill, the Rhino Ecobaths simply require a periodic top-up via bowser or hose.</p>
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="<?php echo base_url('news');?>">NEWS</a></p>
    </div>
    <div class="news-right">
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