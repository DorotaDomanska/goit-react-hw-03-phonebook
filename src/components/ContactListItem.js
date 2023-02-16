import { Component } from 'react';
import css from './Phonebook.module.css';

export class ContactListItem extends Component {
  handleDelete = evt => {
    const { onDelete } = this.props;
    const contactId = evt.target.id;

    onDelete(contactId);
  };

  render() {
    const { myFilteredContacts } = this.props;

    return (
      <div>
        {myFilteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button
              id={id}
              className={css.deleteButton}
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}
