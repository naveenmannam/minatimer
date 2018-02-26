import React, { Component } from 'react';

// custom
import TimerList from './timerlist';
import ToggleTimerForm from './toggletimerform';

class TimerDashboard extends Component {
  state = {

  }

  render(){
    return(
      <div className="row">
        <div className="col s4 offset-s4">
          <h1>Timer</h1>
          <br />
          <TimerList />
          <br />
          <ToggleTimerForm isOpen={false}/>
        </div>
      </div>
    )
  }
}

export default TimerDashboard;