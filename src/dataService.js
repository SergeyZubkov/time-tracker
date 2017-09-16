import MicroEmitter from 'micro-emitter';
import cuid from 'cuid';

class DataService extends MicroEmitter {

	constructor(initialState = {}) {
		super();
		this.state = initialState;

	}

	getProjects() {
		return this.state.projects
	}

	createProject(data) {

		const project = {
			title: data.title,
			rate: data.rate,
			id: cuid(),
			time: 0,
			status: 'ACTIVE',
			isTrackering: false
		}

		this.state.projects.push(project);

		this.trigger('updateProjects');
	}

	removeProject(id) {
		this.state.projects = this.state.projects.filter((p) => {
			return p.id !== id;
		})
		console.log(this.state.projects, id )
		this.trigger('updateProjects');
	}

	updateProject(id, objNewValues) {
		let projects = this.state.projects;
		let elementPos = projects.map(x => x.id).indexOf(id);
		let project = projects.splice(elementPos, 1)[0];

		project = Object.assign({}, project, objNewValues);


		this.state.projects = [...projects]
		this.state.projects.splice(elementPos, 0, project)
		console.log(objNewValues)
		this.trigger('updateProjects')
	}

	completeProject(id) {
		this.updateProject(id, {status: 'COMPLETE', isTrackering: false});
		this.trigger('updateProjects')
	}
}

const dataService = new DataService({
	// time в секундах
	projects: [
		{title: 'проект-1',status: 'ACTIVE',time: 200,rate: 20, id: '24', isTrackering: false},
		{title: 'проект-2',status: 'ACTIVE',time: 20,rate: 2, id: '25', isTrackering: false},
		{title: 'проект-3',status: 'ACTIVE',time: 44444,rate: 820, id: '21',  isTrackering: false},
		{title: 'проект-4',status: 'ACTIVE',time: 5,rate: 340, id: '22', isTrackering: false},
		{title: 'проект-5',status: 'ACTIVE',time: 190,rate: 1500, id: '4',  isTrackering: false},
		{title: 'проект-6',status: 'COMPLETE',time: 1,rate: 22000, id: '2',  isTrackering: false}
	]
});

export default dataService;
