import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

export const NavbarItem = ({ title, section, classProps, onClick, ...linkProps }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 768px)',
	});

	return (
		<li className={`mx-2 mf:mx-4 cursor-pointer transition duration-300 ${classProps} uppercase z-10 text-center`}>
			<Link
				to={section}
				className={`${isMobile ? '' : 'p-2'}`}
				onClick={onClick}
				{...linkProps}
				smooth
				spy
				duration={500}
				offset={isMobile ? -80 : -120}
				activeStyle={isMobile ? { color: 'rgb(239, 68, 68)' } : { borderBottom: '1px solid #111111' }}>
				{title}
			</Link>
		</li>
	);
};
