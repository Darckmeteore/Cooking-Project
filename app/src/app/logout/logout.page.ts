import { Router } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private global : GlobalService, private authGuard : AuthGuard, private router : Router) {
    
    // "Destroy" user session
    delete this.global.user;
    this.authGuard.loggedIn = false;

    console.log("User logged out");

    // Redirect the user to the login view
    this.router.navigate(['home']);

   }

  ngOnInit() {
  }

}
