import HeroImage from '../../images/hero-image.png';
import VectorImage from '../../images/special-elements/hero-vector.png';
import BgVectorImage from '../../images/special-elements/bg-vector.svg';
import BgSecondVectorImage from '../../images/special-elements/bg-vector-2.svg';
import BgThirdVectorImage from '../../images/special-elements/bg-vector-3.svg';

export const HeroImageSection = () => {
	return (
		<section className='relative min-h-screen flex justify-center items-center md:pt-[120px] pt-[80px] w-full'>
			<div className='flex justify-center lg:justify-between items-center flex-col lg:flex-row'>
				<div className='pt-10 lg:pt-0 lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] 2xl:ml-10 xxxl:ml-20'>
					<div className='relative w-full h-full'>
						<img src={HeroImage} alt='Obrazek przedstawiający preparat leczniczy Arthrohard' />
						<img
							src={VectorImage}
							alt='Grafika wektorowa upiększająca obrazek preparatu'
							className='first-hero-vector'
						/>
						<img
							src={VectorImage}
							alt='Grafika wektorowa upiększająca obrazek preparatu'
							className='second-hero-vector'
						/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col text-center lg:items-start lg:text-left lg:pr-20'>
					<h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase p-4 lg:p-0 lg:pb-8'>
						Arthro<span className='text-red-600'>hard</span>
					</h1>
					<p className='p-2 lg:p-0 lg:py-2 text-xl lg:text-2xl font-medium'>
						Lab-V Arthrohard Preparat <br /> na wsparcie stawów psa i kota
					</p>
					<span className='py-2 px-2 md:px-20 lg:px-0 lg:pr-10 2xl:pr-48'>
						Arthrohard to dobrze przyswajalny suplement diety w formie syropu, stworzony z myślą o zdrowiu stawów
						Twojego psa lub kota.
					</span>
					<button
						type='button'
						className='m-8 lg:m-0 lg:my-4 py-2 px-8 md:px-16 bg-[#30AB4C] text-white md:hover:bg-[#217735] transition duration-300'>
						Kup teraz
					</button>
				</div>
			</div>
			<img
				src={BgVectorImage}
				alt='Grafika wektorowa upiększająca sekcję'
				className='first-bg-vector'
			/>
			<img
				src={BgSecondVectorImage}
				alt='Grafika wektorowa upiększająca sekcję'
				className='second-bg-vector 2xl:block hidden'
			/>
			<img
				src={BgThirdVectorImage}
				alt='Grafika wektorowa upiększająca sekcję'
				className='third-bg-vector 2xl:block hidden'
			/>
		</section>
	);
};
