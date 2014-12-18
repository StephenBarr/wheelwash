<?php

class Pages extends CI_Controller {

	function search($search_terms = '', $start = 0)
	{
		if ($this->input->post('q'))
		{
			redirect('/pages/search/' . $this->input->post('q'));
		}
		
		if ($search_terms)
		{
			$results_per_page = $this->config->item('results_per_page');
			$this->benchmark->mark('search_start');
			$this->load->model('page_model');
			$results = $this->page_model->search($search_terms, $start, $results_per_page);
			$total_results = $this->page_model->count_search_results($search_terms);
			$this->benchmark->mark('search_end');
			$this->_setup_pagination('/pages/search/' . $search_terms . '/', $total_results, $results_per_page);
			
			$first_result = $start + 1;
			$last_result = min($start + $results_per_page, $total_results);
		}
		
		$data['title'] = 'Search';
		$data['description'] = 'Wheelwash Site Search';
		$this->load->view('header', $data);
		$this->load->view('search_results', array(
			'search_terms' => $search_terms,
			'first_result' => @$first_result,
			'last_result' => @$last_result,
			'total_results' => @$total_results,
			'results' => @$results
		));
		$this->load->view('footer');	
	}
	
	function _setup_pagination($url, $total_results, $results_per_page)
	{
		$this->load->library('pagination');
		$uri_segment = count(explode('/', $url));
		$this->pagination->initialize(array(
			'base_url' => site_url($url),
			'uri_segment' => 4,
			'total_rows' => $total_results,
			'per_page' => $results_per_page
		));
	}
}