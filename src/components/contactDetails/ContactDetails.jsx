import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./contactDetails.css";
export const ContactDetails = ({ setContactDetailsData }) => {
  const [detailsData, setDetailsData] = useState({});

  const _id = useParams();
  //useEffect hook to call the function for componentdidMount
  useEffect(() => {
    getDetails();
  }, []);

  // function for get a perticular data from api
  const getDetails = () => {
    axios
      .get(`https://contactproj.herokuapp.com/contacts/${_id.id}`)
      .then((data) => {
        setDetailsData(data.data.contacts);
        setContactDetailsData(data.data.contacts);
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
          <div className="detailsTextProfile">
          <img id="profile" className="detailsContactProf" src="https://cdn.iconscout.com/icon/free/png-64/profile-5023700-4195416.png" alt="" />
          <p className="detailsText">Name : {detailsData.name}</p>
          </div>
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
