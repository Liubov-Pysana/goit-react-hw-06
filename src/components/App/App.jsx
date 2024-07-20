import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};

export default App;

// import React from "react";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import { useSelector, useDispatch } from "react-redux";
// import { selectContacts, addContact, deleteContact } from "../../redux/contactsSlice";
// import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
// import css from "./App.module.css";

// const App = () => {
//     const dispatch = useDispatch();
//     const contacts = useSelector(selectContacts);
//     const filter = useSelector(selectNameFilter);

//     const handleSearchChange = (evt) => {
//         dispatch(changeFilter(evt.target.value));
//     };

//     const handleAddContact = (newContact) => {
//         dispatch(addContact(newContact));
//     };

//     const handleDeleteContact = (id) => {
//         dispatch(deleteContact(id));
//     };

//     const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

//     return (
//         <div className={css.container}>
//             <h1>Phonebook</h1>
//             <ContactForm addContact={handleAddContact} />
//             <SearchBox inputValue={filter} handleChange={handleSearchChange} />
//             <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
//         </div>
//     );
// };

// export default App;
