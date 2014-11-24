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
        <p><a href="http://renewgroupuk.com/wheelwash/">Home</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/casestudies">Case Studies</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/news">News</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/privacy">Privacy Policy</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/termsofuse">Terms of Use</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/sitemap">Site Map</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/contact">Contact Us</a></p>
        <p><a href="http://renewgroupuk.com/wheelwash/faq">FAQs</a></p>
      </section>
    </article>
    <!--<article>
      <section>
        <p style="float:right;"><img src="http://renewgroupuk.com/wheelwash/img/social.png" usemap="#socialmap" /></p>
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
    <script src="http://renewgroupuk.com/wheelwash/js/admin.js"></script>
    <script src="http://renewgroupuk.com/wheelwash/js/jquery.autosize.min.js"></script>
    <link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/admin.css">
<?php } ?>
<?php if($this->uri->segment(1) == 'auth') { ?>
    <link rel="stylesheet" href="http://renewgroupuk.com/wheelwash/css/admin.css">
<?php } ?>
<script>
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	e.src='//www.google-analytics.com/analytics.js';
	r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	ga('create','UA-XXXXX-X');ga('send','pageview');
</script>
</body>
</html>