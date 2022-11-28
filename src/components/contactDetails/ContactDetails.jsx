import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./contactDetails.css";
export const ContactDetails = ({ setContactDetailsData }) => {
  const [detailsData, setDetailsData] = useState({});

  const id = useParams();

  //useEffect hook to call the function for componentdidMount
  useEffect(() => {
    getDetails();
  }, []);

  // function for get a perticular data from api
  const getDetails = () => {
    axios
      .get(`http://localhost:3001/contactData/${id.id}`)
      .then((data) => {
        setDetailsData(data.data);
        setContactDetailsData(data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // render the data on browser
  return (
    <>
      <div className="detailsContainer">
        <div className="deHeadText">
          <p className="detailsHeadText">Contact Details</p>
        </div>
        <div className="detailsBox">
          <p className="detailsText">Name : {detailsData.name}</p>
          <p className="detailsText">
            Phone number : {detailsData.phone_number}
          </p>
        </div>
        <div className="buttonBox">
          <Link to={"/newmessage"}>
            <button className="sendBtn">Send Messsage</button>
          </Link>
        </div>
      </div>
    </>
  );
};
