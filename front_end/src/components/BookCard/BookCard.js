import React, { useContext } from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BookCard.css';
import { UserContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ props }) => {
  const {
    train_name,
    train_id,
    source,
    destination,
    cost,
    avail_seat,
    sch_id,
    start_time,
    end_time,
  } = props;

  const d1 = new Date(start_time);
  const d2 = new Date(end_time);

  const { userid } = useContext(UserContext);
  let navigate = useNavigate();

  const book = () => {
    if (!userid) return alert('Login to book trains');
    return navigate(`/book/train/${sch_id}`);
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
                  <p>
                    {d1.getHours()}:{d1.getMinutes()} |{' '}
                    {d1.toString().split(' ')[0]},{d1.toString().split(' ')[2]}{' '}
                    {d1.toString().split(' ')[1]} | {source}
                  </p>
                  <p>
                    {d2.getHours()}:{d2.getMinutes()} |{' '}
                    {d2.toString().split(' ')[0]},{d2.toString().split(' ')[2]}{' '}
                    {d2.toString().split(' ')[1]} | {destination}
                  </p>
                </div>
              </Card.Text>

              <Card.Text>
                <div className="text_arr">
                  <p>Cost : {cost}</p>
                  <p>
                    Seat Availability :
                    {avail_seat > 0
                      ? ` GN ${avail_seat}`
                      : ' WL' + avail_seat * -1 + 1}
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
