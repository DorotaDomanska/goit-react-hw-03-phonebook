import { Component } from 'react';
import css from './Phonebook.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };

  onButtonSubmit = evt => {
    evt.preventDefault();
    const { myContacts, onFormSubmit } = this.props;
    const { name, number } = this.state;
    const sameName = myContacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
    sameName
      ? alert(`${name} is already in contacts.`)
      : onFormSubmit(name, number);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onButtonSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
