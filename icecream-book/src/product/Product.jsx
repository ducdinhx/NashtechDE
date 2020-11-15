import React, { Component } from 'react';
import { Card, Col, Form, Button } from "react-bootstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      catalogue: [],
      image:'',
    }
  }
  
  render() {
    return (
      <div>
        <Card className="border border-dark bg-gray text-dark" >
          <Card.Header>Add Books</Card.Header>
          <Form className="box" onSubmit={this.submitProduct} id="bookFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control required
                    type="test" className={"bg-black text-black"}
                    placeholder="Enter your Book Name"
                    name="name"
                    onChange={this.bookChange}

                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Catalogue</Form.Label>
                  <Form.Control
                    type="test"
                    className={"bg-black text-black"}
                    placeholder="Your book catalogue"
                    name="catalogue" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Cover Image</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-black text-black"}
                    placeholder="Cover image"
                    name="image" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Upload Date</Form.Label>
                  <Form.Control
                    type="Date"
                    className={"bg-black text-black"}
                    placeholder="Your book catalogue"
                    name="uploadDate" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text"
                    className={"bg-black text-black"}
                    placeholder="Enter Book price"
                    name="price" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text"
                    className={"bg-black text-black"} placeholder="Enter Book descriontion"
                    name="description" />
                </Form.Group>
              </Form.Row>
              <Form.Row>

                <Form.Group as={Col}>
                  <Form.Label>Detail </Form.Label>
                  <Form.Control type="text" className={"bg-black text-black"} placeholder="Enter your Book Detail" name="detail" />
                </Form.Group>
              </Form.Row>

            </Card.Body>

            <Card.Footer style={{ "textAlign": "right" }} className="submitButton">
              <Button variant="success" size="sm" type="submit">
                Submit
          </Button>
            </Card.Footer>
          </Form>

        </Card>
)
      </div>
    );
  }
}

export default Product;




