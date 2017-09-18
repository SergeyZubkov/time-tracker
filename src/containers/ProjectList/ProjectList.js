import React from 'react';
import Project from './Project'
import './ProjectList.css';
import VisibilityFilter from '../VisibilityFilter/VisibilityFilter';
import {connect} from 'react-redux';

class ProjectList extends React.Component {

	render() {
		let filter = this.props.visibilityFilter;
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
				<VisibilityFilter
					items={this.props.projects}
				/>
				{projects.map( (p, i) => {
					return <Project
						key={i}
						indicateStatus={filter === 'ALL'}
						project={p}
					/>
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  projects: state.projects,
  visibilityFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(ProjectList);
