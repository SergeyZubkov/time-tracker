import React from 'react';
import ReactDOM from 'react-dom';
import './ProjectForm.css';
import dataService from '../dataService'

class ProjectForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			disableBtn: true
		}
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.title).focus();
	}

	changeForm = () => {
		if (this.title.value&&this.rate.value) {
			this.setState({
				disableBtn: false
			})
		}
	}

	createProject = (e) => {
		e.preventDefault();
		if (!this.title.value||!this.rate.value) {
			return 
		}
		dataService.createProject({
			title: this.title.value,
			rate: this.rate.value
		});
		this.title.value = this.rate.value = null;
		this.setState({
			disableBtn: true
		})
	}

	render() {
		return (
			<form
				className='project-form'
				onSubmit={this.createProject}
				onChange={this.changeForm}
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
					className={this.state.disableBtn ? 'btn-submit btn-submit_disable' : 'btn-submit'}
				>
					Создать
				</button>
			</form>
		)
	}
}

export default ProjectForm;