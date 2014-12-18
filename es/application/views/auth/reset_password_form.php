<?php
$new_password = array(
	'name'	=> 'new_password',
	'id'	=> 'new_password',
	'maxlength'	=> $this->config->item('password_max_length', 'tank_auth'),
	'size'	=> 30,
);
$confirm_new_password = array(
	'name'	=> 'confirm_new_password',
	'id'	=> 'confirm_new_password',
	'maxlength'	=> $this->config->item('password_max_length', 'tank_auth'),
	'size' 	=> 30,
);
?>

<div class="main-container auth">
  <div class="main wrapper clearfix"> <?php echo form_open($this->uri->uri_string()); ?>
    <table style="width:100%">
    <tr>
    <td><?php echo form_label('New Password', $new_password['id']); ?></td>
    </tr>
      <tr>
        <td><?php echo form_password($new_password); ?></td>
        <td style="color: red;"><?php echo form_error($new_password['name']); ?><?php echo isset($errors[$new_password['name']])?$errors[$new_password['name']]:''; ?></td>
      </tr>
      <tr>
       <td><?php echo form_label('Confirm New Password', $confirm_new_password['id']); ?></td>
       </tr>
      <tr>
       
        <td><?php echo form_password($confirm_new_password); ?></td>
        <td style="color: red;"><?php echo form_error($confirm_new_password['name']); ?><?php echo isset($errors[$confirm_new_password['name']])?$errors[$confirm_new_password['name']]:''; ?></td>
      </tr>
      <tr><td><?php echo form_submit(array('name' => 'change', 'value' => 'Change Password', 'class' => 'button', 'style' => 'margin-top:36px')); ?></td></tr>
    </table>
     <?php echo form_close(); ?> </div>
</div>
