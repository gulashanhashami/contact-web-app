import React, { useEffect, useState } from "react";
import "./allSentMessages.css";
import axios from "axios";
import { Link } from "react-router-dom";
export const AllSentMessages = () => {
  const [allSentMessages, setAllSentMessages] = useState([]);
  
  //useEffect hook to call the function for componentdidMount
  useEffect(() => {
    getSentMessageData();
  }, []);

  // function for get the data from api
  const getSentMessageData = () => {
    axios
      .get("http://localhost:4000/sendotp")
      .then((res) => {
        setAllSentMessages(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // render the data on browser
  return (
    <>
      <div className="allmsgContainer">
        <div className="allmsgHeadTextBox">
          <Link to={"/"}>
            <p className="allmsgHeadText">List of contacts</p>
          </Link>
          <Link to={"/allsentmessages"}>
            <p className="allmsgHeadText">List of message sent</p>
          </Link>
        </div>
        {allSentMessages.map((item) => {
          return (
            <div className="allmsgItemBox" key={item.sid}>
              <div className="sentTimeBox">
                <p className="textItem">{item.to}</p>
                <p>
                  {new Date(item.dateSent).toLocaleString(undefined, {
                    timeZone: "Asia/Kolkata",
                  })}
                </p>
              </div>
              <p className="textItem">{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
