import React from 'react';
import './Project.css';
import Dropdown from '../Dropdown/Dropdown';
import FontAwesome from 'react-fontawesome';

class Project extends React.Component {

	render() {
		const {
			status,
			title,
			rate,
			time
		} = this.props.project;

		return (
			<li
				className='project-item'
			>
				<span
					className={`project-item__status_${status.toLowerCase()}`}
				>
				</span>
				<Dropdown
					className={`project-item__dropdown`}
					title={<FontAwesome name='ellipsis-v' />}
				>
					<div> Завершить </div>
					<div> Редактировать </div>
					<div> Удалить </div>
				</Dropdown>
				<span
					className='project-item__title'
				>
					{title}
				</span>
				<span
					className='project-item__rate'
				>
					{rate}
				</span>
				<span
					className='project-item__time'
				>
					{time}
				</span>
				<span
					className='project-item__sum'
				>
					{time * 60 * rate}
				</span>
			</li>
		)
	}
}

export default Project;