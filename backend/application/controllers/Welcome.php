<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$user=json_decode(file_get_contents('php://input'));

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

		// $this->form_validation->set_rules('mail', 'Mail', 'required');
		// $this->form_validation->set_rules('password', 'Password', 'required');

		// if($this->form_validation->run()){
		// 	$data = array(
		// 		'mail'=> $this->input->post('mail'),
		// 		'password'=> $this->input->post('password')
		// 		);
		// 	print_r($data);

		// 	$result = $this->login_database->login($data);
		// 	if($result == TRUE){
		// 		// $sess_array = array(
		// 		// 	'mail'=>$this->input->post('mail')
		// 		// );
		// 		session_start();
		// 		$_SESSION['id'];
		// 		print $_SESSION['id'];
		// 	}

		// 	// add user data into session 
		// 	$this->session->set_userdata('logged_id',$sess_array);
		// 	$result = $this->login_database->read_user_information($sess_array);

		// 	if($result != false){
		// 		$data = array(
		// 			'mail'=>$result[0]->mail,
		// 			'password'=>$result[0]->password
		// 		);
			
		// 	$this->load->view('dashboard');	
			
		// 	} else {
		// 		$data = array(
		// 			'errors_message'=> 'Invalid mail or password'
		// 		);

		// 		$this->load->view('welcome_message' , $data);
		// 	}
		// } else {
		// 	echo "wrong";
		// }

		$postdata = file_get_contents("php://input");

		$request = json_decode($postdata);
		$mail = $request->mail;
		$password = $request->password;

		$result = $this->login_database->login($mail , $password);

		if($result){

			$sess_array = array(
		 		'mail'=>$request->mail
			 );

			$this->session->set_userdata('logged_id',$sess_array);
		 	$result = $this->login_database->read_user_information($sess_array);

			echo '{"status" : "success"}';
		} else {
			echo '{"status" : "wrong"}';
		}

		
	}

	//logout
	public function logout(){
		//Removing session
		$sess_array = array(
			'mail'=>''
		);

		$this->session->set_userdata('logged_id',$sess_array);
		$data['message_display'] = "Succesfuly logout";
		$this->load->view('welcome_message',$data);
	}

	public function check() {
		session_start();
	if( isset($_SESSION['uid']) ) print 'authentified';
	}

}
