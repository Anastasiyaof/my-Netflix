import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_SHOWS, SET_LOADING } from '../types';
import { TVapiContext } from './TVapiContext';
import { TVapiReducer } from './TVapiReducer';

export const TVapiState = ({ children }) => {
	const initialState = {
		shows: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(TVapiReducer, initialState);

	const setLoading = () => dispatch({ type: SET_LOADING });

	const getShows = async () => {
		setLoading();
		try {
			const response = await axios.get('https://api.tvmaze.com/shows');
			let shortResponse = response.data.slice(0, 20).map(show => {
				return {
					id: show.id,
					name: show.name,
					type: show.type,
					genres: show.genres,
					rating: show.rating.average,
					image: show.image,
				};
			});

			dispatch({
				type: GET_SHOWS,
				payload: shortResponse,
			});
		} catch (err) {
			console.log(err);
		}
	};
	const { shows, loading } = state;

	return (
		<TVapiContext.Provider value={{ getShows, shows, loading }}>
			{children}
		</TVapiContext.Provider>
	);
};
