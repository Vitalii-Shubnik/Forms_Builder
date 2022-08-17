import { createAction, props } from '@ngrx/store';
import { activeElement } from '../statesModels/activeElement.model';

export const elementChange = createAction('[Element] Element Set', props<{ element: activeElement }>())
// export const elementChangeSelfStyles = createAction('[Element] Element Self Set', props<{ styles: ElementStyles }>())