/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			screens: {
				rrsm: '315px',
				rsm: '350px',
				nsm: '500px',
				mf: '990px',
				xxxl: '1726px',
			},
			keyframes: {
				'slide-in': {
					'0%': {
						'-webkit-transform': 'translateX(120%)',
						transform: 'translateX(120%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0%)',
						transform: 'translateX(0%)',
					},
				},
			},
			animation: {
				'slide-in': 'slide-in 0.5s ease-out',
			},
			colors: {
				'special-black': '#111111',
			},
		},
	},
	plugins: [],
};
