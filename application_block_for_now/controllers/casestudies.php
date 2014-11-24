<?php
class Casestudies extends CI_Controller {

function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('tank_auth');
		$this->load->model('casestudies_model');
	}
	
	public function index()
	{
    	$data['casestudies'] = $this->casestudies_model->getall();
		$this->load->view('header');
		$this->load->view('casestudies', $data);
		$this->load->view('footer');	
	}
	
	public function show($id)
	{
		$this->load->model('casestudies_model');
    	$data['case'] = $this->casestudies_model->getone($id);
		$this->load->view('header');
		$this->load->view('showcase', $data);
		$this->load->view('footer');	
	}
	
	public function add()
	{
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = './uploads/';
		if ($_FILES['image_link']['error'] == 4) {
			$data = array(
				'title' => $this->input->post('title'),
				'content' => $this->input->post('content')
			);
		} else {
			$this->upload->initialize($config);
			if ($this->upload->do_upload('image_link')) {
				$upload_data = $this->upload->data();
			} else { }
			$data = array(
				'title' => $this->input->post('title'),
				'content' => $this->input->post('content'),
				'image_link' => $upload_data['file_name']
			);
		}
		
		for($i=1;$i<=3;$i++) { 
			if($_FILES['circle_image_'.$i]['error'] == 4) {	
			} else {
				$this->upload->initialize($config);
				if ($this->upload->do_upload('circle_image_'.$i)) {
					$upload_data = $this->upload->data();
					$data['circle_image_'.$i] = $upload_data['file_name'];
				}
			}
		}
		
		$insert_id = $this->casestudies_model->add($data);
		echo $insert_id;
	}
	
	public function getone($id)
	{
		$casestudies = $this->casestudies_model->getone($id);
		echo '<h3>' . $casestudies['title'] . '<span>' . substr($casestudies['modified_date'], 0, 10) . '</span></h3><div class="summary">' . substr($casestudies['content'], 0, 255) . '</div><div class="content" style="display:none;">' . $casestudies['content'] . '</div><div class="image" style="display:none;"><img src="http://renewgroupuk.com/wheelwash/uploads/' . $casestudies['image_link'] . '" /></div><div class="circle" style="display:none;"><img src="http://renewgroupuk.com/wheelwash/uploads/' . $casestudies['circle_image_1'] . '" /> <img src="http://renewgroupuk.com/wheelwash/uploads/' . $casestudies['circle_image_2'] . '" /> <img src="http://renewgroupuk.com/wheelwash/uploads/' . $casestudies['circle_image_3'] . '" /></div>';
	}
	
	public function delete($id)
	{
		$this->casestudies_model->delete($id);
	}
	
	public function update($id)
	{
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = './uploads/';
		
		if ($_FILES['image_link']['error'] == 4) {
			$data = array(
				'title' => $this->input->post('title'),
				'content' => $this->input->post('content')
			);
		} else {
			$check = $this->casestudies_model->getone($id);
			if(isset($check['image_link'])) unlink('./uploads/' . $check['image_link']);
			
			$this->upload->initialize($config);
			if ($this->upload->do_upload('image_link')) {
				$upload_data = $this->upload->data();
			}
			$data = array(
				'title' => $this->input->post('title'),
				'content' => $this->input->post('content'),
				'image_link' => $upload_data['file_name']
			);
		}
		
		for($i=1;$i<=3;$i++) { 
			if($_FILES['circle_image_'.$i]['error'] == 4) {	
			} else {
				$check = $this->casestudies_model->getone($id);
				if(isset($check['circle_image_'.$i]) && $check['circle_image_'.$i] != '') unlink('./uploads/' . $check['circle_image_'.$i]);
				
				$this->upload->initialize($config);
				if ($this->upload->do_upload('circle_image_'.$i)) {
					$upload_data = $this->upload->data();
					$data['circle_image_'.$i] = $upload_data['file_name'];
				}
			}
		}
		
		$this->casestudies_model->update($data, $id);
		echo $id;
	}
	
}
?>
