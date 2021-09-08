import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("That name already exists.");
    }

  };

  useEffect(() => {
    setIsDuplicate(false);
    const nameCheck = props.contacts.find(element => element.name === name);
    if (nameCheck) {
      alert('That name already exists.');
      setIsDuplicate(true);
    }
  }, [props.contacts, name]);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={props.contacts}
        />
      </section>
    </div>
  );
};
