<div class="main-container privacy">
  <div class="main wrapper clearfix">
    <h1>Privacy Policy</h1>
    <p>Wheelwash respects the privacy of visitors to its website and is committed to maintaining all reasonable precautions to assure the privacy and security of this website. This Privacy Policy and Notice of Information Practices set forth Wheelwash's practices regarding the collection, use and disclosure of information that the user may provide through this site. Please read this entire privacy policy before using this site or submitting information to Wheelwash through this site. </p>
	<p>By using this site and whenever the user submits information through this site to Wheelwash, the user agrees with the terms of Wheelwash's Privacy Policy and Notice of Information Practices below. </p>
    <h1>Information Practices</h1>
    <p>Generally, the user may visit the Wheelwash website without telling any information about himself, including his email address. Wheelwash's web servers may collect the name of the domain that has been used to access the Internet and the websites that have been visited directly before and after visiting the Wheelwash website. If Wheelwash collects this information, Wheelwash aggregates it to learn measurements such as the most popular pages viewed at the Wheelwash website, the average number of visits to the website, and the average time spent at the site. </p>
	<p>In order to visit some areas of theWheelwash  website or to receive some services, Wheelwash may ask the user to register at the Wheelwash site or to otherwise provide information about himself or his company in order to better serve the user. This information may include information about the user and his company such as his name, title, company, address, telephone number, email address, interests and other similar types of information.  Wheelwash  stores this information and uses it for these general purposes: to fulfill the user's requests for products and services, to improve Wheelwash services, to contact the user, and to conduct research.</p>
    <p>Wheelwash may also make use of website "cookies" to help the user use our services more easily and to help Wheelwash to continuously improve its website and its service to the user. A "cookie" is a small data file that a website can send to the user's browser, which may then be stored on the user's hard drive to help the Wheelwash website "remember" information about the user when he returns to our website, such as the user's preferences for the Wheelwash  website or account id's. Wheelwash's cookies cannot read data off of the user's hard drive, read cookie files created by other websites or track any personal information about the user. The user may be able to set his browser to notify you when he receives a cookie. </p>
	<p>The Wheelwash  website may contain "links" to other sites, and Wheelwash cannot and is not responsible for maintaining the user's privacy once he leaves the Wheelwash site. Wheelwash attempts to only link to sites that share Wheelwash's high standards and respect for privacy.</p>
    <h1>Security</h1>
    <p>Wheelwash takes reasonable precautions to keep all information obtained from its online visitors secure against unauthorised access and use and Wheelwash will periodically review its security measures in an effort to ensure the user's privacy. Wheelwash will not, without the user's permission, give, sell or provide to others for a fee any information that the user provides to us, except as set forth herein. Wheelwash will always ask for and obtain the user's permission before sharing the user information with anyone other than Wheelwash subsidiaries and affiliates, unless Wheelwash believes in good faith that the law requires our Company to do so.</p>
    <p>If the user wishes to verify any voluntary information collected about him, or if he wish to be removed from the Wheelwash site database, he can contact Wheelwash at <a href="mailto:sales@wheelwash.com" title="Wheelwash - Wheel cleaning solutions - Email the sales team and enquire about our products">sales@wheelwash.com</a></p>
    <p>&nbsp;</p>
    <!--<p><a href="<?php echo $this->config->item('outside_base_url'); ?>en/news-and-events/subscribe">Subscribe Please subscribe for information.</a></p>-->
	<p><a href="<?php echo $this->config->item('outside_base_url'); ?>en/contact" title="Wheelwash - Wheel cleaning solutions - Email, phone or get directions to the sales team and enquire about our products">Contact Please contact us with your enquiry</a></p>
	<p><a href="<?php echo $this->config->item('outside_base_url'); ?>en/product" title="Wheelwash - Wheel cleaning solutions - Find out more about the products and download brochures and product specifications">Downloads Brochures & data sheets.</a></p>
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
          <figure><img src="<?php echo $this->config->item('outside_base_url'); ?>uploads/<?php echo $newsitem->image_link; ?>" alt="Wheelwash - Wheel cleaning solutions - Recent news articles - <?php echo $newsitem->title; ?>" /></figure>
          <p><a href="<?php echo base_url('news');?>/show/<?php echo $newsitem->id; ?>" title="Wheelwash wheel cleaning solutions - Recent news articles - <?php echo $newsitem->title; ?>"><?php echo $newsitem->title; ?></a><br /><br /><?php echo substr($newsitem->content, 0, 120) . '...'; ?></p>
          <?php if($v == 5) break; ?>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</div>