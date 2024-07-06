import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItem } from '../NavbarItem';

const navbarItems = [
	{
		title: 'co nas wyróżnia',
		section: 'co-nas-wyroznia',
	},
	{
		title: 'skład',
		section: 'sklad',
	},
	{
		title: 'produkty',
		section: 'produkty',
	},
];

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleLogo = () => {
		window.location.href = '#';
	};

	return (
		<header>
			<div className='fixed top-0 w-full md:h-[120px] h-[80px] flex md:justify-center justify-between items-center py-4 mf:py-2 z-10 transition duration-300 mr-auto tracking-widest bg-white shadow-gray-400 shadow-md'>
				<div className='md:flex-[0.8] xl:ml-48 2xl:ml-64 2xl:flex-[0.5] flex-initial justify-center items-center'>
					<div className='flex items-center mf:mx-2'>
						<h2 className='cursor-pointer p-2 mf:p-0 uppercase font-semibold md:text-3xl text-xl' onClick={handleLogo}>
							arthro<span className='text-red-600'>hard</span>
						</h2>
					</div>
				</div>
				<nav>
					<ul className='text-black md:flex hidden list-none flex-row justify-between items-center flex-initial xxxl:ml-40'>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem key={title} title={title} section={section} classProps={'hover:text-red-600'} />
						))}
					</ul>
				</nav>
				<div className='xl:flex hidden w-1/4' />
				<div className='flex relative'>
					{toggleMenu || (
						<HiMenuAlt4
							fontSize={32}
							className='text-black md:hidden cursor-pointer mx-2 sm:mx-4'
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<nav>
							<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-black animate-slide-in'>
								<li className='text-xl self-start my-2 cursor-pointer'>
									<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
								</li>
								{navbarItems.map(({ title, section }) => (
									<NavbarItem
										key={title}
										title={title}
										section={section}
										classProps={'mb-5'}
										onClick={() => {
											setToggleMenu(false);
										}}
									/>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
