import React, {Component} from 'react';
import './Time.css';

function Time({ms}) {
	const hours = Math.floor(ms / 1000 / 60 / 60);
	const minutes = Math.floor( (ms / 60 / 1000) - hours * 60 );
	const seconds = Math.floor( (ms / 1000) - (minutes * 60 + hours * 60 * 60) );

	return (
		<span className="time">
			<span className='hours'>{hours}</span>:<span className='minutes'>{minutes}</span>:<span className='seconds'>{seconds}</span>
		</span>
	)
}

export default Time;