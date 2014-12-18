<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Faq extends CI_Controller {
	
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
		$data['title'] = 'Frequently Asked Questions';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Frequently asked questions. How do the wheel cleaning units get delivered? How do I clean the units out? Are the units available for hire? How are the units powered? How do I provide water to the units?';
		$this->load->view('header', $data);
		$this->load->view('faq', $data);
		$this->load->view('footer');	
	}
}
?>