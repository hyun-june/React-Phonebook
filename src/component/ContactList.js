import React from "react";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector(state => state.contactList);
  const searchNow = useSelector(state => state.searchNow);
  const filterList = contactList.filter(contact =>
    contact.name.toLowerCase().includes(searchNow.toLowerCase())||
    contact.phoneNumber.includes(searchNow)
  );
  return (
    <div className="listcontact">
      {filterList.map(contact => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </div>
  );
};


export default ContactList;
