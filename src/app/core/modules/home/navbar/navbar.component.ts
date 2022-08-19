import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername } from 'src/app/shared/selectors/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store) { }
  userName$ = this.store.select(selectAuthUsername)

  logout() {
    this.store.dispatch(AuthActions.logout())
  }
}
