export const ProductPopup = ({ item, onClose }) => {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10'>
			<div className='relative bg-white p-4 rounded w-10/12 lg:w-full max-w-[790px]'>
				<h6 className='text-xl font-semibold pb-2'>ID {item.id}</h6>
				<p className='text-xl font-semibold py-6'>
					Nazwa: <span className='font-normal'>{item.name}</span>
				</p>
				<p className='text-xl font-semibold pb-4'>
					Wartość: <span className='font-normal'>{item.value}</span>
				</p>
				<button onClick={onClose} className='absolute px-4 py-2 right-2 top-2 font-semibold text-lg'>
					X
				</button>
			</div>
		</div>
	);
};
