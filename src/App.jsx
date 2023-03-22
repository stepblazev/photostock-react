import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import Layout from './components/Layout';

function App() {
	const isAuth = false;

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
