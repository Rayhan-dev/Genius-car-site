import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container my-5 w-50">
      <h1>Please Register</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="my-3">
        <span>
          Already have an account?
        </span>
        <span className="mx-1">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"/login"}
          >
            Please Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
