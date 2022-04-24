import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const getEmail = event.target.email.value;
    const getPassword = event.target.password.value;
    setEmail(getEmail);
    setPassword(getPassword);
    console.log(user);
  };
  let successMessegeElement;
  if (user) {
    successMessegeElement = (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <div className="container my-5 w-50">
      <h1>Please Register</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          onClick={() => createUserWithEmailAndPassword(email, password)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        {successMessegeElement};
      </Form>
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
