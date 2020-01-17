import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MealsPage } from './meals.page';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MealsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MealsPage, SideMenuComponent]
})
export class MealsPageModule {}
