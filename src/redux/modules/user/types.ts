export enum ActionTypes {
	userLoginRequest = 'user/loginRequest',
	userLoginSuccess = 'user/loginSuccess',
	userLoginFailure = 'user/loginFailure',

	userLogoutRequest = 'user/logoutRequest',
	userLogoutSuccess = 'user/logoutSuccess',
	userLogoutFailure = 'user/logoutFailure',
}

export interface IUser {
	name: string;
	email: string;
}

export interface IUserState {
	user: IUser | null;
}
