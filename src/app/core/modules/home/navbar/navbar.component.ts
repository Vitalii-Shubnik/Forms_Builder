import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName$: Observable<string>
  isLogged$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userName$ = this.store.select(selectAuthUsername)
    this.isLogged$ = this.store.select(selectIsLoggedIn)
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
  }
}
