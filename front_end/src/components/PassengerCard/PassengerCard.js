import React, { useRef } from 'react';
import './passengercard.scss';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const PassengerCard = (props) => {
  const { name, seat_no, p_id, train_id, source, destination, sch_id } =
    props.props;
  // console.log(props.props);
  const loadRef = useRef();

  const loading = () => {
    loadRef.current.style.opacity = 1;
    loadRef.current.style.visibility = 'visible';
  };

  const stoploading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = 'hidden';
  };

  const cancel = async () => {
    loading();
    // console.log({ id: p_id });
    axios
      .post(`${process.env.REACT_APP_API_URL}/cancel`, {
        p_id,
      })
      .then((res) => {
        // console.log(res);
        axios.put(`${process.env.REACT_APP_API_URL}/incseat`, {
          id: sch_id,
        });
        window.location.reload();
        stoploading();
      })
      .catch((err) => {
        console.log(err);
        stoploading();
      });
  };

  return (
    <>
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>

      <div className="card book-card">
        <Card style={{ width: '90%' }}>
          <div className="card_body">
            <Card.Body>
              <div className="d-flex flex-row flex-ctn">
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  PNR : {p_id} | Seat No :{' '}
                  {seat_no > 0
                    ? ` GN ${seat_no}`
                    : ' WL' + parseInt(seat_no * -1 + 1)}
                </Card.Subtitle>
              </div>
              <Card.Text>
                <div className="text_arr">
                  <p>{source}</p>
                  <p>Train ID : {train_id}</p>

                  <p>{destination}</p>
                </div>
              </Card.Text>

              <Button
                // disabled={userid ? false : true}
                className="cancel"
                onClick={cancel}
              >
                Cancel
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PassengerCard;
