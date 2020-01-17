import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({ 
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})


export class SignupPage implements OnInit {

  router : Router;
  signup : {};
  signupFailed : boolean;
  signupForm : FormGroup;
  validation_messages : {};


/**
 * CONSTRUCTOR
 * @param http 
 * @param rt 
 */
constructor(private http : HttpClient,
            private rt : Router,
            private formBuilder : FormBuilder) { 

  this.router = rt;

  /**
   * Signup data
   */
  this.signup = {
    pseudo   : "",
    email    : "",
    password : "" 
  }

  /**
   * Signup form group
   */
  this.signupForm = formBuilder.group({
    pseudo : ['', Validators.required],
    email : ['', Validators.compose([Validators.required, Validators.email])],
    password : ['', Validators.required]
  });

  /**
   * signup error messages
   */
  this.validation_messages = {
    'pseudo' : [
      { type: 'required', message: 'Pseudo is required' },
    ],
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
    this.signupFailed = false;
  }


  /**
   * Attempt signup
   */
  async trySignup() {

    if(this.signupForm.valid) {

      let userInput = this.signup;
    
      this.http.get('http://localhost:3000/api/LoginData/' + userInput['email'])
      .subscribe( (data : any[]) => {

        // CHECK EXISTING USER
        if (data.length == 0) {
          console.log("data = nul we can create a user");
          userInput['password'] = bcrypt.hashSync(userInput['password']);
          this.http.post('http://localhost:3000/api/LoginData',{pseudo: userInput['pseudo'], email: userInput['email'] , password: userInput['password']})
          .subscribe(data => {
            console.log(data['_body']);
            }, error => {
            this.signupFailed = true;
            console.log(error);
          });
          console.log('push in db');
          console.log(this.signup);
          this.router.navigateByUrl('/home');
        }
        else {
        this.router.navigateByUrl('/signup');
        console.log('Try again');
        }
      }, error => {
        this.signupFailed = true;
        console.log(error);
      });
    }
    else {
      this.signupFailed = true;
      console.log("Invalid signup form");
    }
  }

}