<div class="main-container search">
  <div class="main wrapper clearfix">
<?php $this->load->helper(array('form', 'search')); ?>

<?php echo form_open(base_url() . 'pages/search/'); ?>
<?php echo form_input(array('name' => 'q', 'id' => 'search-box', 'value' => str_replace('%20', ' ', $search_terms))); ?>
<?php echo form_submit(array('name' => 'search', 'class' => 'button', 'value' => 'Search')); ?>
<?php echo form_close(); ?>


<?php if ( ! is_null($results)): ?>
	<?php if (count($results)): ?>
		
		<p>Showing search results for '<?php echo $search_terms; ?>' <?php //echo $first_result; ?><?php //echo $last_result; ?><?php //echo $total_results; ?>:</p>
		
		<ul>
		<?php foreach ($results as $result): ?>
			<li><a href="<?php echo $result->url; ?>"><?php echo search_highlight($result->title, $search_terms); ?></a><br /><?php echo search_extract($result->content, $search_terms); ?></li>
		<?php endforeach ?>
		</ul>
		
		<?php echo $this->pagination->create_links(); ?>
		
	<?php else: ?>
		<p><em>There are no results for your query.</em></p>
	<?php endif ?>
<?php endif ?>

<?php if (isset($search_time)): ?>
	<p>Search time: <?php echo $search_time; ?></p>
<?php endif ?>

  </div>
</div>