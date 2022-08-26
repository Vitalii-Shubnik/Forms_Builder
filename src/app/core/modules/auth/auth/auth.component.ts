import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authMethodEnum } from '../../../enums/authMethod';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  isLoggedIn$: any
  userName$: any

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.userName$ = this.store.select(selectAuthUsername)
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn)
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout())
  }

  login(email: string, password: string, authMethod: authMethodEnum): void {
    this.store.dispatch(AuthActions.loginRequest({ username: email, password: password, authMethod: authMethod }))
  }
}
