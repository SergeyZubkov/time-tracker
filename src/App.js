import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectForm from './ProjectForm/ProjectForm';
import ProjectList from './containers/ProjectList/ProjectList';
import Intro from './Intro/Intro';
import dataService from './dataService'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: dataService.getProjects()
    }
    console.log(this.state)
  }

  componentDidMount() {
    dataService.on('updateProjects', this.updateProjects);
  }

  updateProjects = () => {
    this.setState({
      projects: dataService.getProjects()
    })

  }

  addProject = (project) => {
    let projects = this.state.projects.slice();
    projects.push(project);
    this.setState({projects})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <img src={logo} className="App-logo" alt="logo" />
           Time Tracker
          </h2>
        </div>
        <div
          className='app-body'
        >
          <Intro />
          <ProjectForm onSubmit={this.addProject} />
          <ProjectList />
        </div>
      </div>
    );
  }

}

export default App;
