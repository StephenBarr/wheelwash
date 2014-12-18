<?php
class News extends CI_Controller {

function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('tank_auth');
		$this->load->model('news_model');
	}
	
	public function index()
	{
    	$data['news'] = $this->news_model->getall();
		$data['title'] = 'News';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Latest news and updates. ' . $data['news'][0]->title . '. ' . $data['news'][1]->title . '. ' . $data['news'][2]->title . '. ' . $data['news'][3]->title;
		$this->load->view('header', $data);
		$this->load->view('news', $data);
		$this->load->view('footer');	
	}
	
	public function show($id)
	{
    	$data['news'] = $this->news_model->getone($id);
		$data['title'] = 'News';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Latest news and updates. ' . $data['news']['title'] . ' - ' . $data['news']['content'];
		$this->load->view('header', $data);
		$this->load->view('shownews', $data);
		$this->load->view('footer');	
	}
	
	public function add()
	{
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = '../uploads/';
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
		
		$insert_id = $this->news_model->add($data);
		echo $insert_id;
	}
	
	public function getone($id)
	{
		$news = $this->news_model->getone($id);
		echo '<h3>' . $news['title'] . '<span>' . substr($news['modified_date'], 0, 10) . '</span></h3><div class="summary">' . substr($news['content'], 0, 255) . '</div><div class="content" style="display:none;">' . $news['content'] . '</div><div class="image" style="display:none;"><img src="' . $this->config->item('outside_base_url') . 'uploads/' . $news['image_link'] . '" /></div>';
	}
	
	public function delete($id)
	{
		$this->news_model->delete($id);
	}
	
	public function update($id)
	{
		$this->load->library('upload');
		$config['allowed_types'] = 'gif|jpg|png|pdf|doc|docx|txt';
		$config['upload_path'] = '../uploads/';
		if ($_FILES['image_link']['error'] == 4) {
			$data = array(
				'title' => $this->input->post('title'),
				'content' => $this->input->post('content')
			);
		} else {
			$check = $this->news_model->getone($id);
			if(isset($check['image_link'])) unlink('../uploads/' . $check['image_link']);
			
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
		$this->news_model->update($data, $id);
		echo $id;
	}
	
}
?>
