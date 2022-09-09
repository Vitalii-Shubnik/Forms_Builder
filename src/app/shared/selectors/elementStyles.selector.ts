import { ElementStyles } from '../statesModels/elementStyles.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const selectElementStyles = createFeatureSelector<ElementStyles>('elementStyles')

