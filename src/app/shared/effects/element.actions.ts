import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FormItemService } from 'src/app/core/services/form-item.service';
import * as ElementActions from '../actions/element.actions'
import { tap } from 'rxjs';


@Injectable()
export class ElementEffects {
  constructor(
    private actions$: Actions,
    private formItemService: FormItemService
    // private authService: AuthService,
    // private toastr: ToastrService,
  ) { }

  changeElementStyles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ElementActions.elementChangeSelfStyles),
      tap(({ styles }) => {
        console.log('in effect')
        this.formItemService.setStyles(styles)
      })
    )
  },
    { dispatch: false }

  )



  // logout$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AuthActions.logout),
  //     tap(() => {
  //       this.authService.logout()
  //       this.toastr.success('Logged out')
  //     })
  //   )
  // },
  //   { dispatch: false }
  // )

  // loginRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AuthActions.loginRequest),
  //     exhaustMap((action) => {
  //       let url = ''
  //       switch (action.authMethod) {
  //         case 'Login': {
  //           url = 'http://localhost:8000/users/authenticate'
  //           break
  //         }
  //         case 'Register': {
  //           url = 'http://localhost:8000/users/register'
  //           break
  //         }
  //       }
  //       return this.authService
  //         .authorize(action.username, action.password, url)
  //         .pipe(
  //           map((response) => AuthActions.loginSuccess({ response })),
  //           catchError((error) => of(AuthActions.loginError({ response: error })))
  //         )
  //     }
  //     )
  //   )
  // })
}