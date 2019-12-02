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
  validation_messages : {};
  loginForm : FormGroup;


  /**
   * 
   * @param http 
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

    /**
     * Login data
     */
    this.login = {
      email : "",
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
  }


  /**
   * Check password for authentication
   * @param password 
   * @param hashed 
   */
  async checkPassword(password:string, hashed:string) {
  
    let match = await bcrypt.compare(password, hashed);
    if(match) {
      this.auth.loggedIn = true;
      this.router.navigateByUrl('/home');
    }
    else {
      console.log("Can't connect : Wrong email or password");
    }

  }


   /**
   * Attempt login
   */
  async tryLogin() {

    if(this.loginForm.valid) {

      let userInput = this.login;

      const loading = await this.loadingController.create({
        message: 'Loading'
      });

      await loading.present();
      await this.api.getUser(userInput)
        .subscribe(res => {
          this.checkPassword(userInput['password'], res[0]['password'])
          loading.dismiss(); 

          // Here we are sure that the person is logged in
          this.global.user = res[0];

        }, err => {
          console.log(err);
          loading.dismiss();
        });

    }
    else {
      console.log("Invalid form")
    }
  }

}
