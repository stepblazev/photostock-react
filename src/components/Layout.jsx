import Header from './header/Header';
import Footer from './footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='main__content container'>{children}</div>
			</main>
			<Footer />
		</>
	);
}
