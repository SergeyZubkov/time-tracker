import React from 'react';
import ReactDOM from 'react-dom';
import './ProjectForm.css';
import cuid from 'cuid';

class ProjectForm extends React.Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.title).focus();
	}

	createProject = (e) => {
		console.log('aaa')
		e.preventDefault();
		this.props.onSubmit({
			id: cuid(),
			title: this.title.value, 
			rate: this.rate.value,
			// seconds
			time: 0,
			status: 'ACTIVE'
		});
		this.title.value = this.rate.value = null;
	}

	render() {
		return (
			<form
				className='project-form'
				onSubmit={this.createProject}
			>
				<input
					type='text'
					placeholder='название проекта'
					ref={title => this.title = title}
				/>
				<input
					type='number'
					step='1'
					min='0'
					placeholder='ставка'
					ref={rate => this.rate = rate}
				/>
				<button
					className='btn-submit'
				>
					Создать
				</button>
			</form>
		)
	}
}

export default ProjectForm;