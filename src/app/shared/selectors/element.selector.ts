import { ElementStyles } from '../statesModels/elementStyles.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectElement = createFeatureSelector<ElementStyles>('element')

export const selectElementWidth = createSelector(selectElement, (state): string => state.width)
export const selectElementHeight = createSelector(selectElement, (state): string => state.height)
export const selectElementFontSize = createSelector(selectElement, (state): string => state.fontSize)
export const selectElementFontWeight = createSelector(selectElement, (state): string => state.fontWeight)
export const selectElementColor = createSelector(selectElement, (state): string => state.color)
export const selectElementBorderStyle = createSelector(selectElement, (state): string => state.borderStyle)
export const selectElementPlaceholder = createSelector(selectElement, (state): string => state.placeholder)
export const selectElementRequired = createSelector(selectElement, (state): string => state.required)
