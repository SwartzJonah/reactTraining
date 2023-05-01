
import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor(props){
    super(props);

    this.onSubmitBtn = this.onSubmitBtn.bind(this);
  }

  onSubmitBtn(){
      console.log("submitted")
  }


  render() {
    return <div> <Overview title ="test name" /> </div>;
  }
}

export default App;