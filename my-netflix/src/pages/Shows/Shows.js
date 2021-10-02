import axios from 'axios';
import React from 'react';

export default function Shows() {
	let shows;
	const getShows = async () => {
		try {
			const response = await axios.get('https://api.tvmaze.com/shows');
			shows = response.data;
		} catch (err) {
			console.log(err);
		}
	};

	getShows();
	console.log(shows);

	return (
		<>
			<h1>Shows</h1>
			<div className={'shows-wrap'}>
				{/* {shows.map((show, index) => (
					<div className={'show'} key={index}></div>
				))} */}
			</div>
		</>
	);
}
