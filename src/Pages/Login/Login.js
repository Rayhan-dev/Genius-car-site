import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const getPassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  let successMessegeElement;
  let errors;
  if (user) {
    navigate('/');
    successMessegeElement = (
      <div>
        <p className="my-2 text-success">Signed In User: {user.user.email}</p>
      </div>
    );
  }
  if (error) {
    errors = (
      <div>
        <p className="text-danger"> Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container my-5 w-50 ">
      <h1>Please Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={getPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          onClick={() => signInWithEmailAndPassword(email, password)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {successMessegeElement}
      {errors}
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
