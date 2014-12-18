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
		$data['title'] = 'Services';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Services we provide. We take a customer-focused approach to business, offering a range of services that cover the whole life cycle of your wheel washing system regardless of whether you choose to rent or buy. We specialize in in-house design incorporating time and cost saving features into our standard equipment with a dedicated point of contact and flexible maintenance contracts';
		$this->load->view('header', $data);
		$this->load->view('services', $data);
		$this->load->view('footer');
	}
}
?>