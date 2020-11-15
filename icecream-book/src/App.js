import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './comon/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Body from './comon/Body';
import Footer from './comon/Footer';
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

const App = () => {
  const [listProducts, setListProduct] = useState();
  const [cart, setCart] = useState([])
  useEffect(() => {
    setListProduct();
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart) setCart(dataCart)
  }, [])

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
  }, [cart])

  const marginTop = {
    marginTop: "12px"
  }
  
  return (
    <Container>
      <Row>
        <Col lg={12} style={marginTop}>
          <Jumbotron className="bg-white text-black" >
            <Router>
              <Header cart ={cart}/>
              <Body cart ={cart}/>
              <Footer />
            </Router>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
export default App;

