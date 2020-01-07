import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Component } from '@angular/core';

import { LoadingController, NavController, Platform, MenuController } from '@ionic/angular';
import { RestService } from '../app-rest-service.service';
import { global } from '@angular/compiler/src/util';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage {

  meals : any;
  api : RestService;
  devWidth: any;
  

  constructor(private router : Router, private global : GlobalService, private menu : MenuController, public restapi: RestService, public loadingController: LoadingController, public navController : NavController, public plateform: Platform) {
    this.api = restapi;
    this.devWidth = this.plateform.width();
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async getMeals() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getMeals()
      .subscribe(res => {
        this.meals = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  /**
   * On page init
   */
  ngOnInit() {
    this.getMeals();
  }

  /**
   * Informs that the job is done
   * @param id
   */
  done(id: any) {
    console.log("done");
  }

  /**
   * Informs about a delete
   * @param id 
   */
  delete(id:any) {
    console.log("delete");
  }
  
  /**
   * Logout from app
   */
  logout() {
    this.router.navigate(['logout']);
  }


  /*==============================================
      MENU FUNCTIONS
  ==============================================*/
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
