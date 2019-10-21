import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'meal/:id', loadChildren: './meal/meal.module#MealPageModule' },
  { path: 'meals', loadChildren: './meals/meals.module#MealsPageModule' },  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
