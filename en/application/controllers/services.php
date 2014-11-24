<?php
class Services extends CI_Controller {

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
		$this->load->view('header');
		$this->load->view('services', $data);
		$this->load->view('footer');
	}
}
?>