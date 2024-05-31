import hero from '../assets/hero.png';
import { Button } from '../components';

export default function Home() {
	return (
		<section className="lg:h-screen flex flex-col lg:flex-row gap-4 items-center py-4 lg:py-0 px-4 lg:px-12">
			<div className="text-stone-950 flex flex-col gap-2 lg:gap-4 items-center text-center lg:text-left lg:items-start  lg:w-1/2">
				<span className="uppercase font-semibold tracking-wider text-xl ">
					Fresh Pizza, Lightning Fast
				</span>
				<h1 className="text-6xl leading-[1.1em] font-medium">
					Satisfy Your Pizza <span className="text-orange-600">Cravings</span>{' '}
					Faster Than Ever
				</h1>
				<p className="text-lg opacity-90">
					Hungry for pizza? Get your favorite slices delivered to your door in
					no time. Our app ensures you enjoy hot, fresh pizza with minimal wait.
					Quick, easy, and delicious – that's our promise to you.
				</p>
				<Button>Get Your Pizza Now</Button>
			</div>
			<div className="lg:w-1/2">
				<img
					src={hero}
					alt="hero image of well decorated served pizza on wooden plate"
					className="w-full block"
				/>
			</div>
		</section>
	);
}
