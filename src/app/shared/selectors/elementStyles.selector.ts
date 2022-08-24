import { ElementStyles } from '../statesModels/elementStyles.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectElementStyles = createFeatureSelector<ElementStyles>('elementStyles')

// export const selectElementWidth = createSelector(selectElementStyles, (state): string => state.width)
// export const selectElementHeight = createSelector(selectElementStyles, (state): string => state.height)
// export const selectElementFontSize = createSelector(selectElementStyles, (state): string => state.fontSize)
// export const selectElementFontWeight = createSelector(selectElementStyles, (state): string => state.fontWeight)
// export const selectElementColor = createSelector(selectElementStyles, (state): string => state.color)
// export const selectElementBorderStyle = createSelector(selectElementStyles, (state): string => state.borderStyle)
// export const selectElementPlaceholder = createSelector(selectElementStyles, (state): string => state.placeholder)
// export const selectElementRequired = createSelector(selectElementStyles, (state): boolean => state.required)
