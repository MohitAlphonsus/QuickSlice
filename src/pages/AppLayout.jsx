import { Header } from '../components';
import { CartOverview } from '../features';
export default function AppLayout() {
	return (
		<section>
			<Header />

			<main>
        <h1>Content</h1>
      </main>

			<CartOverview />
		</section>
	);
}
