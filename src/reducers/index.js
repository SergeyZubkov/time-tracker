import visibilityFilter from './visibilityFilter';
import projects from './projects';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  visibilityFilter,
  projects
});

export default reducers;
