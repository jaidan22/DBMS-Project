import React, { useContext, useRef, useState } from 'react';
import './signup.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../context';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { userid } = useContext(UserContext);
  // console.log(userid)

  const [name, setname] = useState('');
  // const [phone, setPhone] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const loadRef = useRef();
  let navigate = useNavigate();


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
    console.log(userid);
    loading();
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        username,
        password,
        name,
      })
      .then((res) => {
        console.log(res);
        stoploading();
        return navigate('/login');
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

      <div className="signup_container">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={10} lg={10} xs={12}>
            <div className="border border-3 border-warning"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">REGISTER</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="John Doe"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
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
                          onClick={(e) => handleSubmit(e)}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </Form>
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
