<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UserTableSeeder extends Seeder {
    public function run(){
        DB::table('users')->delete();
 
        User::create(array(
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin')
        ));
    }
}
?>