import { useEffect } from 'react';
import { logout } from '../../redux/authorization/actions';
import { useDispatch } from 'react-redux';

export default function Logout() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(logout());
	}, []);

	return <></>;
}
