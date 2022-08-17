import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FormItemService } from 'src/app/core/services/form-item.service';
import * as ElementActions from '../actions/elementStyles.actions'
import { map, tap } from 'rxjs';


@Injectable()
export class ElementStylesEffects {
  constructor(
    private actions$: Actions,
    private formItemService: FormItemService
  ) { }

  changeElementStyles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ElementActions.elementChangeSelfStyles),
      tap(({ styles }) => {
        this.formItemService.setStyles(styles)
      }),
      map(({ styles }) => ElementActions.elementChangeStyles({ styles }))
    )
  },
  )
}