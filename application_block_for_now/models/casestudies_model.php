<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Casestudies_model extends CI_Model {
	
	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
    public function getall() {
        $this->db->select('*');
		$this->db->from('casestudies');
		$this->db->order_by('modified_date', 'DESC');
		$query = $this->db->get();
        return $query->result();    
    }
	
	public function getone($id) {
		if($id != FALSE) {
			$query = $this->db->get_where('casestudies', array('id' => $id));
			return $query->row_array();
	  	}
	  	else {
			return FALSE;
	  	}
	}
	
	public function add($data) {
		$this->db->insert('casestudies', $data);
		$insert_id = $this->db->insert_id();
		$this->db->trans_complete();
		return  $insert_id;    
    }
	
	public function update($data, $id) {
		$this->db->where('id', $id);
		$this->db->update('casestudies', $data);   
    }
	
	public function delete($id)
	{
		$query = $this->db->get_where('casestudies', array('id' => $id));
		$newsitem = $query->row_array();
		$this->db->delete('casestudies', array('id' => $id));
		if(isset($newsitem['image_link'])) unlink('./uploads/' . $newsitem['image_link']);
		if(isset($newsitem['circle_image_1'])) unlink('./uploads/' . $newsitem['circle_image_1']);
		if(isset($newsitem['circle_image_2'])) unlink('./uploads/' . $newsitem['circle_image_2']);
		if(isset($newsitem['circle_image_3'])) unlink('./uploads/' . $newsitem['circle_image_3']);
	}
	
}
?>