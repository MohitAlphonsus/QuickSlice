import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiPizza';
import { MenuItem } from '../../features';

export default function Menu() {
	const menu = useLoaderData();

	return (
		<div>
			<ul
				className="gap-4"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
				}}
			>
				{menu.map(pizza => (
					<MenuItem key={pizza.id} pizza={pizza} />
				))}
			</ul>
		</div>
	);
}

export async function loader() {
	const menu = await getMenu();
	return menu;
}
