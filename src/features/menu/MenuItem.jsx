import { formatCurrency } from '../../utils/helpers';
export default function MenuItem({ pizza }) {
	const { name, ingredients, price, image, category } = pizza;
	return (
		<div className="shadow-lg">
			<img src={image} alt={name} />
			<div className="p-4 flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<span
						className={`h-4 w-4 border-2 ${
							category === 'veg' ? 'border-green-600' : 'border-red-600'
						} relative after:absolute after:h-2 after:w-2 after:rounded-full ${
							category === 'veg' ? 'after:bg-green-600' : 'after:bg-red-600'
						} after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2`}
					></span>
					<span className="text-xs font-semibold uppercase">{category}</span>
				</div>
				<h4 className="text-2xl">{name}</h4>
				<p className="italic text-sm text-stone-700">
					{ingredients.map(i => `${i}, `)}
				</p>
				<span className="text-xl font-semibold mt-auto">
					{formatCurrency(price)}
				</span>
			</div>
		</div>
	);
}
