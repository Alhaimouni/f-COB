import React, { Component } from 'react'

export class DeleteButton extends Component {

    deto = () => {
        this.props.dfunc(this.props.id)
    }

  render() {


    return (
      <div>
        <button onClick={this.deto}>Delete</button>
      </div>
    )
  }
}

export default DeleteButton
