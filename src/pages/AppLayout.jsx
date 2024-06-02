import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { CartOverview } from '../features';
export default function AppLayout() {
	return (
		<section>
			<Header />

			<main className="p-4">
				<h1>Content</h1>
				<Outlet />
			</main>

			<CartOverview />
		</section>
	);
}
