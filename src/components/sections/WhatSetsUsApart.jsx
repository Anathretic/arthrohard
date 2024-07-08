import { Element } from 'react-scroll';

import FirstImage from '../../images/what-sets-us-apart-section/first-image.svg';
import SecondImage1 from '../../images/what-sets-us-apart-section/second-image-1.svg';
import SecondImage2 from '../../images/what-sets-us-apart-section/second-image-2.svg';
import ThirdImage from '../../images/what-sets-us-apart-section/third-image.svg';
import VectorImage from '../../images/what-sets-us-apart-section/vector-image.svg';

export const WhatSetsUsApart = () => {
	return (
		<Element name='co-nas-wyroznia'>
			<section className='w-full pb-10'>
				<div className='w-full min-h-screen flex justify-center items-center flex-col'>
					<h3 className='h-full pb-2 max-2xl:pt-12 pt-20 lg:pb-4 text-center 2xl:text-4xl md:text-3xl nsm:text-2xl text-2xl font-semibold title-gradient'>
						Co wyróżnia nasz preparat
					</h3>
					<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[120px]' />
					<div className='w-full flex justify-center flex-col 2xl:flex-row lg:justify-between items-center pt-16 2xl:pt-48 xxxl:px-48 text-center'>
						<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4'>
							<h4 className='font-semibold text-xl lg:text-2xl'>
								Innowacyjny dodatek - <br /> Czarciego Pazura
							</h4>
							<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[100px] my-5' />
							<p className='pb-5'>
								Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i zapalnych. Skoncentrowane składniki aktywne,
								opracowane we współpracy z lekarzami weterynarii, przynoszą szybkie i zauważalne efekty, szczególnie
								korzystne dla zwierząt z poważnymi problemami stawowymi.
							</p>
							<div className='relative w-full h-full flex items-center justify-center'>
								<img
									src={FirstImage}
									alt='Obraz przedstawiający Czarciego Pazura'
									className='hover:border-b lg:hover:border-special-black border-b border-transparent pb-4 transition duration-300'
								/>
								<img src={VectorImage} alt='Grafika wektorowa upiększająca obrazek' className='first-image-vector' />
								<img
									src={VectorImage}
									alt='Grafika wektorowa upiększająca obrazek'
									className='second-image-vector hidden nsm:block'
								/>
							</div>
						</div>
						<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4'>
							<h4 className='font-semibold text-xl lg:text-2xl max-lg:pt-8'>
								Wygoda - <br />
								dwa sposoby podawania
							</h4>
							<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[100px] my-5' />
							<div className='pt-3 pb-5'>
								<p className='pb-10 text-left '>
									<span className='mr-3  bg-white rounded-full special-first-number-box-shadow font-semibold'>1</span>
									Bezpośrednio do pyszczka
								</p>
								<p className='pb-10 text-left'>
									<span className='mr-3 bg-white rounded-full special-second-number-box-shadow font-semibold'>2</span>
									Zmieszany z karmą
								</p>
							</div>
							<div className='relative w-full h-full flex items-center justify-center flex-col nsm:flex-row hover:border-b lg:hover:border-special-black border-b border-transparent pb-4 transition duration-300'>
								<img
									src={SecondImage1}
									alt='Obraz przedstawiający głaskanego pieska'
									className='nsm:pr-2 nsm:pb-0 pb-4'
								/>
								<img
									src={SecondImage2}
									alt='Obraz przedstawiający psa jedzącego z miski'
									className='nsm:pl-2 nsm:pb-0 pb-4'
								/>
								<img src={VectorImage} alt='Grafika wektorowa upiększająca obrazek' className='third-image-vector' />
								<img src={VectorImage} alt='Grafika wektorowa upiększająca obrazek' className='fourth-image-vector' />
							</div>
						</div>
						<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4'>
							<h4 className='font-semibold text-xl lg:text-2xl max-lg:pt-8'>
								Skuteczność - <br />
								skoncentrowana dawka
							</h4>
							<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[100px] my-5' />
							<p className='pb-5'>
								<span className='font-semibold'>Tylko jedna porcja dziennie.</span>
								<br /> To nie tylko wygoda, ale również gwarancja, że Twoje zwierzę otrzymuje wszystko, czego
								potrzebuje, aby cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z zalet Arthrohard i zobacz
								różnicę w komforcie życia swojego zwierzęcia.
							</p>
							<div className='relative w-full h-full flex items-center justify-center'>
								<img
									src={ThirdImage}
									alt='Obraz przedstawiający otwartą strzykawkę'
									className='hover:border-b lg:hover:border-special-black border-b border-transparent pb-4 transition duration-300'
								/>
								<img src={VectorImage} alt='Grafika wektorowa upiększająca obrazek' className='fifth-image-vector' />
								<img src={VectorImage} alt='Grafika wektorowa upiększająca obrazek' className='sixth-image-vector' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
};
