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
  

  constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController, public plateform: Platform) {


    
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

  done(id: any) {
    console.log("done");
  }

  delete(id:any) {
    console.log("delete");
  }

  ngOnInit() {
    this.getMeals();
  }


}
