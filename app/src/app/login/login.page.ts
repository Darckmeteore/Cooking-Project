import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../app-rest-service.service';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  api   : RestService;
  router : Router;
  login : {};


  /**
   * 
   * @param http 
   */
  constructor(private http : HttpClient,
              private rt: Router,
              private restapi: RestService,
              private loadingController: LoadingController,
              private auth : AuthGuard,
              private global : GlobalService) {

    this.api = restapi;
    this.router = rt;

    this.login = {
      email : "",
      password : ""
    }

   }


  /**
   * 
   */
  ngOnInit() {
  }


  /**
   * Checking for existing user in db
   * @param user 
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
        //this.global.username = this.api.getUser(userInput);
        console.log("coucou");
        console.log(this.api.getUser(userInput));

      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }

}
