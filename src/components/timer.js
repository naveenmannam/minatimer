import React, { Component } from 'react';
import './timer.css';
const helpers = require('./helpers');


class Timer extends Component{
  render(){
    const elapsedSrting = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="timer">
        <div>
        <div className="left-align">
            <h5>{this.props.title}</h5>
            <h6>{this.props.project}</h6>
        </div>
        <h4>{elapsedSrting}</h4>
          <p className="right-align">
          <i className="material-icons timicons">delete</i>
          &nbsp;
          <i className="material-icons timicons">mode_edit</i>
          </p>
          <hr />
          <h6 className="green-text">Start</h6>
        </div>
        {/* <TimerForm /> */}

      </div>
    )
  }
}

export default Timer;