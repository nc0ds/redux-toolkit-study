import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './modules/rootReducers';
import { rootSagas } from './modules/rootSagas';
import { IState } from './types';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
	reducer: rootReducers,
	middleware: middlewares,
});

sagaMiddleware.run(rootSagas);
