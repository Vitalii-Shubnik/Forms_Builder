import { createReducer, on } from '@ngrx/store'
import { loginError, loginSuccess, logout } from '../actions/auth.actions'
import { AuthState } from '../statesModels/auth.state'

export const initialUser: AuthState = {
  id: null,
  username: null,
  token: null,
  expiresIn: null,
}

export const getInitialUser = () => {
  const user: AuthState = JSON.parse(localStorage.getItem('user')!)
  return user !== null ? user : { initialUser }
}

export const authReducer = createReducer(
  getInitialUser(),
  on(loginSuccess, (state, { response }): AuthState => {
    return {
      ...state,
      id: response.id,
      username: response.username,
      token: response.token,
      expiresIn: response.expiresIn,
    }
  }),
  on(loginError, (state, { response }): AuthState => {
    return {
      ...state,
      id: null,
      username: null,
      token: null,
      expiresIn: null,
    }
  }),
  on(logout, (state): AuthState => {
    return {
      ...state,
      id: null,
      username: null,
      token: null,
      expiresIn: null,
    }
  })
)