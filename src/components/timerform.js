import React, { Component } from 'react';
import './timer.css'

class TimerForm extends Component {
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
    return(
      <div className="timer">
          <div>
            <label htmlFor="">Title</label>
            <input type="text" defaultValue={this.props.title}/>
          </div>
          <div>
            <label htmlFor="">Project</label>
            <input type="text" defaultValue={this.props.project}/>
          </div>
          <div>
            <button className="btn blue">{submitText}</button>&nbsp;
            <button className="btn blue">Cancel</button>
          </div>
      </div>
    )
  }
}

export default TimerForm;