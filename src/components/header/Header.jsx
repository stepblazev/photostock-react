import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import { TbMenu2 } from 'react-icons/tb';
import logo from '../../assets/siteLogo-cropped.svg';
import Search from '../search/Search';
import classes from './header.module.scss';

export default function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.headerContent + ' container'}>
				<div className={classes.headerImage}>
					<img src={logo} alt='LOGO' />
				</div>
				<div className={classes.headerNav}>
					<ul className={classes.headerLinks}>
						<li>
							<Link to='/home' className={classes.link}>
								Home
							</Link>
						</li>
						<li>
							<span
								className={[classes.headerLinksTags, classes.link].join(
									' '
								)}
							>
								Tags
								<IoIosArrowForward />
							</span>
						</li>
					</ul>
					<Search />
				</div>
				<div className={[classes.account, 'hoverable'].join(' ')}>
					<BiUserCircle />
					<span className={classes.link}>Account</span>
				</div>
				<div className={[classes.burger, 'hoverable'].join(' ')}>
					<TbMenu2 />
				</div>
			</div>
			<div className={classes.headerUnderline}></div>
		</header>
	);
}
