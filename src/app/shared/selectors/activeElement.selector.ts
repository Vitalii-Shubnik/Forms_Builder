import { createFeatureSelector } from '@ngrx/store';
import { activeElement } from '../statesModels/activeElement.model';

export const selectElement = createFeatureSelector<activeElement>('element')