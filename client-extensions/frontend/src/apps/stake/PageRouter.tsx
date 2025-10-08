import { useSearchParams } from 'react-router-dom';
import { Home, Withdraw, Claim } from './pages';

export const PageRouter = () => {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page');

	if (page === 'stake') {
		return <Home />;
	} else if (page === 'withdraw') {
		return <Withdraw />;
	} else if (page === 'claim') {
		return <Claim />;
	} else {
		return <Home />;
	}
};
