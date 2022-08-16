import { createAction, props } from '@ngrx/store';
import { ElementStyles } from '../statesModels/elementStyles.state';

export const elementChangeStyles = createAction('[Element] Element Style Set',props<{ styles: ElementStyles }>())