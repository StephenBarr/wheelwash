<?php
class Contact extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('tank_auth');
	}
	
	public function index()
	{
		$data['title'] = 'Contact Us';
		$data['description'] = 'Wheelwash wheel cleaning solutions - Contact information. Wheelwash Chile, Av. La Dehesa 1201, Of. 515 Oriente, Lo Barnechea, Santiago, Chile. Wheelwash Canada, c/o Kiely Distribution Co., 700 McClellan Street, Long Branch, N.J. 07740. Wheelwash Netherlands, MB Dustcontrol B.V., Industrieweg 2, 2254 AE Voorschoten, The Netherlands. Wheelwash Limited, Pyms Lane, Crewe, Cheshire, CW1 3PJ. Wheelwash España, c/o Instalaciones y Representaciones Industriales Irimac, S.L.éíó, C/ Cimadevilla, 1, Oficina D, 33820 Grado, Asturias. Wheelwash Ireland, c/o Walkers Municipal Services, Unit 2D Kylemore Industrial Estate, Killeen Road, Dublin 10. Svensk Vattenförsörjning AB, Fjäll Rönningen, 671 95, Klässbol, Värmlands län, Sweden. Mortec Infrastructure & Recycling Equipment Ltd., 16 Hazait St., Kfar Bilu, 76965, Israel. Wheelwash Australia, PO Box 227, Somerton, Victoria 3062';
		$this->load->view('header', $data);
		$this->load->view('contact');
		$this->load->view('footer');	
	}
	
	public function message() {
 
 		$list = array('agalley@wheelwash.com'/*, 'michelle@renewdesign.co.uk'*/);
		$this->load->library('email');
		$this->email->from($this->input->post('email'), $this->input->post('name'));
		$this->email->reply_to($this->input->post('email'), $this->input->post('name'));
		$this->email->to($list);
		$this->email->subject('Wheelwash Enquiry Request Form');
		$this->email->message($this->input->post('message'));
		$this->email->set_alt_message('Wheelwash Enquiry Request Form');
		  
		  if($this->email->send()) {
			 echo '<p>We have successfully received your email.<br /> We will Contact you ASAP.</p><p></p>';
		  } else {
		     echo '<p>Some problem occurred.</p>';
		  }   
	}
	
	public function download($filename) {
 
 		$list = array('agalley@wheelwash.com');
		$this->load->library('email');
		$this->email->from('hello@renewdesign.co.uk', 'Renew Design');
		$this->email->reply_to($this->input->post('email'), $this->input->post('name'));
		$this->email->to($list);
		$this->email->subject('Website Download Notification');
		$this->email->message('Name: ' . $this->input->post('name') . '<br />Email: ' . $this->input->post('email') . '<br />File Downloaded: ' . urldecode($filename));
		$this->email->set_alt_message('Website Download Notification');
		  
		if($this->email->send()) {
			echo '<a href="' . $this->config->item('outside_base_url') . 'es/pdf/' . $filename . '" target="_blank" class="button download final">Download PDF file(Opens in new window)</a>';
		} else {
			echo 'Some problem occurred.';
		}   
	}
}
?>
