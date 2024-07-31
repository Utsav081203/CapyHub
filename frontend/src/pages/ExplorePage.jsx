const ExplorePage = () => {
	return (
		<div className='px-4'>
			<div className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border
		hover:bg-gray-600/10 border-gray-800 text-white max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='../../public/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer' />
					<img src='../../public/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='../../public/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='../../public/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='../../public/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};

export default ExplorePage;