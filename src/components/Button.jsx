export default function Button({ children, onClick }) {
	return (
		<button
			className="bg-orange-600 text-stone-50 text-xl font-bold px-4 py-2 rounded-md"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
