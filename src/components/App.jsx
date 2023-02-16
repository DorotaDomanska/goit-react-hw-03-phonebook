import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const id = nanoid();
    this.setState(state => ({
      contacts: state.contacts.concat({ name, number, id }),
    }));
  };

  handleDelete = contactId => {
    const currentContacts = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState(() => ({
      contacts: currentContacts,
    }));
  };

  handleInput = text => {
    this.setState({
      filter: text,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          padding: '0px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm myContacts={contacts} onFormSubmit={this.handleSubmit} />
        <h2 className={css.header}>Contacts</h2>
        <Filter onFilter={this.handleInput} />
        <ContactList
          myFilteredContacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

ContactForm.propTypes = {
  myContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  myFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
