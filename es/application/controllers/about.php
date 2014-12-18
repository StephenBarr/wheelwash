<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class About extends CI_Controller {
	
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
		$this->load->model('slides_model');
		$data['slides'] = $this->slides_model->getall();
		$data['title'] = 'About Us';
		$data['description'] = 'Wheelwash wheel cleaning solutions - About us. Since 1990, Wheelwash has been providing energy efficient and environmentally friendly wheel cleaning systems that effectively prevent site vehicles and mobile plant spreading dirt and debris onto public highways. Our patented drive-through bath was the first of its kind 25 years ago and still remains a staple in our fleet today. Our range has since evolved to include a variety of high pressure spray wash systems with water recycling and dry ramp sets that we supply to customers globally.';
		$this->load->view('header', $data);
		$this->load->view('about', $data);
		$this->load->view('footer');	
	}
}
?>