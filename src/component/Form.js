import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AddBookForm from './AddBookForm';

export class Form extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name : '',

    }
    
  }
  

  handleSubmit = async(e) => {
    e.preventDefault();
    const {user, isAuthenticated } = this.props.auth0;

    let bookData ={
      title : e.target.title.value,
      description : e.target.description.value,
      status : e.target.status.value
    }

    let url = `${process.env.REACT_APP_SERVER}/addBook`;
    let axiosRes = await axios.post(url,bookData);
    let data = axiosRes.data;
  }


  render() {

    return (
      <div>
        <AddBookForm func={this.handleSubmit}/>
      </div>
      
    )
  }




}

export default withAuth0(Form);
