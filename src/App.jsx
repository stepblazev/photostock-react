import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					path='/'
					element={
						<h1 style={{ textAlign: 'center', padding: '30px' }}>CONTENT</h1>
					}
				/>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Layout>
	);
}

export default App;
