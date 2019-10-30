import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public LoginData = {
      createPseudo : "",
      createEmail : "",
      createPassword : ""
    };
    public JCP = "mrtlagrossesalopedu74";
    constructor(
      private http : HttpClient,
    ) { }

    ngOnInit() {
    }

    btnclick(){
      this.LoginData.createPassword = bcrypt.hashSync(this.LoginData.createPassword);
      this.http.get(`http://localhost:3000/api/LoginData?pseudo=${this.LoginData.createPseudo}&email=${this.LoginData.createEmail}`)
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
           console.log('envoyé');
           console.log(this.LoginData);
         }
        }, error => {
         console.log(error);
       });
     }


}
