import React, { Component } from 'react'

export class AddBookForm extends Component {
  render() {
    return (
      <div>
         <form onSubmit={this.props.func}>
            <input type="text" id='title' placeholder='Enter the title'/>
            <br></br>
            <input type="text" id='description' placeholder='Enter the description '/>
            <br></br>
            <input type="text" id='status' placeholder='Enter the status '/>
            <br></br>
            <input type="submit" value='Add Book!'/>
        </form>
      </div>
    )
  }
}

export default AddBookForm
