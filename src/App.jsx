import { Composition } from './components/sections/Composition';
import { HeroImageSection } from './components/sections/HeroImageSection';
import { Navbar } from './components/sections/Navbar';
import { Products } from './components/sections/Products';
import { WhatSetsUsApart } from './components/sections/WhatSetsUsApart';

const App = () => {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>
				<HeroImageSection />
				<WhatSetsUsApart />
				<Composition />
				<Products />
			</main>
		</div>
	);
};

export default App;
