import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

import { Login } from './pages/Login';

export function Router(): JSX.Element {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
		</Routes>
	);
}
