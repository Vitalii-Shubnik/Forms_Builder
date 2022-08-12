import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { authMethodEnum } from '../../../enums/authMethod';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/shared/actions/auth.actions';
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector';
import { FormValues } from 'src/app/core/models/formValues';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  form: FormGroup;
  authMethod: authMethodEnum = authMethodEnum.login;
  isLoggedIn$ = this.store.select(selectIsLoggedIn)
  userName$ = this.store.select(selectAuthUsername)
  
  toggleSwitchMethod(): void {
    this.authMethod == authMethodEnum.login ? this.authMethod = authMethodEnum.register : this.authMethod = authMethodEnum.login
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout())
  }

  loginClick(): void {
    const val:FormValues = this.form.value
    this.store.dispatch(AuthActions.loginRequest({ username: val.email, password: val.password, authMethod: this.authMethod }))
  }

}
