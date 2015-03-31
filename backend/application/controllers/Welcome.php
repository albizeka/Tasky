<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	

	public function __construct() {
		parent::__construct();

		// Load form helper library
		$this->load->helper('form');

		// Load form validation library
		$this->load->library('form_validation');

		// Load session library
		$this->load->library('session');

		// Load database
		$this->load->model('login_database');

	}

	public function index()
	{
		$this->load->view('welcome_message');
	}

	//logic of login form
	public function login(){

	//	$this->load->model('login_database');

		$this->form_validation->set_rules('username', 'Username', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');

		if($this->form_validation->run()){
			$data = array(
				'username'=> $this->input->post('username'),
				'password'=> $this->input->post('password')
				);

			$result = $this->login_database->login($data);
			if($result == TRUE){
				$sess_array = array(
					'username'=>$this->input->post('username')
				);
			}

			// add user data into session 
			$this->session->set_userdata('logged_id',$sess_array);
			$result = $this->login_database->read_user_information($sess_array);

			if($result != false){
				$data = array(
					'username'=>$result[0]->username,
					'password'=>$result[0]->password
				);
			
			$this->load->view('dashboard');	
			
			} else {
				$data = array(
					'errors_message'=> 'Invalid username or password'
				);

				$this->load->view('welcome_message' , $data);
			}
		} else {
			echo "wrong";
		}
	}

	//logout
	public function logout(){
		//Removing session
		$sess_array = array(
			'username'=>''
		);

		$this->session->set_userdata('logged_id',$sess_array);
		$data['message_display'] = "Succesfuly logout";
		$this->load->view('welcome_message',$data);
	}
}
