import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <div className={css.userInfo}>
          <FaUser className={css.userIcon} />{" "}
          <span className={css.userName}>{contact.name}</span>
        </div>
        <div className={css.phoneInfo}>
          <FaPhone className={css.phoneIcon} />{" "}
          <span className={css.phoneNumber}>{contact.number}</span>
        </div>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
