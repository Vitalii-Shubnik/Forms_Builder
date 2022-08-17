import { createReducer, on } from '@ngrx/store';
import { elementChange } from '../actions/activeElement.actions';
import { activeElement } from '../statesModels/activeElement.model';

export const initialElement: activeElement = null

export const elementReducer = createReducer(
  initialElement,
  on(elementChange, (state, { element }): activeElement => {
    return { ...element }
  })
)