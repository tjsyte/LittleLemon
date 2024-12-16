import React, { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-header">
        <h3>Reserve Your Table</h3>
        <p>Fill in the details below to confirm your reservation.</p>
      </div>
      <fieldset className="form-fieldset">
        <div className="form-item">
          <label htmlFor="book-date">Choose Date</label>
          <input
            id="book-date"
            value={date}
            onChange={handleChange}
            type="date"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="book-time">Choose Time</label>
          <select
            id="book-time"
            value={times}
            onChange={(e) => setTimes(e.target.value)}
            required
          >
            <option value="">Select a Time</option>
            {props.availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="book-guests">Number of Guests</label>
          <input
            id="book-guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min={1}
            max={10}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="book-occasion">Occasion</label>
          <select
            id="book-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an Option</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Reserve Table</button>
      </fieldset>
    </form>
  );
};

export default BookingForm;
