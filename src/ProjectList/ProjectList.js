import React from 'react';
import Project from './Project'
import './ProjectList.css';

class ProjectList extends React.Component {

	render() {
		return (
			<ul
				className='project-list'
			>
				 {this.props.projects.map( p => {
	          return <Project project={p} key={p.id} />
	        })}
			</ul>
		)
	}
}


export default ProjectList;