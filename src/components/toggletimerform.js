import React, { Component } from 'react';
import TimerForm from './timerform';

class ToggleTimerForm extends Component {
  render(){
    if(this.props.isOpen){
      return(
        <TimerForm />
      )
    }
    else{
      return(
        <div>
          <button className="btn-large">
            <i className="material-icons">add</i>
          </button>
        </div>
      )
    }
  }
}

export default ToggleTimerForm;