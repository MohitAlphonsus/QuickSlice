import { Link } from 'react-router-dom';
export default function CartOverview() {
	return (
		<div className="fixed bottom-0 left-0 right-0 text-stone-50 bg-orange-950 flex items-center ">
			<p className="flex items-center gap-4 px-8 ">
				<span>2 Pizzas</span>
				<span>$25.20</span>
			</p>
			<Link
				to="/app/cart"
				className="ml-auto bg-orange-900 py-4 px-8 hover:bg-orange-800"
			>
				Open Cart &rarr;
			</Link>
		</div>
	);
}
