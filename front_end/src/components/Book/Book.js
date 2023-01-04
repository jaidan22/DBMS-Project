import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Form from "react-bootstrap/Form";
import "./Book.css";

const Book = () => {
    return ( 
        <>
            <div>
                <div className="form-container">
                    <Form.Select aria-label="Default select example">
                        <option>Select Your Train</option>
                        <option value="1">KCVL-MSR Special</option>
                        <option value="2">CAN JanShatabdi</option>
                        <option value="3">Venad Express</option>
                    </Form.Select>
                </div>  
            </div>
        </>
     );
}
 
export default Book;