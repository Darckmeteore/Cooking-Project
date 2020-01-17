import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Component } from '@angular/core';

import { LoadingController, NavController, Platform } from '@ionic/angular';
import { RestService } from '../app-rest-service.service';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage {

  meals : any;
  api : RestService;
  devWidth: any;
  

  constructor(private router : Router, private global : GlobalService, public restapi: RestService, public loadingController: LoadingController, public navController : NavController, public plateform: Platform) {
    this.api = restapi;
    this.devWidth = this.plateform.width();
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

}
