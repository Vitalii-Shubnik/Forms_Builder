import { createReducer, on } from '@ngrx/store';

import { loginError, loginRequest, loginSuccess, register, logout } from '../actions/auth.actions';


export interface AuthState {
  id: number,
  username: string,
  expiresIn: number,
  token: string,
  error?: string
}

export const initialUser: AuthState = {
  id: null,
  username: null,
  token: null,
  expiresIn: null,
  error: null
}

export const authReducer = createReducer(
  initialUser,
  // on(loginRequest, (state): any => 0),
  on(loginSuccess, (state, { response }): any => {
    return {
      ...state,
      id: response.id,
      username: response.username,
      token: response.token,
      expiresIn: response.expiresIn
    }
  }),
  on(loginError, (state, { response }): any => {
    return {
      ...state,
      id: null,
      username: null,
      token: null,
      expiresIn: null,
    }
  })
)