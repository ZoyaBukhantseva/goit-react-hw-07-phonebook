import React from 'react';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { fetchDeleteContacts } from "..//..//redux/contact-operations";

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone}) => {
  const dispatch = useDispatch();

  const deleteContact = (e) => {
      const contactDelID = e.currentTarget.name;
      dispatch(fetchDeleteContacts(contactDelID));
  };
  return (
    <>
      <li className={styles.contactListItem}>
        {name} : {phone}
        <button
          className={styles.contactListItemBtn}
          name={ id }
          onClick={ deleteContact }>Delete</button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
