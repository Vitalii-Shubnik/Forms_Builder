import { createReducer, on } from '@ngrx/store';
import { elementChangeStyles } from '../actions/elementStyles.actions';
import { ElementStyles } from '../statesModels/elementStyles.state';

export const initialElement: ElementStyles = null

export const elementStylesReducer = createReducer(
  initialElement,
  on(elementChangeStyles, (state, { styles }): ElementStyles => {
    // console.log('i am here ', styles)
    return {
      ...state,
      ...styles
    }
  })
)