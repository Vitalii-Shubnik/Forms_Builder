import { createAction, props } from '@ngrx/store';
import { ElementStyles } from '../statesModels/elementStyles.state';

export const elementChangeStyles = createAction('[Element] Element Style Set',props<{ styles: ElementStyles }>())
export const elementChangeSelfStyles = createAction('[Element] Element Style Self Set',props<{ styles: ElementStyles }>())