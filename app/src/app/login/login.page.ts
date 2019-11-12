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

  private login = {
    email : "",
    password : ""
  };

  /**
   *
   */
  tryLogin() {
    
  }

  ngOnInit() {
  }

}
