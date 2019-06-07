import React, { useState } from "react";

import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    setUserName(data.get("username"));
    setPassword(data.get("password"));
    console.log();
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>{userName}</h3>
          <p>
            I probably shouldn't tell you this, but your password is{" "}
            {userPassword}!
          </p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
