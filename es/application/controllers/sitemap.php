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
		$data['title'] = 'Sitemap';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Quick sitemap of the site.';
		$this->load->view('header', $data);
		$this->load->view('sitemap', $data);
		$this->load->view('footer');	
	}
}
?>