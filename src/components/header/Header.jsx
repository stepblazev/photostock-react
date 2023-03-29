import { Link } from 'react-router-dom';
import { BiUserCircle, BiLogInCircle } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { useSelector } from 'react-redux';
import logo from '../../assets/siteLogo-cropped.svg';
import Search from '../search/Search';
import classes from './header.module.scss';

export default function Header() {
	const { isAuth } = useSelector((state) => state.auth);

	return (
		<header className={classes.header}>
			<div className={classes.headerContent + ' container'}>
				<Link to='/home' className={classes.headerImage}>
					<img src={logo} alt='LOGO' />
				</Link>
				<div className={classes.headerNav}>
					<ul className={classes.headerLinks}>
						<li>
							<Link to='/home' className={classes.link}>
								Home page
							</Link>
						</li>
					</ul>
					<Search />
				</div>
				{isAuth ? (
					<>
						<Link
							to='/profile'
							className={[classes.account, 'hoverable'].join(' ')}
						>
							<BiUserCircle />
							<span className={classes.link}>Account</span>
						</Link>
						<Link
							to='/logout'
							className={[classes.account, 'hoverable'].join(' ')}
						>
							<ImExit />
							<span className={classes.link}>Logout</span>
						</Link>
					</>
				) : (
					<>
						<Link
							to='/registration'
							className={[classes.registration, 'hoverable'].join(' ')}
						>
							<AiOutlineUsergroupAdd />
							<span className={classes.link}>Sign Up</span>
						</Link>
						<Link to='/login' className={[classes.login].join(' ')}>
							<BiLogInCircle />
							<span className={classes.link}>Log In</span>
						</Link>
					</>
				)}
			</div>
			<div className={classes.headerUnderline}></div>
		</header>
	);
}
