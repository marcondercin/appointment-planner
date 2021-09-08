import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = event => setName(event.target.value);
  const handlePhoneChange = event => setPhone(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>Phone Number
          <input type="tel" value={phone} onChange={handlePhoneChange}/>
        </label>
        <labe>Email
          <input type="email" value={email} onChange={handleEmailChange}/>
        </labe>
        <input type="submit" value="Add contact"/>
       
      </form>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};
