import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store) { }
  userName$ = this.store.select(selectAuthUsername)
  isLogged$ = this.store.select(selectIsLoggedIn)
  
  logout() {
    this.store.dispatch(AuthActions.logout())
  }
}
