import { createReducer, on } from '@ngrx/store';
import { elementChangeStyles } from '../actions/element.actions';
import { ElementStyles } from '../statesModels/elementStyles.state';

export const initialElement: ElementStyles = {
  width: '',
  height: '',
  color: '',
  required: '',
  borderStyle: '',
  fontSize: '',
  fontWeight: '',
  placeholder: '',
}

export const elementReducer = createReducer(
  initialElement,
  on(elementChangeStyles, (state, { styles }): ElementStyles => {
    return {
      ...state,
      ...styles
    }
    // state.setAttribute('placeholder', styles.placeholder)
    // state.setAttribute('required', styles.required)
    // console.log(state)
    // return state
  })
)