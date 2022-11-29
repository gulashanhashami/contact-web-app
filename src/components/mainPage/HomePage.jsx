import React, { useEffect, useState } from "react";
import "./homePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [contactData, setContactData] = useState([]);

  //useEffect hook to call the function for componentdidMount
  useEffect(() => {
    getData();
  }, []);

  // function for get the data from api
  const getData = () => {
    axios
      .get("https://contactproj.herokuapp.com/contacts")
      .then((data) => {
        setContactData(data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // render the data on browser
  return (
    <>
      <div className="container">
        <div className="headTextBox">
          <Link to={"/"}>
            <p className="headText">List of contacts</p>
          </Link>
          <Link to={"/allsentmessages"}>
            <p className="headText">List of message sent</p>
          </Link>
        </div>
        {(contactData.length===0)? (
          <div className="homeLoadingData">
            <h1>Loading...</h1>
          </div>
        ): (<div>
        {/* code for maa the data */}
        {contactData.map((item) => {
          return (
            <div key={item._id}>
              <Link to={`/contactData/${item._id}`}>
                <div className="itemBox">
              <img id="profile" className="contactProf" src="https://cdn.iconscout.com/icon/free/png-64/profile-5023700-4195416.png" alt="" />  
                <p>{item.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
        </div>
        )}
      </div>
    </>
  );
};
