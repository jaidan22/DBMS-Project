import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./BookCard.css";

const BookCard = ({ props }) => {
  const { train_name, train_id, source, destination, cost, avail_seat } = props;
  return (
    <>
      <div className="card">
        <Card style={{ width: "90%" }}>
          <div className="card_body">
            <Card.Body>
              <Card.Title>{train_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {train_id}
              </Card.Subtitle>
              <Card.Text>
                <div className="text_arr">
                  <p>{source}</p>
                  <p>{destination}</p>
                  <p>{cost}</p>
                  <p>{avail_seat}</p>
                </div>
              </Card.Text>
              <Card.Link href="#">Book Now</Card.Link>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BookCard;
