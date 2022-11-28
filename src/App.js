import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllSentMessages } from "./components/allSentMessages/AllSentMessages";
import { ContactDetails } from "./components/contactDetails/ContactDetails";
import { HomePage } from "./components/mainPage/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { NewMessage } from "./components/newMessage/NewMessage";

function App() {
  const [contactDetailsDtata, setContactDetailsData] = useState({});
  // console.log("app",contactDetailsDtata)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contactData/:id"
          element={
            <ContactDetails setContactDetailsData={setContactDetailsData} />
          }
        />
        <Route
          path="/newmessage"
          element={<NewMessage contactDetailsDtata={contactDetailsDtata} />}
        />
        <Route path="/allsentmessages" element={<AllSentMessages />} />
      </Routes>
    </div>
  );
}

export default App;
