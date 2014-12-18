<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {
	function __construct()
	{
		parent::__construct();
		
		$this->load->helper('url');
		$this->load->library('tank_auth');
		$this->load->library('session');
		if (!$this->tank_auth->is_logged_in()) {
            $this->session->set_userdata('redirect', $this->uri->uri_string());
            redirect('auth/login');
        }
		$this->load->database();
	}

	function index()
	{
		if (!$this->tank_auth->is_logged_in()) {
			redirect('/auth/login/');
		} else {
			$this->load->model('news_model');
    		$data['news'] = $this->news_model->getall();
			$this->load->model('casestudies_model');
    		$data['casestudies'] = $this->casestudies_model->getall();
			$this->load->model('slides_model');
    		$data['slides'] = $this->slides_model->getall();
			
			$data['user_id'] = $this->tank_auth->get_user_id();
			$data['username'] = $this->tank_auth->get_username();
			
			$data['title'] = 'Adminstration';
			$data['description'] = '';
			$this->load->view('header', $data);
			$this->load->view('admin', $data);
			$this->load->view('footer');
		}	
	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
