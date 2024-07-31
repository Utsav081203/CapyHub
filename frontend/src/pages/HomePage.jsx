import React from 'react';
import Search from '../components/Search.jsx';
import SortRepos from '../components/SortRepos.jsx';
import ProfileInfo from '../components/ProfileInfo.jsx';
import Repos from '../components/Repos.jsx';
import Spinner from '../components/Spinner.jsx';

const HomePage = () => {
	return (
		<div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {/* for large width screens lg:flex-row and for small width screens one above other */}
				<ProfileInfo />
				<Repos />
        		{/* <Spinner /> */}
			</div>
		</div>
	);
};

export default HomePage;
