import { AuthState } from '../statesModels/auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

export const selectAuth = createFeatureSelector<AuthState>('auth')

export const selectAuthUsername = createSelector(selectAuth, (state) => state.username)
export const selectAuthToken = createSelector(selectAuth, (state) => state.token)
export const selectAuthExpitarion = createSelector(selectAuth, (state) => state.expiresIn)

export const selectIsNotExpired = createSelector(selectAuthExpitarion, (state) => state && moment().isBefore(moment(state)))
export const selectIsLoggedIn = createSelector(selectAuthToken, selectIsNotExpired, (token, isExpired) => token && isExpired)