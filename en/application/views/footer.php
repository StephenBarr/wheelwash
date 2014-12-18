<div class="footer-container">
  <footer class="wrapper">
    <article>
      <section>
        <h4>Contact</h4>
        <p>T: +44 (0)1270 214 886</p>
        <p>E: <a href="mailto:sales@wheelwash.com" title="Wheelwash - Wheel cleaning solutions - Email the sales team and enquire about our products">sales@wheelwash.com</a></p>
      </section>
    </article>
    <article>
      <section>
        <h4>Help & Support</h4>
        <p><a href="<?php echo base_url();?>" title="Wheelwash - Wheel cleaning solutions home page">Home</a></p>
        <p><a href="<?php echo base_url('casestudies');?>" title="Wheelwash - Wheel cleaning solutions - Past case studies and applications">Case Studies</a></p>
        <p><a href="<?php echo base_url('news');?>" title="Wheelwash - Wheel cleaning solutions - Recent news articles and updates">News</a></p>
        <p><a href="<?php echo base_url('privacy');?>" title="Wheelwash - Wheel cleaning solutions - Privacy policy and other website information">Privacy Policy</a></p>
        <p><a href="<?php echo base_url('termsofuse');?>" title="Wheelwash - Wheel cleaning solutions - Terms of use and important information">Terms of Use</a></p>
        <p><a href="<?php echo base_url('sitemap');?>" title="Wheelwash - Wheel cleaning solutions - Sitemap and navigations links">Site Map</a></p>
        <p><a href="<?php echo base_url('contact');?>" title="Wheelwash - Wheel cleaning solutions - International contact information including addressesm emails and phone numbers">Contact Us</a></p>
        <p><a href="<?php echo base_url('faq');?>" title="Wheelwash - Wheel cleaning solutions - Frequently asked questions about our products">FAQs</a></p>
      </section>
    </article>
    <!--<article>
      <section>
        <p style="float:right;"><img src="<?php echo $this->config->item('outside_base_url'); ?>img/social.png" usemap="#socialmap" /></p>
        <map name="socialmap">
          <area shape="rect" coords="0,0,46,82" href="#" alt="Wheelwash on Facebook">
          <area shape="rect" coords="46,0,93,82" href="#" alt="Wheelwash on LinkedIn">
          <area shape="rect" coords="93,0,140,82" href="#" alt="Wheelwash on Twitter">
        </map>
        <p style="float:right;">
          <input class="footer-mail" type="email" value="example@mail.com" />
          <input class="footer-mail-submit" type="submit" value="Subscribe" />
        </p>
      </section>
    </article>-->
  </footer>
</div>
<?php if($this->uri->segment(1) == 'admin') { ?>
    <script src="<?php echo $this->config->item('outside_base_url'); ?>js/admin.js"></script>
    <script src="<?php echo $this->config->item('outside_base_url'); ?>js/jquery.autosize.min.js"></script>
    <link rel="stylesheet" href="<?php echo $this->config->item('outside_base_url'); ?>css/admin.css">
<?php } ?>
<?php if($this->uri->segment(1) == 'auth') { ?>
    <link rel="stylesheet" href="<?php echo $this->config->item('outside_base_url'); ?>css/admin.css">
<?php } ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-17885061-1', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
</script>
</body>
</html>