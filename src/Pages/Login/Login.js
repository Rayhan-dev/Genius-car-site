import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef('');
  const passRef = useRef('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
  };
  return (
    <div className="container my-5 w-50 ">
      <h1>Please Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="my-3">
        <span>
          New to <b>Car Doctor</b>?
        </span>
        <span className="mx-1">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"/register"}
          >
            Register Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
