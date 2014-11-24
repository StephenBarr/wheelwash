<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Search_model extends CI_Model {
	
    function __construct()
	{
		parent::__construct();
	}
	
	function do_search($terms)
	{
		$terms_array = explode(' ', $terms);
 
		$this->db->like('text', $terms);
		foreach($terms_array as $key)
		{
			$this->db->or_like('text', $key);
		}
		$this->db->select('text,name');
		$this->db->from('pages');
		$search = $this->db->get();
		return $search;
	} 
	
}
?>