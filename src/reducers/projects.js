const initialState = [
		{title: 'проект-1',status: 'ACTIVE',time: 200,rate: 20, id: '1', isTrackering: false},
		{title: 'проект-2',status: 'ACTIVE',time: 20,rate: 2, id: '2', isTrackering: false},
		{title: 'проект-3',status: 'ACTIVE',time: 44444,rate: 820, id: '3',  isTrackering: false},
		{title: 'проект-4',status: 'ACTIVE',time: 5,rate: 340, id: '4', isTrackering: false},
		{title: 'проект-5',status: 'ACTIVE',time: 190,rate: 1500, id: '5',  isTrackering: false},
		{title: 'проект-6',status: 'COMPLETE',time: 1,rate: 22000, id: '6',  isTrackering: false}
	]


const projects = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':

			let project = {
				id: ++state.length,
				status: 'ACTIVE',
				time: 0,
				isTrackering:false
			};

      return [...state, {...project, ...action.project}];
    case 'REMOVE_PROJECT':
      return state.filter(project => project.id !== action.id);
    case 'UPDATE_PROJECT':
			console.log(action)
      return state.map(project => {
        if (project.id === action.id) {
          project = {...project, ...action.newData}
        }
        return project;
      });
    default:
      return state;
  }
}


export default projects;
