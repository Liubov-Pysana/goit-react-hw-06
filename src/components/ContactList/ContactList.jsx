import React from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.contactList}>
            {filteredContacts.map((contact) => (
                <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
            ))}
        </ul>
    );
};

export default ContactList;
