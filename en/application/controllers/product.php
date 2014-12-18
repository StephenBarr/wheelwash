<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class product extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
	}
	
	public function index()
	{
		$data['title'] = 'Product Selector';
		$data['description'] = 'Wheelwash wheel cleaning solutions product selection page. Quickly view a selection of our products from Rhino Ecowash Express, Excel, Extra, Extra Clear, Extreme, Ecoramp, Ecobath and Bespoke custom selections partucalrly suited for your construction needs.';
		$this->load->view('header', $data);
		$this->load->view('product');
		$this->load->view('footer');
	}
	
	public function extreme()
    {	
		$data['title'] = 'Rhino Ecowash Extreme';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecowash Extreme - High performance spray wash system with high capacity, effective water recycling. The Rhino Ecowash Extreme is an automatically activated drive through spray wash system designed to prevent the spread of site dirt and debris from high volume sites on to public highways. Like many systems in the Rhino Ecowash range, it is powered by inverter-driven pumps to provide up to 50% operational cost savings, unrivalled reliability and total flexibility of wash pressure. This closed loop system also effectively recycles the water it uses.';
		$this->load->view('header', $data);
		$this->load->view('product/extreme');
		$this->load->view('footer');
    }
	
	public function express()
    {	
		$data['title'] = 'Rhino Ecowash Express';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecowash Express - High performance compact spray wash system with recycling. The Rhino Ecowash Express is the smallest of the high pressure spray wash systems, designed for the tightest of spaces. Like all systems in the Rhino Ecowash range, it provides, unrivalled reliability and performance. Operating on a closed loop system, it also effectively recycles the water it uses.';
		$this->load->view('header', $data);
		$this->load->view('product/express');
		$this->load->view('footer');
    }
	
	public function excel()
    {	
		$data['title'] = 'Rhino Ecowash Excel';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecowash Excel - High performance compact spray wash system with recycling. The Rhino Ecowash Excel is a reliable and compact high pressure spray wash system that operates automatically. Like all systems in the Rhino Ecowash range, it provides unrivalled reliability and performance. The closed loop system also effectively recycles the water it uses.';
		$this->load->view('header', $data);
		$this->load->view('product/excel');
		$this->load->view('footer');
    }
	
	public function extra()
    {
		$data['title'] = 'Rhino Ecowash Extra';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecowash Extra - High performance spray wash system with recycling. The Rhino Ecowash Extra is an automatically activated drive through spray wash system designed to prevent the spread of site dirt and debris on to public highways. Like many systems in the Rhino Ecowash range, it is powered by inverter-driven pumps to provide up to 50% operational cost savings, unrivalled reliability and total flexibility of wash pressure. This closed loop system also effectively recycles the water it uses.';
		$this->load->view('header', $data);
		$this->load->view('product/extra');
		$this->load->view('footer');
    }
	
	public function extraclear()
    {
		$data['title'] = 'Rhino Ecowash Extra Clear';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecowash Extra Clear - High performance spray wash system with high capacity lamella clarifier for recycling. The Rhino Ecowash Extra Clear is an automatically activated drive through spray wash system incorporating the Ecoclear, the world’s most effective, compact water recycling system for use in wheel washing applications. Together, they prevent the spread of site dirt and debris on to public highways. Like many systems in the Rhino Ecowash range, the Extra Clear is powered by inverter-driven pumps to provide up to 50% operational cost savings, unrivalled reliability and total flexibility of wash pressure.';
		$this->load->view('header', $data);
		$this->load->view('product/extraclear');
		$this->load->view('footer');
    }
	
	public function ecoclear()
    {
		$data['title'] = 'Rhino Ecoclear';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecoclear - High performance waste water treatment system. The Ecoclear waste water treatment system is the best performing lamella clarifier designed for use in wheel washing applications. It has been developed in collaboration with Scott Vickers Pte, the creators of the Cleartec range of systems which have been successfully cleaning waste and surface water from construction sites for many years, worldwide.';
		$this->load->view('header', $data);
		$this->load->view('product/ecoclear');
		$this->load->view('footer');
    }
	
	public function ecoramp()
    {
		$data['title'] = 'Rhino Ecoramp';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecoramp - High performance dry ramp system. The Rhino Ecoramp is a simple, drive-over dry ramp system designed to prevent the spread of site dirt and debris on to public highways. It is our most environmentally friendly wheel cleaning system because it requires no power or water plus it’s virtually maintenance-free. It works on the vibration effect created by the vehicle tyres driving over inverted steel angle.';
		$this->load->view('header', $data);
		$this->load->view('product/ecoramp');
		$this->load->view('footer');
    }
	
	public function ecobath()
    {
		$data['title'] = 'Rhino Ecobath';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Rhino Ecobath - High performance drive through bath system. The Rhino Ecobath is a simple, drive through bath system designed to prevent the spread of dirt and debris on to public highways from site vehicles and mobile plant. It is an environmentally friendly wheel cleaner that only requires 13,750 litres of water to become fully operational.';
		$this->load->view('header', $data);
		$this->load->view('product/ecobath');
		$this->load->view('footer');
    }
	
	public function bespoke()
    {
		$data['title'] = 'Rhino Bespoke';
		$data['description'] = 'Wheelwash wheel cleaning solutions. Bespoke Designs - Our team is experienced in providing unbeatable bespoke solutions for a wide range of sites, ground and conditions and vehicle types. Structural engineering reports when non road going vehicles are used. Axle loads in excess of 12,000 kg. Full site inspection, report and recommendations. Full CAD design service including overlay of Wheelwash drawings with site drawings. Purpose written operating manuals and detailed daily/weekly/monthly guidelines for getting the best out of your system';
		$this->load->view('header', $data);
		$this->load->view('product/bespoke');
		$this->load->view('footer');
    }
	
}
?>