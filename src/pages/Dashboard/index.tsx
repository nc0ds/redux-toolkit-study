import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/types';
import { IUserState } from '../../redux/modules/user/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutRequest } from '../../redux/modules/user/slice';

export function Dashboard(): JSX.Element {
	const userState = useSelector<IState, IUserState>((state) => state.user);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutRequest());
	};

	useEffect(() => {
		if (!userState.user) {
			navigate('/');
		}
	}, [userState]);

	return (
		<>
			<h1>Dashboard</h1>
			<p>Hello {userState.user?.name}</p>
			<button type='button' onClick={handleLogout}>
				Logout
			</button>
		</>
	);
}
