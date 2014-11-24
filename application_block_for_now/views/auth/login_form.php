<?php
$login = array(
	'name'	=> 'login',
	'id'	=> 'login',
	'value' => set_value('login'),
	'maxlength'	=> 80,
	'size'	=> 30,
);
if ($login_by_username AND $login_by_email) {
	$login_label = 'Email or login';
} else if ($login_by_username) {
	$login_label = 'Login';
} else {
	$login_label = 'Email';
}
$password = array(
	'name'	=> 'password',
	'id'	=> 'password',
	'size'	=> 30,
);
$remember = array(
	'name'	=> 'remember',
	'id'	=> 'remember',
	'value'	=> 1,
	'checked'	=> set_value('remember'),
	'style' => 'margin:0;padding:0',
);
$captcha = array(
	'name'	=> 'captcha',
	'id'	=> 'captcha',
	'maxlength'	=> 8,
);
?>

<div class="main-container auth">
  <div class="main wrapper clearfix">
    <form action="http://renewgroupuk.com/wheelwash/auth/login" method="post" accept-charset="utf-8">
      <label for="login">Email or login</label>
      <br />
      <input type="text" name="login" value="" id="login" maxlength="80" size="30">
      <br />
      <label for="password">Password</label>
      <br />
      <input type="password" name="password" value="" id="password" size="30">
      <br />
      <input type="checkbox" name="remember" value="1" id="remember">
      <label for="remember">Remember me</label>
      <br />
      <a href="http://renewgroupuk.com/wheelwash/auth/forgot_password">Forgot password</a> | <a href="http://renewgroupuk.com/wheelwash/auth/register">Register</a>
      <br />
      <input type="submit" name="submit" value="Let me in" class="button">
    </form>
  </div>
</div>
