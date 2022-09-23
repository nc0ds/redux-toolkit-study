import { all } from 'redux-saga/effects';
import { userSagas } from './user/sagas';

export const rootSagas = function* () {
	yield all([userSagas]);
};
