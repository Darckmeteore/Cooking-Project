import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [LoginGuard], data: { authGuardRedirect: 'login' } },
  { path: 'home', loadChildren: './meals/meals.module#MealsPageModule', canActivate: [AuthGuard] },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'meal/:id', loadChildren: './meal/meal.module#MealPageModule', canActivate: [AuthGuard] },
  { path: 'meals', loadChildren: './meals/meals.module#MealsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },

  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },

  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
