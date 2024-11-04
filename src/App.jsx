import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

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
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
