<?php
class Contact extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('tank_auth');
	}
	
	public function index()
	{
		$this->load->view('header');
		$this->load->view('contact');
		$this->load->view('footer');	
	}
	
	public function message() {
 
 		$list = array('agalley@wheelwash.com'/*, 'michelle@renewdesign.co.uk'*/);
		$this->load->library('email');
		$this->email->from($this->input->post('email'), $this->input->post('name'));
		$this->email->reply_to($this->input->post('email'), $this->input->post('name'));
		$this->email->to($list);
		$this->email->subject('Wheelwash Enquiry Request Form');
		$this->email->message($this->input->post('message'));
		$this->email->set_alt_message('Wheelwash Enquiry Request Form');
		  
		  if($this->email->send()) {
			 echo '<p>We have successfully received your email.<br /> We will Contact you ASAP.</p><p></p>';
		  } else {
		     echo '<p>Some problem occurred.</p>';
		  }   
	}
	
	public function download($filename) {
 
 		$list = array('agalley@wheelwash.com');
		$this->load->library('email');
		$this->email->from('hello@renewdesign.co.uk', 'Renew Design');
		$this->email->reply_to($this->input->post('email'), $this->input->post('name'));
		$this->email->to($list);
		$this->email->subject('Website Download Notification');
		$this->email->message('Name: ' . $this->input->post('name') . '<br />Email: ' . $this->input->post('email') . '<br />File Downloaded: ' . urldecode($filename));
		$this->email->set_alt_message('Website Download Notification');
		  
		if($this->email->send()) {
			echo '<a href="http://wheelwash.com/en/pdf/' . $filename . '" target="_blank" class="button download final">Download PDF file(Opens in new window)</a>';
		} else {
			echo 'Some problem occurred.';
		}   
	}
}
?>
