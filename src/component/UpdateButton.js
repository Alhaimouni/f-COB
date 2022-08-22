import React, { Component } from 'react'

export class UpdateButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.ufunc}>Update</button>
      </div>
    )
  }
}

export default UpdateButton
