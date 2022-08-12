import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authMethodEnum } from '../../enums/authMethod';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  form: FormGroup;
  authMethod: authMethodEnum = authMethodEnum.login;
  isLoggedIn$ = this.store.select(selectIsLoggedIn)
  userName$ = this.store.select(selectAuthUsername)
  
  toggleSwitchMethod = () => {
    this.authMethod == authMethodEnum.login ? this.authMethod = authMethodEnum.register : this.authMethod = authMethodEnum.login
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
  }

  loginClick() {
    const val = this.form.value
    this.store.dispatch(AuthActions.loginRequest({ username: val.email, password: val.password, authMethod: this.authMethod }))
  }

}
