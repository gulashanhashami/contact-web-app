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
      .get("http://localhost:3001/contactData")
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
        {contactData.map((item) => {
          return (
            <div className="itemBox" key={item.id}>
              <Link to={`/contactData/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
