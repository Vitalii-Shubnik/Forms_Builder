import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let s = false
    this.store.select(selectIsLoggedIn).subscribe(el => s = el)
    if (s) {
      console.log('logged In')

      return true;
    }
    else {
      console.log('not loggedIn')
      return this.router.parseUrl('/authenticate');
    }
  }

}
