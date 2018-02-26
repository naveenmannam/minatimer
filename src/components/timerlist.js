import React, { Component } from 'react';
import EditTimer from './edittimer';


class TimerList extends Component{
  render(){
    return(
      <div >
        <div>
          <EditTimer
            title="Learn React"
            project="Web Domination"
            elapsed="8986300"
            runningSince={null}
            editFormOpen={true}
          />
          <br />
          <EditTimer
            title="Learn Angular"
            project="Web Domination"
            elapsed="986300"
            runningSince={null}
            editFormOpen={false}
          />
        </div>
      </div>
    )
  }
}

export default TimerList;