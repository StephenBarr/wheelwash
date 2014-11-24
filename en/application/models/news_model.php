<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class News_model extends CI_Model {
	
    function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	public function getall() {
        $this->db->select('*');
		$this->db->from('news');
		$this->db->order_by('modified_date', 'DESC');
		$query = $this->db->get();
        return $query->result();    
    }
	
	public function getone($id) {
		if($id != FALSE) {
			$query = $this->db->get_where('news', array('id' => $id));
			return $query->row_array();
	  	}
	  	else {
			return FALSE;
	  	}
	}
	
	public function add($data) {
		$this->db->insert('news', $data);
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		return  $insert_id;    
    }
	
	public function update($data, $id) {
		$this->db->where('id', $id);
		$this->db->update('news', $data);   
    }
	
	public function delete($id)
	{
		$query = $this->db->get_where('news', array('id' => $id));
		$newsitem = $query->row_array();
		$this->db->delete('news', array('id' => $id));
		unlink('../uploads/' . $newsitem['image_link']);
	}
	
}
?>