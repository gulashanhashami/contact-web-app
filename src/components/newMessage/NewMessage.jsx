import React, { useEffect, useState } from "react";
import "./newMessage.css";
import axios from "axios";
export const NewMessage = ({ contactDetailsDtata }) => {
  const [textData, setTextData] = useState({
    textMessage: `Hi. Your OTP is ${Math.floor(
      Math.random() * 899999 + 100000
    )}`,
  });

  //function for handle input box
  const handleChange = (e) => {
    let key = e.target.name;
    setTextData({
      [key]: e.target.value,
    });
  };
  //function for send the otp message to a given number
  const sendOtpFunction = () => {
    axios
      .post(
        `https://contact-webs.onrender.com/sendotp?recipient=${contactDetailsDtata.phone_number}&textMessage=${textData.textMessage}`
      ).then((res)=>{
        alert("OTP has sent successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // render the data on browser
  return (
    <>
      <div className="messageContainer">
        <div className="messageHeadTextBox">
          <p className="messagePageHeadText">New message</p>
        </div>
        <div className="messagereceiverName">
          <p className="messagePageHeadText">To : {contactDetailsDtata.name}</p>
        </div>
        <div className="messageTextBox">
          <input
            className="enterText"
            name="textMessage"
            type="text"
            defaultValue={`Hi. Your OTP is ${Math.floor(
              Math.random() * 899999 + 100000
            )}`}
            onChange={(e) => handleChange(e)}
          />
          <button className="sendButton" onClick={sendOtpFunction}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};
