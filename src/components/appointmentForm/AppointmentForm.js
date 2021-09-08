import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = event => setTitle(event.target.value);
  const handleDateChange = event => setDate(event.target.value);
  const handleTimeChange = event => setTime(event.target.value);
  const handleContactChange = event => setContact(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>Title
        <input type="text" value={title} onChange={handleTitleChange}/>
      </label>
      <label>Date
        <input type="date" value={date} onChange={handleDateChange} min={getTodayString}/>
      </label>
      <label>Time
        <input type="time" value={time} onChange={handleTimeChange}/>
      </label>
      <ContactPicker contacts={contacts} onChange={handleContactChange}/>
      <input type="submit" value="Add appointment" />
    </form>
  );
};
