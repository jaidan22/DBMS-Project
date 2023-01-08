import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const CardPanel = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() =>
        axios.get(`${process.env.REACT_APP_API_URL}/trains`)
        .then(res => {
            const traindata = res.data;
            setTrains(traindata);
        })
    , [] )

    return ( 
        <>
            <div className="cardpanel">
                {
                    trains.map((train) =>
                        <BookCard  props={train}/>
                    )
                }   
            </div>
        </>
     );
}
 
export default CardPanel;