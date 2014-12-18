<?php
if ($use_username) {
	$username = array(
		'name'	=> 'username',
		'id'	=> 'username',
		'value' => set_value('username'),
		'maxlength'	=> $this->config->item('username_max_length', 'tank_auth'),
		'size'	=> 30,
	);
}
$email = array(
	'name'	=> 'email',
	'id'	=> 'email',
	'value'	=> set_value('email'),
	'maxlength'	=> 80,
	'size'	=> 30,
);
$password = array(
	'name'	=> 'password',
	'id'	=> 'password',
	'value' => set_value('password'),
	'maxlength'	=> $this->config->item('password_max_length', 'tank_auth'),
	'size'	=> 30,
);
$confirm_password = array(
	'name'	=> 'confirm_password',
	'id'	=> 'confirm_password',
	'value' => set_value('confirm_password'),
	'maxlength'	=> $this->config->item('password_max_length', 'tank_auth'),
	'size'	=> 30,
);
?>

<div class="main-container auth">
  <div class="main wrapper clearfix">
    <form action="<?php echo base_url();?>auth/register" method="post" accept-charset="utf-8">
      <label for="username">Username</label>
      <input type="text" name="username" value="" id="username" maxlength="20" size="30">
      <?php echo form_error($username['name']); ?><?php echo isset($errors[$username['name']])?$errors[$username['name']]:''; echo '<br />'; ?>
      <label for="email">Email Address</label>
      <input type="text" name="email" value="" id="email" maxlength="80" size="30">
      <?php echo form_error($email['name']); ?><?php echo isset($errors[$email['name']])?$errors[$email['name']]:''; echo '<br />'; ?>
      <label for="password">Password</label>
      <input type="password" name="password" value="" id="password" maxlength="20" size="30">
      <?php echo form_error($password['name']); echo '<br />'; ?>
      <label for="confirm_password">Confirm Password</label>
      <input type="password" name="confirm_password" value="" id="confirm_password" maxlength="20" size="30" style="margin-bottom:30px;">
      <?php echo form_error($confirm_password['name']); echo '<br />'; ?>
      <a href="<?php echo base_url();?>admin" style="width: 100%;display:block;margin-bottom:6px">Back</a>
      <input type="submit" name="register" value="Register" class="button">
    </form>
  </div>
</div>
