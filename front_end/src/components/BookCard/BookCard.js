import React, { useContext } from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BookCard.css';
import { UserContext } from '../../context';

const BookCard = ({ props }) => {
  const { train_name, train_id, source, destination, cost, avail_seat } = props;
  const { userid } = useContext(UserContext);

  const book = () => {
    if (!userid) return alert('Login to book trains');
  };

  return (
    <>
      <div className="card book-card">
        <Card style={{ width: '90%' }}>
          <div className="card_body">
            <Card.Body>
              <div className="d-flex flex-row flex-ctn">
                <Card.Title>{train_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {train_id}
                </Card.Subtitle>
              </div>
              <Card.Text>
                <div className="text_arr">
                  <p>Source</p>
                  <p>Destination</p>
                  <p>Cost</p>
                  <p>Available Seats</p>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="text_arr">
                  <p>{source}</p>
                  <p>{destination}</p>
                  <p>{cost}</p>
                  <p>
                    {avail_seat > 1 ? `GN ${avail_seat}` : `WL ${avail_seat}`}
                  </p>
                </div>
              </Card.Text>
              <button
                className="book-btn"
                // disabled={userid ? false : true}
                onClick={book}
              >
                Book Now
              </button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BookCard;
