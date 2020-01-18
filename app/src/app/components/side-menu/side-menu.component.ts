import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})


export class SideMenuComponent implements OnInit {

  /**
   * CONSTRUCTOR
   * @param router
   */
  constructor(private router : Router, private menu : MenuController) {

  }

  /**
   * On page init
   */
  ngOnInit() {

  }


   /*==============================================
      MENU FUNCTIONS
  ==============================================*/

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * Logout from app
   */
  logout() {
    this.router.navigate(['logout']);
  }
  
  /**
   * Redirects to home page
   */
  toHome() {
    this.router.navigate(['home']);
  }

  /**
   * Redirects to profile page
   */
  toProfile() {
    this.router.navigate(['profile']);
  }

  /**
   * Redirects to messages page
   */
  toMessages() {
    this.router.navigate(['messages']);
  }

  /**
   * Redirects to settings page
   */
  toSettings() {
    this.router.navigate(['settings']);
  }
}
