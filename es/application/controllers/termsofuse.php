<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Termsofuse extends CI_Controller {
	
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
		$data['title'] = 'Terms of Use';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Terms of use.Wheelwash offers this website ("Wheelwash") and its content for general information. The user must read these terms of use relating to the use of the Wheelwash website carefully. By using the Wheelwash website, the user agrees to these terms and conditions. If the user does not agree to these terms and Conditions, he should not use theWheelwash website.Wheelwash reserves the right to revise these terms and Conditions in full or in part, at any time, without notice, by updating this posting. The user is bound by any revisions and should visit this page regularly to review the current terms and conditions that apply. If the user violates any of these terms, his permission to use the materials (as defined below) will automatically terminate and he must destroy any copies he has made of the materials, immediately.';
		$this->load->view('header', $data);
		$this->load->view('terms', $data);
		$this->load->view('footer');	
	}
}
?>