import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private http : Client ) { }

  private login = {
    email : string,
    password : string
  };

  /**
   *
   */
  tryLogin() {

  }

  ngOnInit() {
  }

}
