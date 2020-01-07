import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { RestService } from '../app-rest-service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  meal: any;
  ingredientsData: any;
  api: RestService;
  id: string;
  devWidth: any;

  constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {
    this.api = restapi;
  }

  async getMeal(id: any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getMeal(this.id)
      .subscribe(res => {
        this.meal = res[0];

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async getMealWithIngredients(id: any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getMealWithIngredients(this.id)
        .subscribe(res => {
          this.meal = res[0];

          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });

  }

  async getIngredientsData() {

    /*

    this.ingredientsData = Array.apply(null);

    for(var i = 0; i < this.meal.ingredients.length; i++) {
      
      for(var quantity in this.meal.ingredients[i]) {

        this.ingredientsData.push({ quantity: quantity, ingredient: undefined });
  
      }

    }

    for(var i = 0; i < this.meal.ingredients.length; i++) {

      for(var quantity in this.meal.ingredients[i]) {

        this.api.getIngredient(this.meal.ingredients[i][quantity]).subscribe(res => {

          //console.log({ quantity: quantity, ingredient: res[0] });
  
          //this.ingredientsData.push({ quantity: quantity, ingredient: res[0] });
  
          //this.ingredientsData[i]["ingredient"] = res[0];

          console.log(this.ingredientsData);

          console.log(i);

        }, err => {
          console.log(err);
        });

      }      
    };

    /*

    for(var quantity in this.meal.ingredients){      
      //this.ingredientsData.push({quantity : quantity, ingredient : this.meal.ingredients[quantity]});
    
      //ca met 3 ici car çamet que la quantity de la dernière valeur étant donnée qu'on est en subscribe

      this.api.getIngredient(this.meal.ingredients[quantity]).subscribe(res => {

        console.log({quantity : quantity, ingredient : res[0]});

        this.ingredientsData.push({quantity : quantity, ingredient : res[0]});
      }, err => {
        console.log(err);
      });

    }

    */
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.getMealWithIngredients(this.id);
  }

}
