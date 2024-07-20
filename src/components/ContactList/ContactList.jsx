import React from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectContacts);

    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => (
                <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
            ))}
        </ul>
    );
};

export default ContactList;

// import Contact from "../Contact/Contact";
// import React from "react";
// import css from "./ContactList.module.css";

// export default function ContactList({ contacts, onDelete }) {
//     return (
//         <ul className={css.contactList}>
//             {contacts.map((contact) => (
//                 <Contact
//                     key={contact.id}
//                     id={contact.id}
//                     name={contact.name}
//                     number={contact.number}
//                     onDelete={onDelete}
//                 />
//             ))}
//         </ul>
//     );
// }
