<?php
$login = array(
	'name'	=> 'login',
	'id'	=> 'login',
	'value' => set_value('login'),
	'maxlength'	=> 80,
	'size'	=> 30,
);
if ($this->config->item('use_username', 'tank_auth')) {
	$login_label = 'Email or login';
} else {
	$login_label = 'Email';
}
?>

<div class="main-container auth">
  <div class="main wrapper clearfix">
    <form action="http://renewgroupuk.com/wheelwash/auth/forgot_password" method="post" accept-charset="utf-8">
      <label for="login">Email or login</label>
      <input type="text" name="login" value="" id="login" maxlength="80" size="30" style="margin-bottom:30px;">
      <a href="http://renewgroupuk.com/wheelwash/admin" style="width: 100%;display:block;margin-bottom:6px">Back</a>
      <input type="submit" name="reset" value="Get a new password" class="button">
    </form>
  </div>
</div>
