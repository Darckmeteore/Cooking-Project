import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public loggedIn: boolean = false;

  constructor(
    private router: Router,
  ) {
      this.loggedIn = false;

      if (this.loggedIn) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['logout']);
      }
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loggedIn) {
      return this.router.navigate(['login']);
    }

    return this.loggedIn;
  }

  public getGuardAuthentication(): boolean {
    return this.loggedIn;
  }
}
