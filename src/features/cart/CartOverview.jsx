import { Link } from 'react-router-dom';
export default function CartOverview() {
	return (
		<div>
			<p>
				<span>20 Pizzas</span>
				<span>$25.20</span>
			</p>
			<Link to="/app/cart">Open Cart &rarr;</Link>
		</div>
	);
}
