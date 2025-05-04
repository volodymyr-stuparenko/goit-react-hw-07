import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  }

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" required />
      </label>

      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>

      <button className={css.sendButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
