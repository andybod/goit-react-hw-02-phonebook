import css from './ContactList.module.css';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
