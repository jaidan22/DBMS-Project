import React, { useContext, useRef, useState } from 'react';
import './login.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { UserContext } from '../../context';
import axios from 'axios';

export default function Login() {
  const { userid, setuserId } = useContext(UserContext);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const loadRef = useRef();

  const loading = () => {
    loadRef.current.style.opacity = 1;
    loadRef.current.style.visibility = 'visible';
  };

  const stoploading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = 'hidden';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading();
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      })
      .then((res) => {
        const id = res.data;
        setuserId(id);
        console.log(userid);
        alert('Logged In');
        stoploading();
      })
      .catch((err) => {
        console.log(err);
        stoploading();
      });
  };

  return (
    <div>
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>

      <div className="login_container">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={10} xs={12}>
            <div className="border border-3 border-warning"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">LOGIN</h2>
                  {/* <p className=" mb-5">Please enter your login and password!</p> */}
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => {
                            setusername(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="warning"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
