import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Home } from './pages';
import { Menu, Cart, CreateOrder, Order } from './features';
import { loader as MenuLoader } from './features/menu/Menu';
import { loader as OrderLoader } from './features/order/Order';
import { action as CreateOrderAction } from './features/order/CreateOrder';
import { Error } from './components';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/app/menu',
				element: <Menu />,
				loader: MenuLoader,
				errorElement: <Error />,
			},
			{
				path: '/app/cart',
				element: <Cart />,
			},
			{
				path: '/app/order/new',
				element: <CreateOrder />,
				action: CreateOrderAction,
			},
			{
				path: '/app/order/:orderId',
				element: <Order />,
				loader: OrderLoader,
				errorElement: <Error />,
			},
		],
	},
]);

export default function App() {
	return (
		<div className="max-w-[114rem] mx-auto my-0">
			<RouterProvider router={router} />
		</div>
	);
}
