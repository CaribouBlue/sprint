import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="timer"
      >
        <h1
          className="clock"
        >00:00</h1>
        <div>
        <button>
          Start
        </button>
        <button>
          Pause
        </button>
        <button>
          Stop
        </button>
        </div>
      </div>
    );
  }
};

export default Timer;