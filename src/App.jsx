import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

function App() {
	const { isAuth } = useSelector((state) => state.auth);

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
