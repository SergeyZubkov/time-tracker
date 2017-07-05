import React from 'react';
import Project from './Project'
import './ProjectList.css';

import VisibilityFilter from './../VisibilityFilter/VisibilityFilter';

class ProjectList extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			visibilityFilter: this.props.visibilityFilter
		}
	}

	changeVisibilityFilter = (value) => {
		console.log(value)
		this.setState({visibilityFilter: value});
	}

	render() {
		let filter = this.state.visibilityFilter;
		let projects = this.props.projects.filter(project => {
			if (filter === 'ALL') {
				return project;
			}
			return project.status === filter;
		})
		console.log(filter)
		return (
			<div
				className='project-list'
			>
				<VisibilityFilter onChange={this.changeVisibilityFilter} />
				{projects.map( p => {
					return <Project project={p} key={p.id} />
				})}
			</div>
		)
	}
}


export default ProjectList;