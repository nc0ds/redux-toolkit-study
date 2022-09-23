import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure, logoutSuccess } from './slice';
import { setError, cleanError } from '../error/slice';
import { ActionTypes, IUser } from './types';

interface ValidateUserProps {
	payload: {
		email: string;
		password: string;
	};
}

interface FetchResponseType {
	json: () => Promise<{
		id: number;
		name: string;
		email: string;
		password: string;
	}>;
}

function* validateUser({ payload }: ValidateUserProps) {
	const { email, password } = payload;

	const formattedEmail = email.trim();
	const formattedPassword = password.trim();

	if (!formattedEmail || !formattedPassword) {
		yield put(
			setError({
				code: 401,
				message: 'Email and password are mandatory',
			})
		);

		return;
	}

	try {
		const getUser: FetchResponseType = yield call(
			axios.get,
			`http://localhost:3001/users?email=${formattedEmail}&password=${formattedPassword}`
		);

		const { data } = yield getUser;

		if (data.length === 0) {
			throw new Error('User not found');
		}

		yield put(cleanError());
		yield put(
			loginSuccess({
				name: data[0].name,
				email: data[0].email,
			})
		);
	} catch (error: any) {
		yield put(
			setError({
				code: 404,
				message: error.message,
			})
		);
	}
}

function* logoutUser() {
	yield put(cleanError());
	yield put(logoutSuccess());
}

export const userSagas = all([
	takeLatest(ActionTypes.userLoginRequest as any, validateUser),
	takeLatest(ActionTypes.userLogoutRequest as any, logoutUser),
]);
