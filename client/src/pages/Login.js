import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login From</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          New User Register here!
        </Link>
        <button className="btn btn-primary button" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
