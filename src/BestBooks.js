import axios from 'axios';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './All.css'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    let axiosImport = await axios.get(url);
    let booksData = axiosImport.data;
    this.setState({ books: booksData });
  }
  render() {

    return (
      <>
        {(this.state.books.length) ? <>
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
          : <h1>No books found</h1>}
      </>
    )
  }
}


export default withAuth0(BestBooks);
