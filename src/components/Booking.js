import React, { useState } from "react";
import BookingForm from "./BookingForm";

const Booking = () => {
  const [availableTimes] = useState(["12:00 PM", "1:00 PM", "2:00 PM"]); 
  const dispatch = (value) => console.log("Date selected:", value); 
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="booking-page">
      <br /><br /> 
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
