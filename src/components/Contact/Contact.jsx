import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <li className={css.liItem}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button className={css.deleteButton} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </li>
    );
};

export default Contact;

// import React from "react";
// import css from "./Contact.module.css";

// export default function Contact({ id, name, number, onDelete }) {
//     return (
//         <li className={css.liItem}>
//             <p>Name: {css.liName}</p>
//             <p>Number: {number}</p>
//             <button className={css.deleteButton} onClick={() => onDelete(id)}>
//                 Delete
//             </button>
//         </li>
//     );
// }
