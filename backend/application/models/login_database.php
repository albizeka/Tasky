<?php

Class Login_database extends CI_Model {

	public function login($mail , $password) {

	$this->db->select('*');
	$this->db->from('users');
	$this->db->where('mail' , $mail);
	$this->db->where('password',$password);
	$this->db->limit(1);
	$query = $this->db->get();

	if ($query->num_rows() == 1) {
		return true;
	} else {
		return false;
	}
}

// Read data from database to show data in admin page
public function read_user_information($sess_array) {

		$condition = "mail =" . "'" . $sess_array['mail'] . "'";
		$this->db->select('*');
		$this->db->from('users');
		$this->db->where($condition);
		$this->db->limit(1);
		$query = $this->db->get();

		if ($query->num_rows() == 1) {
			return $query->result();
		} else {
			return false;
		}
}

}

?>	