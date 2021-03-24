import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Admin() {
	const router = useRouter();
	const [isLogin, setIsLogin] = useState(false);

	const checkLogin = () => {
		axios.get('/api/isLogin').then((res) => {
			if (res.status === 200 && res.data.name) {
				setIsLogin(true);
			} else {
				router.push('/login');
			}
		});
	};

	const logout = () => {
		axios.get('/api/logout').then(res => {
			if (res.status === 200) {
				router.push('/');
			}
		});
	};

	useEffect(() => {
		checkLogin();
	}, []);

	return (
		<>
			Admin;
			{isLogin && <Button onClick={logout}>Logout</Button>}
		</>
	);
};