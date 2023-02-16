import { Component } from 'react';
import { ContactListItem } from './ContactListItem';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { myFilteredContacts, onDelete } = this.props;

    return (
      <ul className={css.list}>
        <ContactListItem
          myFilteredContacts={myFilteredContacts}
          onDelete={onDelete}
        />
      </ul>
    );
  }
}

ContactListItem.propTypes = {
  myFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
