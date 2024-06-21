import { useNavigate, useRouteError } from 'react-router-dom';

export default function Error() {
	const navigate = useNavigate();
	const error = useRouteError();

	return (
		<div>
			<h1>Oops! Something went wrong...</h1>
			<p>{error.message || error.data}</p>
			<p>%MESSAGE%</p>
			<button onClick={() => navigate(-1)}>Go Back</button>
		</div>
	);
}
