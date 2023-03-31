import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import { refresh } from './redux/authorization/actions';
import Layout from './components/Layout';

function App() {
	const { isAuth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(refresh());
		}
	}, []);

	return (
		<Layout>
			<Routes>
				{(isAuth ? privateRoutes : publicRoutes).map((rt) => (
					<Route key={rt.path} path={rt.path} element={<rt.element />} />
				))}
				<Route path='*' element={<Navigate to='/images' />} />
			</Routes>
		</Layout>
	);
}

export default App;
