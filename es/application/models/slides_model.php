<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Slides_model extends CI_Model {
	
	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
    public function getall() {
        $this->db->select('*');
		$this->db->from('slides');
		$query = $this->db->get();
        return $query->result();    
    }
	
	public function getone($name) {
		if($name != FALSE) {
			$query = $this->db->get_where('slides', array('name' => $name));
			return $query->row_array();
	  	}
	  	else {
			return FALSE;
	  	}
	}
	
	public function update($data, $name) {
		$this->db->where('name', $name);
		$this->db->update('slides', $data);   
    }
	
}
?>