<div class="footer-container">
  <footer class="wrapper">
    <article>
      <section>
        <h4>Contact</h4>
        <p>T: +44 (0)1270 214 886</p>
        <p>E: <a href="mailto:sales@wheelwash.com">sales@wheelwash.com</a></p>
      </section>
    </article>
    <article>
      <section>
        <h4>Help & Support</h4>
        <p><a href="<?php echo base_url();?>">Home</a></p>
        <p><a href="<?php echo base_url('casestudies');?>">Case Studies</a></p>
        <p><a href="<?php echo base_url('news');?>">News</a></p>
        <p><a href="<?php echo base_url('privacy');?>">Privacy Policy</a></p>
        <p><a href="<?php echo base_url('termsofuse');?>">Terms of Use</a></p>
        <p><a href="<?php echo base_url('sitemap');?>">Site Map</a></p>
        <p><a href="<?php echo base_url('contact');?>">Contact Us</a></p>
        <p><a href="<?php echo base_url('faq');?>">FAQs</a></p>
      </section>
    </article>
    <!--<article>
      <section>
        <p style="float:right;"><img src="http://wheelwash.com/img/social.png" usemap="#socialmap" /></p>
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
    <script src="http://wheelwash.com/js/admin.js"></script>
    <script src="http://wheelwash.com/js/jquery.autosize.min.js"></script>
    <link rel="stylesheet" href="http://wheelwash.com/css/admin.css">
<?php } ?>
<?php if($this->uri->segment(1) == 'auth') { ?>
    <link rel="stylesheet" href="http://wheelwash.com/css/admin.css">
<?php } ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-17885061-1', 'auto');
  ga('send', 'pageview');
</script>
</body>
</html>