import "./App.css";
import React from "react";
import Amenities from "./pages/Amenities/Amenities";
import HomePage from "./pages/HomePage/HomePage";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  return <div>
    <HomePage/>
    <Amenities/>
    <ContactForm/>
  </div>
}

export default App;
