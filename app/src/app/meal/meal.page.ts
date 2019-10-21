import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../app-rest-service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  meal : any;
  api : RestService;
  id : string;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {
    this.api = restapi;
  }

  async getMeal(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getMeal(this.id)
      .subscribe(res => {
        console.log(res);
        this.meal = res[0];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getMeal(this.id);
  }

}
