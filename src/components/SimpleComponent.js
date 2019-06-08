import React, { Component } from 'react'

export default class SimplerComponent extends Component {
  state = {
    mood: 'happy',
  }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState({ mood: 'sad' })
    } else {
      this.setState({ mood: 'happy' })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
