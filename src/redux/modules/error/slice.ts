import { createSlice } from '@reduxjs/toolkit';
import { IError } from './types';

const initialState: IError = {
	error: null,
};

const error = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = {
				code: payload.code,
				message: payload.message,
			};
		},
		cleanError: (state) => {
			state.error = null;
		},
	},
});

export const { setError, cleanError } = error.actions;

export default error.reducer;
