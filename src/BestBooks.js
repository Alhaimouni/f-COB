import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './All.css'
import DeleteButton from './component/DeleteButton';
import UpdateButton from './component/UpdateButton';
import UpdateForm from './component/UpdateForm';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showUpdateForm : false,
    }
  }


  componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    let axiosImport = await axios.get(url);
    let booksData = axiosImport.data;
    this.setState({ books: booksData });
    console.log('from componentDidMount');
  }

  deleteBook = async (id) => {
      let url = `${process.env.REACT_APP_SERVER}/deleteBook?value=${id}`;
      let axiosImport = await axios.delete(url);
      let booksData = axiosImport.data;
      this.setState({ books: booksData });
  }

  ShowForm = () => {
    //e.preventDefault();
    this.setState({showUpdateForm:true,})
  }


  render() {

    return (
      <>
        {/* {(this.state.books.length) ? <>
          <Carousel>
            {this.state.books.map((item) => {
              return (<Carousel.Item>
                <img
                  className="CarImg"
                  alt="First slide"
                  src='https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg'
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.status}</p>
                </Carousel.Caption>
              </Carousel.Item>)
            })}
          </Carousel>
        </>

          : <><h1>No books found</h1></>} */}
        {(this.state.books.length) ?<>
        {this.state.books.map(item=>{ return(

        
          <>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
           <p>{item.status}</p>
           <DeleteButton dfunc = {this.deleteBook} id={item._id}/>
           <UpdateButton ufunc = {this.ShowForm}/>
           
           <hr />
           </>)
        })}
        {this.state.showUpdateForm && <UpdateForm/>}
        
        </>:<h1>No books found</h1> }
         </>
    )
  }
}


        export default withAuth0(BestBooks);


