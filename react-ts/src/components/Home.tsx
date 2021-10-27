import React, { Component, useState } from "react";
import {Form,Button} from "react-bootstrap"

interface myInt {
  name:string,
  country:string

}
export default class Home extends Component<myInt> {
  state = {
    data:""
  }
  const myData=() =>{
    console.log()

  }
  // const apiData = useState([])
  render() {
    return (
      <div className="container">
       <>
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={this.myData} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</>
      </div>
    );
  }
}
