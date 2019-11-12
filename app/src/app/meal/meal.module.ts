import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MealPage } from './meal.page';

import { Camera } from '@ionic-native/camera/ngx';
const routes: Routes = [
  {
    path: '',
    component: MealPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    Camera    
  ],
  
  declarations: [MealPage]
})
export class MealPageModule {}
