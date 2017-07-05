import React from 'react';
import './PlayBtn.css';

import FontAwesome from 'react-fontawesome';

class PlayBtn extends React.Component {

	render() {
		return (
			<FontAwesome
				className='play-btn'
				name={this.props.play ? 'stop' : 'play'}
				onClick={this.props.onClick}
			/>
		)
	}
}


export default PlayBtn;