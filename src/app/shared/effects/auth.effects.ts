import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ToastrService } from 'ngx-toastr'
import { catchError, exhaustMap, map, of, shareReplay, tap } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth.service'
import { Router } from '@angular/router'
import { LoginResponse } from 'src/app/core/models/userLoginResponse'
import * as AuthActions from '../actions/auth.actions'


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
        this.router.navigateByUrl('/authenticate')
      })
    )
  },
    { dispatch: false }
  )

  loginRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) => {
        console.log(action.username)
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
            tap((user: LoginResponse) => {
              this.authService.setUser({ ...user })
            }),
            map((response) => AuthActions.loginSuccess({ response })),
            catchError((error) => of(AuthActions.loginError({ response: error }))),
            shareReplay()
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
        this.toastr.error(response?.error?.message || 'Something went wrong')
      })
    )
  },
    { dispatch: false }
  )
}