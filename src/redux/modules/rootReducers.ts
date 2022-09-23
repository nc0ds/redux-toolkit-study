import { combineReducers } from 'redux';

import user from './user/slice';
import error from './error/slice';

export const rootReducers = combineReducers({
	user,
	error,
});
