// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  };

  render() {
    return (
      <button onClick={this.handleClick}>click</button>

    )
  }
}

export default DelayedButton;
