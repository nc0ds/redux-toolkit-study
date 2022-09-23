import { IUserState } from './modules/user/types';
import { IError } from './modules/error/types';

export interface IState {
	user: IUserState;
	error: IError | null;
}
