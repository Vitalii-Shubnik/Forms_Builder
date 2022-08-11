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


  loginRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) => {
        console.log(action.username, action.type, action)
        return this.authService
          .login(action.username, action.password).pipe(
            map((response) => AuthActions.loginSuccess({ response })),
            catchError((error) => of(AuthActions.loginError({ response:error })))
          )
      })
    )
  }
  )

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ response }) => {
        this.toastr.success('Login successful')
        this.router.navigateByUrl('/')
      })
    )
  },
    {
      dispatch: false
    }
  )
  loginError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginError),
      tap(({ response }) => {
        console.log(response.error.message)
        this.toastr.error(response.error.message)
      })
    )
  },
    {
      dispatch: false
    }
  )
}