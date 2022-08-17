import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

import * as AuthActions from '../actions/auth.actions'
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.authService.logout()
        this.toastr.success('Logged out')
      })
    )
  },
    { dispatch: false }
  )

  loginRequest$ = createEffect(() => {
    console.log('effect works')
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) => {
        let url = ''
        switch (action.authMethod) {
          case 'Login': {
            url = 'http://localhost:8000/users/authenticate'
            break
          }
          case 'Register': {
            url = 'http://localhost:8000/users/register'
            break
          }
        }
        return this.authService
          .authorize(action.username, action.password, url)
          .pipe(
            map((response) => AuthActions.loginSuccess({ response })),
            catchError((error) => of(AuthActions.loginError({ response: error })))
          )
      }
      )
    )
  })

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ response }) => {
        this.toastr.success(response.message)
        this.router.navigateByUrl('/')
      })
    )
  },
    { dispatch: false }
  )

  loginError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginError),
      tap(({ response }) => {
        response && this.toastr.error(response.error.message)
      })
    )
  },
    { dispatch: false }
  )
}