import { Composition } from './components/sections/CompositionSection/Composition';
import { Welcome } from './components/sections/WelcomeSection/Welcome';
import { Navbar } from './components/sections/Navbar/Navbar';
import { Products } from './components/sections/ProductsSection/Products';
import { WhatSetsUsApart } from './components/sections/WhatSetsUsApartSection/WhatSetsUsApart';

const App = () => {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>
				<Welcome />
				<WhatSetsUsApart />
				<Composition />
				<Products />
			</main>
		</div>
	);
};

export default App;
