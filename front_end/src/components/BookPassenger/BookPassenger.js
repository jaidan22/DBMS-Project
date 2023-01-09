import React, { useContext, useEffect, useRef, useState } from 'react';
import './bookpassenger.scss';
import { Navigate, useParams } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { UserContext } from '../../context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Passenger = () => {
  let { id } = useParams();
  const { userid } = useContext(UserContext);
  let navigate = useNavigate();

  const [name, setname] = useState('');
  const [age, setAge] = useState();
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [sch_id, setSchid] = useState();
  const [seat, setseat] = useState();
  const u_id = Number(userid);
  const loadRef = useRef();

  const cancel = () => {
    return navigate('/book');
  };

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
    const body = {
      name,
      age: Number(age),
      email,
      phone: Number(phone),
      sch_id,
      u_id,
      seat_no: Number(seat),
    };
    // console.log(body);
    loading();
    axios
      .post(`${process.env.REACT_APP_API_URL}/book`, body)
      .then((res) => {
        console.log(res.data);
        axios
          .put(`${process.env.REACT_APP_API_URL}/decseat`, {
            id: sch_id,
          })
          .then(() => {
            stoploading();
            navigate('/');
          });
      })
      .catch((err) => {
        console.log(err);
        stoploading();
      });
  };

  useEffect(() => {
    const getTraindata = async () => {
      loading();
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/journey/${id}`
      );
      console.log(res.data[0]);
      setSchid(res.data[0].sch_id);
      setseat(res.data[0].avail_seat);
      stoploading();
    };
    getTraindata();
  }, []);

  return (
    <div>
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>

      {userid ? (
        <div className="passenger-det">
          <div className="signup_container">
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={10} lg={10} xs={12}>
                {/* <div className="border border-3 border-warning"></div> */}
                <Card className="shadow">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-uppercase ">
                        Add Passengers
                      </h2>
                      <div className="mb-3">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicText"
                          >
                            <Form.Label className="text-center">
                              Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="John Doe"
                              onChange={(e) => {
                                setname(e.target.value);
                              }}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicNumber"
                          >
                            <Form.Label className="text-center">Age</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter Age"
                              onChange={(e) => {
                                setAge(e.target.value);
                              }}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicTel">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="tel"
                              placeholder="+91xxxxxxxxx88"
                              onChange={(e) => {
                                setphone(e.target.value);
                              }}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="example@gmail.com"
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                          </Form.Group>

                          <div className="d-grid">
                            <Button
                              variant="warning"
                              type="submit"
                              onClick={cancel}
                              className="cancel"
                            >
                              Cancel
                            </Button>
                            {/* <Button
                              variant="warning"
                              type="submit"
                              //   onClick={cancel}
                            >
                              Add Passenger
                            </Button> */}
                            <Button
                              className="confirm"
                              variant="warning"
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                            >
                              Confirm Booking
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
      ) : (
        'login'
      )}
    </div>
  );
};

export default Passenger;
