import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading } from '../components';
import { CartOverview } from '../features';
import SearchOrder from '../features/order/SearchOrder';
export default function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';
	return (
		<section>
			{isLoading && <Loading />}
			<Header />
			<SearchOrder />

			<main className="px-4 pt-4 pb-16">
				<Outlet />
			</main>

			<CartOverview />
		</section>
	);
}
