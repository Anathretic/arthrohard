import { Element } from 'react-scroll';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import BottleImage from '../../../images/composition-section/bottle-image.png';
import DogImage from '../../../images/composition-section/dog-image.png';
import BottleVectorImage from '../../../images/composition-section/bottle-vector-image.svg';
import DogVectorImage from '../../../images/composition-section/dog-vector-image.svg';
import EllipseImage from '../../../images/composition-section/ellipse-image.svg';

export const Composition = () => {
	return (
		<ParallaxProvider>
			<Element name='sklad'>
				<section className='w-full'>
					<div className='min-h-screen bg-white flex justify-center items-center flex-col'>
						<h3 className='h-full pb-2 pt-12 2xl:pt-20 lg:pb-4 text-center 2xl:text-4xl md:text-3xl nsm:text-2xl text-2xl font-semibold section-title-gradient'>
							Skład w 5 ml
						</h3>
						<div className='h-[1px] border border-special-black w-[50px] lg:w-[80px] 2xl:w-[120px]' />
						<h4 className='max-2xl:pt-16 max-nsm:pt-20 pt-28 font-semibold text-xl lg:text-2xl'>
							Co dają poszczególne składniki:
						</h4>
						<div className='w-full flex justify-center flex-col 2xl:flex-row lg:justify-between items-center pt-16 2xl:pt-28 xxxl:px-48 text-center'>
							<div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 pb-12 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>Siarczan glukozaminy</h5>
									<span className='pb-4'>650 mg</span>
									<p className='px-2'>
										Glukozamina jest naturalnym składnikiem chrząstki. Dodatek glukozaminy przyczynia się do zwiększenia
										produkcji glikozaminoglikanów (m.in. siarczanu keratanu, heparanu, kwasu hialuronowego), które
										pomagają w odbudowie chrząstki, co jest szczególnie korzystne dla zwierząt ze zmianami
										zwyrodnieniowymi stawów.
									</p>
								</div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 pb-12 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>Siarczan chondroityny</h5>
									<span className='pb-4'>300 mg</span>
									<p className='px-2'>
										Chondroityna, podobnie jak glukozamina, jest składnikiem chrząstki. Chondroityna pomaga zwalczać
										enzymy, które niszczą chrząstkę, a także pomaga chrząstce zatrzymać wodę, co jest ważne dla jej
										sprężystości i absorpcji wstrząsów.
									</p>
								</div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 pb-12 2xl:pt-5 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>Kwas hialuronowy</h5>
									<span className='pb-4'>50 mg</span>
									<p className='px-2'>
										Kwas hialuronowy jest kluczowym składnikiem płynu stawowego, który działa jak smar i amortyzator dla
										stawów. Suplementacja kwasem hialuronowym może pomóc w utrzymaniu prawidłowej objętości i
										konsystencji płynu stawowego.
									</p>
								</div>
							</div>
							<div className='2xl:block hidden'>
								<div className='relative'>
									<img
										src={BottleImage}
										alt='Obrazek przedstawiający butelkę preparatu'
										className='bottle-image max-h-[900px]'
									/>
									<img
										src={BottleVectorImage}
										alt='Grafika upiększająca obrazek preparatu'
										className='first-bottle-vector-image'
									/>
									<img
										src={BottleVectorImage}
										alt='Grafika upiększająca obrazek preparatu'
										className='second-bottle-vector-image'
									/>
								</div>
								<button
									type='button'
									className='m-0 my-4 py-2 px-16 bg-[#AD4844] text-white hover:bg-[#79322F] transition duration-300'>
									Kup teraz
								</button>
							</div>
							<div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 pb-12 2xl:pb-28 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>Czarci pazur</h5>
									<span className='pb-4'>250 mg</span>
									<p className='px-2'>
										Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i przeciwbólowe. Może to pomóc
										zwierzętom, które doświadczają bólu i stanu zapalnego związanego z problemami ze stawami.
									</p>
								</div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 pb-12 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>Witamina C</h5>
									<span className='pb-4'>50 mg</span>
									<p className='px-2'>
										Witamina C jest potężnym przeciwutleniaczem, który może pomóc w ochronie stawów poprzez
										neutralizację wolnych rodników, które mogą uszkadzać chrząstkę. Ponadto, witamina C odgrywa ważną
										rolę w produkcji kolagenu, kluczowego składnika chrząstki.
									</p>
								</div>
								<div className='flex justify-center items-center flex-col max-w-[400px] max-lg:px-4 2xl:pt-1 pb-12 highlight-on-hover'>
									<img src={EllipseImage} alt='Grafika poglądowa składnika' />
									<h5 className='font-semibold text-xl lg:text-2xl py-5'>MSM</h5>
									<span className='pb-4'>250 mg</span>
									<p className='px-2'>
										Metylosulfonylometan, czyli MSM, to naturalny związek siarki, który pomaga w utrzymaniu zdrowych
										stawów poprzez zmniejszenie stanu zapalnego i bólu. MSM może również pomagać w produkcji kolagenu,
										co przyczynia się do zdrowia chrząstki stawowej.
									</p>
								</div>
							</div>
						</div>
						<button
							type='button'
							className='m-8 lg:m-0 lg:my-4 py-2 px-8 md:px-16 bg-[#AD4844] text-white md:hover:bg-[#79322F] 2xl:hidden transition duration-300'>
							Kup teraz
						</button>
						<div className='2xl:mt-32 lg:mt-20 mt-12 max-w-[1000px]'>
							<div className='relative w-full h-full'>
								<Parallax speed={15}>
									<img src={DogImage} alt='Obrazek przedstawiający psa' className='dog-image' />
									<img
										src={DogVectorImage}
										alt='Grafika upiększająca obrazek psa'
										className='first-dog-vector-image block max-2xl:w-1/3'
									/>
									<img
										src={DogVectorImage}
										alt='Grafika upiększająca obrazek psa'
										className='second-dog-vector-image 2xl:block hidden'
									/>
								</Parallax>
							</div>
						</div>
					</div>
				</section>
			</Element>
		</ParallaxProvider>
	);
};
