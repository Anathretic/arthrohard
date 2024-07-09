import BottlesImage from '../../../images/welcome-section/bottles-image.png';
import BottlesVectorImage from '../../../images/welcome-section/bottles-vector-image.svg';
import FirstBgVectorImage from '../../../images/welcome-section/first-bg-vector-image.svg';
import SecondBgVectorImage from '../../../images/welcome-section/second-bg-vector-image.svg';
import ThirdBgVectorImage from '../../../images/welcome-section/third-bg-vector-image.svg';

export const Welcome = () => {
	return (
		<section className='relative min-h-screen flex justify-center items-center md:pt-[120px] pt-[80px] w-full'>
			<div className='flex justify-center lg:justify-between items-center flex-col lg:flex-row'>
				<div className='pt-10 lg:pt-0 lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] 2xl:ml-10 xxxl:ml-20'>
					<div className='relative w-full h-full'>
						<img src={BottlesImage} alt='Obrazek przedstawiający preparat leczniczy Arthrohard' />
						<img
							src={BottlesVectorImage}
							alt='Grafika upiększająca obrazek preparatu'
							className='first-bottles-vector-image'
						/>
						<img
							src={BottlesVectorImage}
							alt='Grafika upiększająca obrazek preparatu'
							className='second-bottles-vector-image'
						/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col text-center lg:items-start lg:text-left lg:pr-20'>
					<h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase p-4 lg:p-0 lg:pb-8'>
						Arthro<span className='text-red-600'>hard</span>
					</h1>
					<p className='p-2 lg:p-0 lg:py-2 text-xl lg:text-2xl font-medium xxxl:text-3xl subtitle-gradient'>
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
			<img src={FirstBgVectorImage} alt='Grafika upiększająca sekcję' className='first-bg-vector-image' />
			<img
				src={SecondBgVectorImage}
				alt='Grafika upiększająca sekcję'
				className='second-bg-vector-image 2xl:block hidden'
			/>
			<img
				src={ThirdBgVectorImage}
				alt='Grafika upiększająca sekcję'
				className='third-bg-vector-image 2xl:block hidden'
			/>
		</section>
	);
};
