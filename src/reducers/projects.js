const initialState = [
		{title: 'проект-1',status: 'ACTIVE',time: 200,rate: 20, id: '24', isTrackering: false},
		{title: 'проект-2',status: 'ACTIVE',time: 20,rate: 2, id: '25', isTrackering: false},
		{title: 'проект-3',status: 'ACTIVE',time: 44444,rate: 820, id: '21',  isTrackering: false},
		{title: 'проект-4',status: 'ACTIVE',time: 5,rate: 340, id: '22', isTrackering: false},
		{title: 'проект-5',status: 'ACTIVE',time: 190,rate: 1500, id: '4',  isTrackering: false},
		{title: 'проект-6',status: 'COMPLETE',time: 1,rate: 22000, id: '2',  isTrackering: false}
	]


const projects = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];
    case 'REMOVE_PROJECT':
      return state.filter(project => project !== action.id);
    case 'UPDATA_PROJECT':
      return state.map(project => {
        if (project.id === action.id) {
          project = {...action.newData, ...project}
        }
        return project;
      });
    default:
      return state;
  }
}


export default projects;
