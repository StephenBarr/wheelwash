<?php

class Page_model extends CI_Model
{
	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function search($terms, $start = 0, $results_per_page = 0)
	{
		if ($results_per_page > 0)
		{
			$limit = "LIMIT $start, $results_per_page";
		}
		else
		{
			$limit = '';
		}
		
		$terms = str_replace('%20', ' ', $terms);
		$sql = "SELECT url, title, content
				FROM pages
				WHERE title LIKE '%$terms%'
					OR title LIKE '$terms%'
					OR title LIKE '%$terms'
					OR content LIKE '%$terms'
					OR content LIKE '%$terms%'
					OR content LIKE '$terms%'
				$limit";
		$query = $this->db->query($sql);
		return $query->result();
	}

	function count_search_results($terms)
	{
		$sql = "SELECT COUNT(*) AS count
				FROM pages
				WHERE MATCH (content) AGAINST (?)";
		$query = $this->db->query($sql, array($terms));
		return $query->row()->count;
	}
}