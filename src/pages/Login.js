import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({ setAuth }) => {
  let navigate = useNavigate();
  let [loginForm, setLoginForm] = useState({ email: "", password: "" });
  let emailRef = useRef();
  let passwordRef = useRef();

  const handleInputValue = (e) => {
    const { value, name } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginForm.email.length === 0) {
      emailRef.current.focus();
      return;
    }
    if (loginForm.password.length === 0) {
      passwordRef.current.focus();
      return;
    }
    setAuth(true);
    localStorage.setItem("login", "true");
    navigate("/");
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="label" controlId="formBasicEmail">
          <Form.Label className="title">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
            onChange={(e) => handleInputValue(e)}
          />
        </Form.Group>
        <Form.Group className="label" controlId="formBasicPassword">
          <Form.Label className="title">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            onChange={(e) => handleInputValue(e)}
          />
        </Form.Group>
        <Form.Group className="login" controlId="formBasicPassword">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
