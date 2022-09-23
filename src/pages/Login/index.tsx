import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/modules/user/slice';
import { IUserState } from '../../redux/modules/user/types';
import { IState } from '../../redux/types';

export function Login(): JSX.Element {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { user: userState, error: errorState } = useSelector<IState>(
		(state) => state
	) as IState;
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		dispatch(
			loginRequest({
				email,
				password,
			})
		);
	};

	useEffect(() => {
		if (!!userState.user) {
			navigate('/dashboard');
		}
	}, [userState]);

	return (
		<main>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<input
					type='email'
					placeholder='E-mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Login</button>
				{!!errorState ? <p>{errorState.error?.message}</p> : null}
			</form>
		</main>
	);
}
