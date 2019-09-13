import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn : boolean,
  user : User 

}

export const initialAuthState: AuthState = {
  loggedIn : false,
  user : null

};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction : 
      return{
        ...state,
        loggedIn : true,
        user : action.payload.user
      }

    case AuthActionTypes.LogoutAction : 
      return {
        ...state,
        loggedIn : false,
        user : null
      }

    default:
      return state;
  }
}
