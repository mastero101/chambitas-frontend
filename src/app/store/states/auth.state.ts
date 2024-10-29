import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { User, Professional } from '../../core/models/user.interface';
import { login, loginSuccess, loginFailure, logout } from '../actions/auth.actions';

export interface AuthStateModel {
  user: (User | Professional) | null;
  token: string | null;
  isLoggedIn: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    token: null,
    isLoggedIn: false
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static getUser(state: AuthStateModel): (User | Professional) | null {
    return state.user;
  }

  @Selector()
  static getToken(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isLoggedIn(state: AuthStateModel): boolean {
    return state.isLoggedIn;
  }

  @Selector()
  static isProfessional(state: AuthStateModel): boolean {
    if (!state.user) return false;
    return state.user.role === 'professional';
  }

  @Action(login)
  login(ctx: StateContext<AuthStateModel>, action: login) {
    // Implementar lógica de login
  }

  @Action(loginSuccess)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: loginSuccess) {
    ctx.patchState({
      user: action.user,
      token: action.token,
      isLoggedIn: true
    });
  }

  @Action(logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      user: null,
      token: null,
      isLoggedIn: false
    });
  }
}
