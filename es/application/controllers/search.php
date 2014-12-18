<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Search extends CI_Controller {
	
	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function index($search_terms = '', $start = 0)
	{
		$this->load->view('header');
		$this->load->view('search');
		$this->load->view('footer');	
	}
}
?>