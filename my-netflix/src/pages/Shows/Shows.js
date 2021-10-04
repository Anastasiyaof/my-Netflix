import React, { useContext, useEffect, useState, useMemo } from 'react';
import { ShowList } from '../../components/ShowList/ShowList';
import { TVapiContext } from '../../context/tvapi/TVapiContext';
import './Show.scss';

export default function Shows() {
	const [page, setPage] = useState(1);
	const [top, setTop] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const { getShows, shows, loading } = useContext(TVapiContext);

	/* useMemo(() => {
		console.log('useMemo');
		return getShows();
	}, [page]); */

	useEffect(() => getShows(), [page]);
	useEffect(() => setTop(getTop()), [shows]);
	useEffect(() => setSuggestions(getSuggestions()), [shows]);
	console.log(shows);

	function getTop() {
		return shows
			.sort((item1, item2) => item2.rating - item1.rating)
			.slice(0, 10);
	}

	function getSuggestions() {
		if (shows.length === 0) {
			return;
		}
		const numbers = [];
		const topIds = top.map(show => show.id);
		while (numbers.length < 10) {
			let max = shows.length - 1;
			let n = Math.floor(1 + Math.random() * max);
			if (!numbers.includes(n) && !topIds.includes()) {
				numbers.push(n);
			}
		}
		return numbers.map((item, index) => shows[index]);
	}
	return (
		<>
			{!loading > 0 ? (
				<>
					<h2>Top 10</h2>
					<div className={'shows-wrap'}>
						{console.log(top)}
						{console.log(suggestions)}

						<ShowList className={'show'} arr={top} />
					</div>
					{top.length > 0 ? (
						<>
							<h2>Suggestions</h2>
							<div className={'shows-wrap'}>
								<ShowList className={'show'} arr={suggestions} />
							</div>
						</>
					) : null}

					<h1>Shows</h1>
					<div className={'shows-wrap'}>
						{shows.map((show, index) => (
							<div className={'show'} key={index}>
								<img src={show.image.medium} alt={show.name} />
							</div>
						))}
					</div>
					<button onClick={() => setPage(2)}>Next</button>
				</>
			) : null}
		</>
	);
}
