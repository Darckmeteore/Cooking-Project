import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
@Component({ 
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  router : Router;
  public LoginData = {
      createPseudo : "",
      createEmail : "",
      createPassword : ""
    };
    public JCP = "mrtlagrossesalopedu74";
    constructor(
      private http : HttpClient,
      private rt : Router
    ) { this.router = rt;}

    ngOnInit() {
    }

    btnclick(){
      this.LoginData.createPassword = bcrypt.hashSync(this.LoginData.createPassword);
      this.http.get('http://localhost:3000/api/LoginData/' + this.LoginData.createEmail)
      .subscribe( (data : any[]) => {
        console.log(data);
         if (data.length == 0){
           console.log("data = nul we can create a user");
           this.http.post('http://localhost:3000/api/LoginData',{pseudo: this.LoginData.createPseudo, email: this.LoginData.createEmail , password: this.LoginData.createPassword})
           .subscribe(data => {
              console.log(data['_body']);
             }, error => {
              console.log(error);
            });
           console.log('push in db');
           console.log(this.LoginData);
           this.router.navigateByUrl('/home');
         }else{
          this.router.navigateByUrl('/signup');
          console.log('Try again');
         }
        }, error => {
         console.log(error);
       });
     }


}
