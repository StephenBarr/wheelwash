<?php
class Slides extends CI_Controller {

function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('tank_auth');
		$this->load->model('slides_model');
	}
	
	public function updateservices($image) {
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = '../uploads/';
		
		if($_FILES[$image]['error'] == 4) {	
		} else {
			$check = $this->slides_model->getone('services');
			if(isset($check[$image]) && $check[$image] != '') { 
				if(file_exists('../uploads/' . $check[$image])) unlink('../uploads/' . $check[$image]);
			}
			
			$this->upload->initialize($config);
			if ($this->upload->do_upload($image)) {
				$upload_data = $this->upload->data();
				$data[$image] = $upload_data['file_name'];
				$this->slides_model->update($data, 'services');
				echo $upload_data['file_name'];
			}
		}
	}
	
	public function updateabout($image) {
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = '../uploads/';
		
		if($_FILES[$image]['error'] == 4) {	
		} else {
			$check = $this->slides_model->getone('about');
			if(isset($check[$image]) && $check[$image] != '') { 
				if(file_exists('../uploads/' . $check[$image])) unlink('../uploads/' . $check[$image]);
			}
			
			$this->upload->initialize($config);
			if ($this->upload->do_upload($image)) {
				$upload_data = $this->upload->data();
				$data[$image] = $upload_data['file_name'];
				$this->slides_model->update($data, 'about');
				echo $upload_data['file_name'];
			}
		}
	}
	
}
?>
