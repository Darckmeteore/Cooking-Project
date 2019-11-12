import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private http : HttpClient ) { }

  /**
   * 
   */
  public login = {
    email : "",
    password : ""
  };


  ngOnInit() {
  }


   /**
   * Attempt a login by comparing mail and password in database
   */
  tryLogin() {
    console.log(this.login);
  }

}
