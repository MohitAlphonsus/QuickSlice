import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Home } from './pages';
import { Menu, Cart, CreateOrder, Order } from './features';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/app',
		element: <AppLayout />,
		children: [
			{
				path: 'app/menu',
				element: <Menu />,
			},
			{
				path: 'app/cart',
				element: <Cart />,
			},
			{
				path: 'app/order/new',
				element: <CreateOrder />,
			},
			{
				path: 'app/order/:orderId',
				element: <Order />,
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
