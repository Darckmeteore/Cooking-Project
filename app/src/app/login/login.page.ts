import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../app-rest-service.service';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from '../guards/auth.guard';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  api   : RestService;
  router : Router;
  login : {};
  loginFailed : boolean;
  validation_messages : {};
  loginForm : FormGroup;


  /**
   * CONSTRUCTOR
   * @param http
   * @param rt 
   * @param restapi 
   * @param loadingController 
   * @param auth 
   * @param global 
   * @param formBuilder 
   */
  constructor(private http : HttpClient,
              private rt: Router,
              private restapi: RestService,
              private loadingController: LoadingController,
              private auth : AuthGuard,
              private global : GlobalService,
              private formBuilder : FormBuilder) {

    this.api = restapi;
    this.router = rt;
    this.loginFailed = false;

    /**
     * Login data
     */
    this.login = {
      email    : "",
      password : ""
    }

    /**
     * Login form group
     */
    this.loginForm = formBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    });

    /**
     * Login error messages
     */
    this.validation_messages = {
      'email': [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' },
        ],
        'password': [
          { type: 'required', message: 'Password is required.' }
        ]
      }

   }


  /**
   * On page init
   */
  ngOnInit() {
    this.loginFailed = false;
  }


  /**
   * Check password for authentication
   * @param password 
   * @param hashed 
   */
  async checkPassword(password:string, hashed:string) {
  
    let match = await bcrypt.compare(password, hashed);
    if(match) {
      this.loginFailed = false;
      this.auth.loggedIn = true;
      this.router.navigateByUrl('/home');
    }
    else {
      this.loginFailed = true;
      console.log("Can't connect : Wrong email or password");
    }

  }

  goToSignup() {
    this.router.navigate(['signup']);
  }

   /**
   * Attempt login
   */
  async tryLogin() {

    if(this.loginForm.valid) {

      let userInput = this.login;
      let user;

      const loading = await this.loadingController.create({
        message: 'Loading'
      });
      await loading.present();

      // CHECK USER DATA
      this.api.getUser(userInput)
        .subscribe(res => {
          // user doesn't exist in database : wrong email
          if( typeof res[0] === 'undefined' ) {
            this.loginFailed = true;
            console.log("Can't connect : Wrong email or password");
          }
          else {
            this.checkPassword(userInput['password'], res[0]['password']);
            this.global.user = res[0];  // we are sure that the person is logged in
          }
          
          loading.dismiss();
          
      }, err => {
        console.log(err);
        loading.dismiss();
      });

    }
    else {
      this.loginFailed = true;
      console.log("Invalid login form");
    }
  }

}
