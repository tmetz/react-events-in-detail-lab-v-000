// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick(event) {
    setTimeout(() => {
      this.props.onDelayedClick()
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={handleClick}>click</button>

    )
  }
}

export default DelayedButton;
