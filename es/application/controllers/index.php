<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Index extends CI_Controller {
	
	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->database();
	}
	
	public function index()
	{
		$this->load->model('casestudies_model');
		$this->load->model('news_model');
    	$data['casestudies'] = $this->casestudies_model->getall();
		$data['news'] = $this->news_model->getall();
		$this->load->view('header');
		$this->load->view('index', $data);
		$this->load->view('footer');
		
	}	
	
}
?>