<div class="main-container faq">
  <div class="main wrapper clearfix">
  	<h1>Terms of Use</h1>
    <p>Wheelwash offers this website ("Wheelwash") and its content for general information. The user must read these terms of use relating to the use of the Wheelwash website carefully. By using the Wheelwash website, the user agrees to these terms and conditions. If the user does not agree to these terms and Conditions, he should not use theWheelwash website.Wheelwash reserves the right to revise these terms and Conditions in full or in part, at any time, without notice, by updating this posting. The user is bound by any revisions and should visit this page regularly to review the current terms and conditions that apply. If the user violates any of these terms, his permission to use the materials (as defined below) will automatically terminate and he must destroy any copies he has made of the materials, immediately.</p>
    <h1>Use of Materials and Intellectual Property Rights</h1>
    <p>The full contents of this website is subject to copyright protection. The user may not copy any contents of the Wheelwash website other than for non-commercial individual reference retaining all copyright or any other proprietary notice, and thereafter the contents may not be recopied, reproduced or redistributed. The user may not copy, display, download, distribute, modify, reproduce, republish or retransmit any information, text or documents contained in this website or any portion thereof in any electronic medium or in hard copy, or create any derivative work based on such images, text or documents, without the express written consent of Wheelwash, except as provided above. If any of these terms are breeched by the user, his authorization to use this site automatically terminates. The user must then immediately destroy any downloaded or printed materials. </p>
    <p>Unless stated otherwise, all product names whether appearing in large print or with the trademark symbol or not, are trademarks of Wheelwash, its affiliates, related companies or its licensors or joint venture partners. The use or misuse of these trademarks or any other materials, except as permitted herein, is expressly prohibited and may be in violation of a number of laws including (but not limited to) copyright law and trademark law.</p>
    <h1>Disclaimer</h1>
    <p>This site and the information contained within it are provided on an "as is" basis, with no warranties of any kind, expressed or implied, including, but not limited to any warranties of title or accuracy or any implied warranties of merchantability or fitness for a particular purpose. The use of this site and the use of the information in the site is at the own risk of the user. </p>
    <p>The content of this site is provided for the user's general information only and does not constitute an offer to sell or a solicitation of an offer to buy products. The content of this site may include technical inaccuracies and/or typographical errors. Wheelwash shall not be responsible for the use of any information presented herein. The user of the site must make his own determination as to the suitability and completeness of the information he chooses to use, including but not limited to the protection of the environment and health and safety purposes. Wheelwash by providing this information neither can nor intends to control the method or manner by which Wheelwash products are used. Any product, process or technology described in the Site may be the subject of intellectual property rights reserved by Wheelwash or others and are not licensed hereunder. Wheelwash makes no representation or warranties, express or implied, that any use of information contained on the Site will not violate any such intellectual property rights.</p>
    <p>Wheelwash assumes no obligation to update or continue posting information contained on the Site and reserves the right to make changes and corrections to the Site content or product availability at any time, without notice. Wheelwash does not guarantee that access to this Site will not be interrupted, that this Site will be free of viruses or that this Site cannot be tampered with by third parties.</p>
    <p>The availability of products and services on this Site may change without notice at any time in Wheelwash's sole discretion.</p>
    <h1>Limitation of Liability</h1>
    <p>In no event will Wheelwash or its subsidiaries, affiliates, licensors or suppliers be liable for any damages whatsoever arising out of or related to this website, any website operated by a third party or any information contained in this website or any other website, including, but not limited to direct, indirect, incidental, special, consequential or punitive damages, including but not limitation lost data, lost revenue, or lost profits, under any theory, whether under a contract, tort (including negligence) or any other theory of liability, even if Wheelwash is aware of the possibility of such damages.</p>
    <h1>Links to third parties' Websites</h1>
    <p>Any links on this Site to third-party websites are provided as a courtesy only. By providing these links, Wheelwash is not endorsing, adopting or agreeing with any of the content of the linked sites or the products or services of that third party. Wheelwash does not review or control the content of third party sites and that content is not part of theWheelwash  website. Wheelwash expressly disclaims any responsibility for the content of any third party sites linked to the Wheelwash website or the products or services of that third party. If the user of the Wheelwash site decides to access any of the third-party websites linked to the Wheelwash website, the user does this entirely at his own risk.</p>
    <h1>User Information</h1>
    <p>Any personally identifiable information in electronic communications to this website is governed by Wheelwash's Privacy Policy. Wheelwash shall be free to use or copy all other information in any such communications, including any ideas, inventions, concepts, techniques or know-how disclosed therein, for any purposes, including disclosure to third parties and/or developing, manufacturing and/or marketing products or services.</p>
    <h1>Enforceability</h1>
    <p>If any provision of these terms of use and restrictions shall be declared void or unenforceable by any court or administrative body of competent jurisdiction, the validity of the remaining provisions of the terms of use and restrictions shall not be affected.</p>
  </div>
</div>
<div class="main-container news">
  <div class="main wrapper clearfix">
    <div class="news-left">
      <p><a href="<?php echo base_url('news');?>">NEWS</a></p>
    </div><div class="news-right">
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