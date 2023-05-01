
import React, { Component } from "react";
import uniqid from "uniqid"
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { name: '',
      id: uniqid()
    },
      taskArray: [],
    };
  }

  changeName = (event) => {
    this.setState({
      task : {
        name: event.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: { 
        name: '',
        id: uniqid()
      },
    })
  }



  render() {
    const{ task, taskArray } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="taskName">Name of task? </label>
          <input
            onChange={this.changeName}
            value = {task.name}
            type = "text"
            id="taskName" 
          />
          <button type="submit">
            Add task
          </button>
        </form>
        <Overview taskArray={taskArray} />
      </div>

    );
  }
}

export default App;