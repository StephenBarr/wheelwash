<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Privacy extends CI_Controller {
	
	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->database();
	}
	
	public function index()
	{
		$this->load->model('news_model');
		$data['news'] = $this->news_model->getall();
		$data['title'] = 'Privacy Policy';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Privacy policy. Wheelwash respects the privacy of visitors to its website and is committed to maintaining all reasonable precautions to assure the privacy and security of this website. This Privacy Policy and Notice of Information Practices set forth Wheelwash&rsquo;s practices regarding the collection, use and disclosure of information that the user may provide through this site. Please read this entire privacy policy before using this site or submitting information to Wheelwash through this site.';
		$this->load->view('header', $data);
		$this->load->view('privacy', $data);
		$this->load->view('footer');	
	}
}
?>