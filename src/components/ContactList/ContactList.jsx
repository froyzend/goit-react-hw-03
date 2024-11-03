import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.listPhone}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
