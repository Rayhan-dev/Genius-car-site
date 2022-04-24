import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };
  const getEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const getPassword = (event) => {
    const password = event.target.value;
    setPassword(password);
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
    <div className="container my-5 w-50">
      <h1>Please Register</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={getEmail}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onBlur={getPassword}
          />
        </Form.Group>
        <Button
          onClick={() => createUserWithEmailAndPassword(email, password)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {successMessegeElement}
      {errors}
      <div className="my-3">
        <span>Already have an account?</span>
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
