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
		$data['title'] = 'Home';
		$data['description'] = 'Wheelwash wheel cleaning solutions provide advanced, effective products to any industry in any country. Choose from high pressure spray wash systems with water recycling, drive through baths or dry ramp sets, available to rent or buy or manufature bespoke to suit custom requirements.';
		$this->load->view('header', $data);
		$this->load->view('index', $data);
		$this->load->view('footer');
		
	}	
	
}
?>