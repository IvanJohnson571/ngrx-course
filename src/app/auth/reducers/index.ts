import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  createReducer,
  MetaReducer,
  on,
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {

  user: User

}

export interface State {

}

export const initialAuthState: AuthState = {
  user: undefined
}

export const reducers: ActionReducerMap<State> = {

};

//deleted in the video lesson
export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,

    }
  }
  )
);