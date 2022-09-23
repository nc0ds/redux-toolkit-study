import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './types';

const initialState: IUserState = {
	user: null,
};

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginRequest: (state, action) => {},
		loginSuccess: (state, { payload }) => {
			state.user = {
				name: payload.name,
				email: payload.email,
			};
		},
		loginFailure: (state, { payload }) => {
			state.user = null;
		},

		logoutRequest: () => {},
		logoutSuccess: state => {
			state.user = null;
		},
		logoutFailure: () => {},
	},
});

export const {
	loginRequest,
	loginSuccess,
	loginFailure,
	logoutRequest,
	logoutSuccess,
	logoutFailure,
} = user.actions;

export default user.reducer;
