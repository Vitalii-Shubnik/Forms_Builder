import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as AuthActions from 'src/app/shared/actions/auth.actions'
import { selectAuthUsername, selectIsLoggedIn } from 'src/app/shared/selectors/auth.selector'
import { authMethodEnum } from '../../../enums/authMethod'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup
  isLoggedIn$: Observable<boolean>
  userName$: Observable<string>

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.userName$ = this.store.select(selectAuthUsername)
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn)

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout())
  }

  login(email: string, password: string, authMethod: authMethodEnum): void {
    this.store.dispatch(AuthActions.loginRequest({ username: email, password: password, authMethod: authMethod }))
  }
}
