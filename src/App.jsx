import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    const results = contacts.filter((contact) => {
      if (contact.name) {
        return contact.name.toLowerCase().includes(inputValue.toLowerCase());
      }
      return false;
    });
    setFilteredContacts(results);
  }, [inputValue, contacts]);

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onSearch={handleChange} value={inputValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
