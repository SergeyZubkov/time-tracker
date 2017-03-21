import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectForm from './ProjectForm/ProjectForm';
import ProjectList from './ProjectList/ProjectList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [{title: 'test',status: 'active',time: 200,rate: 20, id: '24'}]
    }
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
          <ProjectForm onSubmit={this.addProject} />
          <ProjectList projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
