import React, { Component } from 'react';

// custom

import TimerDashboard from './components/timerdashboard';

class App extends Component {
  render() {
    return (
      <div className="center-align">
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
