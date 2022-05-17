import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  let navigate = useNavigate();

  return (
      <Form>
          <h1 >Log In</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          navigate("/Users");
        }}
      >
        Log In
      </Button>
    </Form>
  );
};
