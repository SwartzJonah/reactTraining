
import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { name: ''},
      taskArray: [],
    };
  }

  changeName = (event) => {
    this.setState({
      task : {
        name: event.target.value,
      }
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: { name: '' },
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

      </div>

    );
  }
}

export default App;