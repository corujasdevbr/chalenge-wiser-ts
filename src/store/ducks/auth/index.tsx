import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	isAuthenticated: localStorage.getItem('token')
};

export const login = createAction<number, 'LOGIN'>('LOGIN');
export const logout = createAction<number, 'LOGOUT'>('LOGOUT');

export default createReducer(INITIAL_STATE, {
	[login.type]: (state, action) => ({ ...state, isAuthenticated: true }),
	[logout.type]: (state, action) => ({ ...state, isAuthenticated: false })
});