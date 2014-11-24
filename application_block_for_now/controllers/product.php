<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class product extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function index()
	{
		$this->load->view('header');
		$this->load->view('product');
		$this->load->view('footer');
	}
	
	public function extreme()
    {	
		$this->load->view('header');
		$this->load->view('product/extreme');
		$this->load->view('footer');
    }
	
	public function express()
    {	
		$this->load->view('header');
		$this->load->view('product/express');
		$this->load->view('footer');
    }
	
	public function excel()
    {	
		$this->load->view('header');
		$this->load->view('product/excel');
		$this->load->view('footer');
    }
	
	public function extra()
    {
		$this->load->view('header');
		$this->load->view('product/extra');
		$this->load->view('footer');
    }
	
	public function extraclear()
    {
		$this->load->view('header');
		$this->load->view('product/extraclear');
		$this->load->view('footer');
    }
	
	public function ecoclear()
    {
		$this->load->view('header');
		$this->load->view('product/ecoclear');
		$this->load->view('footer');
    }
	
	public function ecoramp()
    {
		$this->load->view('header');
		$this->load->view('product/ecoramp');
		$this->load->view('footer');
    }
	
	public function ecobath()
    {
		$this->load->view('header');
		$this->load->view('product/ecobath');
		$this->load->view('footer');
    }
	
	public function bespoke()
    {
		$this->load->view('header');
		$this->load->view('product/bespoke');
		$this->load->view('footer');
    }
	
}
?>