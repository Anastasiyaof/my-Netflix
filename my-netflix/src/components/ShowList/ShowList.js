import React, { useContext } from 'react';

export const ShowList = props => {
	console.log('list props', props);

	return props.arr.map((show, index) => (
		<div className={props.className} key={index}>
			<img src={show.image.medium} alt={show.name} />
		</div>
	));
};
