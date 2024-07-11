import { useState, useEffect, useRef, useCallback } from 'react';
import useSWR from 'swr';
import { Element } from 'react-scroll';
import { ProductPopup } from './components/ProductPopup';

const URL = 'https://brandstestowy.smallhost.pl/api/';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const Products = () => {
	const [productArrayValue, setProductArrayValue] = useState(8);
	const [isVisible, setIsVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const sectionRef = useRef(null);
	const observerRef = useRef(null);

	const { data, error } = useSWR(
		isVisible ? `${URL}random?pageNumber=1&pageSize=${productArrayValue}` : null,
		fetcher,
		{
			keepPreviousData: true,
		}
	);

	const onScroll = useCallback(() => {
		const scrolledTo = window.scrollY + window.innerHeight;
		if (document.body.scrollHeight === scrolledTo) {
			setProductArrayValue(prev => prev + 12);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [onScroll]);

	useEffect(() => {
		if (!observerRef.current) {
			observerRef.current = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting && !isVisible) {
						console.log('Section is visible, setting isVisible to true');
						setIsVisible(true);
						observerRef.current.disconnect();
					}
				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0.1,
				}
			);
		}
		if (sectionRef.current) {
			observerRef.current.observe(sectionRef.current);
		}
		return () => {
			if (sectionRef.current) {
				observerRef.current.unobserve(sectionRef.current);
			}
		};
	}, [isVisible]);

	const changeProductArrayValue = e => {
		setProductArrayValue(Number(e.currentTarget.value));
	};

	const handleClick = item => {
		setSelectedItem(item);
	};

	const closePopup = () => {
		setSelectedItem(null);
	};

	return (
		<Element name='produkty'>
			<section ref={sectionRef} className='w-full pb-20'>
				<div className='min-h-screen flex items-center flex-col'>
					<div className='pt-12 2xl:pt-20 flex flex-col nsm:flex-row'>
						<span className='border border-[#AD4844] p-2 font-semibold'>liczba produktów na stronie</span>
						<select
							className='p-2 px-4 pl-9 nsm:pl-0 bg-[#AD4844] text-white products-select w-full nsm:w-[90px] text-center nsm:text-left'
							value={productArrayValue}
							onChange={changeProductArrayValue}>
							<option value='10'>10</option>
							<option value='20'>20</option>
							<option value='40'>40</option>
							<option value='50'>50</option>
							<option value={`${productArrayValue}`} disabled hidden>
								{productArrayValue}
							</option>
						</select>
					</div>
					<div className='flex items-center justify-center'>
						<div className='flex items-center justify-center flex-wrap py-20 xxxl:pb-24'>
							<>
								{error && <p>Niestety wystąpił błąd..</p>}
								{data && (
									<>
										{data.data.map(item => (
											<div
												key={item.id}
												className='flex m-4 items-center justify-center w-[220px] h-[220px] rsm:w-[330px] rsm:h-[330px] nsm:w-[350px] nsm:h-[350px] bg-[#BEBEBE] cursor-pointer'
												onClick={() => handleClick(item)}>
												<p className='font-semibold text:lg nsm:text-xl'>ID: {item.id}</p>
											</div>
										))}
									</>
								)}
							</>
						</div>
					</div>
				</div>
				{selectedItem && <ProductPopup item={selectedItem} onClose={closePopup} />}
			</section>
		</Element>
	);
};
