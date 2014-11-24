<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Sitemap extends CI_Controller {
	
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
		$this->load->view('header');
		$this->load->view('sitemap', $data);
		$this->load->view('footer');	
	}
}
?>