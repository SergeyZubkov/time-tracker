import React, { Component } from 'react';
import './App.css';
import ProjectForm from './containers/ProjectForm/ProjectForm';
import ProjectList from './containers/ProjectList/ProjectList';
import Intro from './Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
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
