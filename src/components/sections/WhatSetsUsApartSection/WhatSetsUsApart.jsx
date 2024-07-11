import { Element } from 'react-scroll';

import FirstContainerImage from '../../../images/what-sets-us-apart-section/first-container-image.png';
import SecondContainerImage1 from '../../../images/what-sets-us-apart-section/second-container-image-1.png';
import SecondContainerImage2 from '../../../images/what-sets-us-apart-section/second-container-image-2.png';
import ThirdContainerImage from '../../../images/what-sets-us-apart-section/third-container-image.png';
import VectorImage from '../../../images/what-sets-us-apart-section/vector-image.svg';

export const WhatSetsUsApart = () => {
	return (
		<Element name='co-nas-wyroznia'>
			<section className='w-full pb-10'>
				<div className='w-full min-h-screen flex justify-center items-center flex-col'>
					<h3 className='h-full pb-2 max-nsm:pt-16 max-2xl:pt-12 pt-20 lg:pb-4 text-center 2xl:text-4xl md:text-3xl nsm:text-2xl text-2xl font-semibold section-title-gradient'>
						Co wyróżnia nasz preparat
					</h3>
					<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[120px]' />
					<div className='w-full flex justify-center flex-col 2xl:flex-row lg:justify-between items-center max-nsm:pt-20 pt-16 2xl:pt-48 xxxl:px-48 text-center'>
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
									src={FirstContainerImage}
									alt='Obraz przedstawiający Czarciego Pazura'
									className='hover:border-b lg:hover:border-special-black border-b border-transparent pb-4 transition duration-300'
								/>
								<img src={VectorImage} alt='Grafika upiększająca obrazek' className='first-container-vector-image-1' />
								<img
									src={VectorImage}
									alt='Grafika upiększająca obrazek'
									className='first-container-vector-image-2 hidden nsm:block'
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
									src={SecondContainerImage1}
									alt='Obraz przedstawiający głaskanego pieska'
									className='nsm:pr-2 nsm:pb-0 pb-4'
								/>
								<img
									src={SecondContainerImage2}
									alt='Obraz przedstawiający psa jedzącego z miski'
									className='nsm:pl-2 nsm:pb-0 pb-4'
								/>
								<img src={VectorImage} alt='Grafika upiększająca obrazek' className='second-container-vector-image-1' />
								<img src={VectorImage} alt='Grafika upiększająca obrazek' className='second-container-vector-image-2' />
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
									src={ThirdContainerImage}
									alt='Obraz przedstawiający otwartą strzykawkę'
									className='hover:border-b lg:hover:border-special-black border-b border-transparent pb-4 transition duration-300'
								/>
								<img src={VectorImage} alt='Grafika upiększająca obrazek' className='third-container-vector-image-1' />
								<img src={VectorImage} alt='Grafika upiększająca obrazek' className='third-container-vector-image-2' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
};
