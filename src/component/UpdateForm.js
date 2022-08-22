import React, { Component } from 'react'
import AddBookForm from './AddBookForm'

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" id='title' placeholder='Enter the title'/>
            <br></br>
            <input type="text" id='description' placeholder='Enter the description '/>
            <br></br>
            <input type="text" id='status' placeholder='Enter the status '/>
            <br></br>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default UpdateForm
