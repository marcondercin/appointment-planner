import React from "react";

export const ContactPicker = ({contacts, handleContactChange}) => {
  
  const contactList = contacts.map(contact => {
    return (
      <option key={contact.name}>{contact.name}</option>
    );
  });

  return (
    <select onChange={handleContactChange}>
      <option selected value="none">None selected</option>
      {contactList}
    </select>
  );
};
