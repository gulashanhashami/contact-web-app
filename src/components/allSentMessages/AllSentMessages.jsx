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
      .get("https://contactproj.herokuapp.com/sendotp")
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
        {(allSentMessages.length===0)? (
          <div className="loadingData">
            <h1>Loading...</h1>
          </div>
        ): (<div>
           {/* code for maa the data */}
        {allSentMessages.map((item) => {
          return (
            <div className="allmsgItemBox" key={item.sid}>
              <div className="sentTimeBox">
                <div className="allsmsTextProfile">
                <img id="profile" className="allsmsContactProf" src="https://cdn.iconscout.com/icon/free/png-64/profile-5023700-4195416.png" alt="" />
                <p className="textItem">{item.to}</p>
                </div>
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
        )}
      </div>
    </>
  );
};
