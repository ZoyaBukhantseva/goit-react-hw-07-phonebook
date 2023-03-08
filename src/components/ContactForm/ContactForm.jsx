import { fetchAddContacts } from '..//..//redux/contact-operations';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';

const ContactForm=()=>{
  const dispatch = useDispatch();

  const handleSubmit = e => {

      e.preventDefault();
      const form = e.currentTarget;
      const name = form.elements.name.value;
      const phone = form.elements.number.value;

      const newContact = { name, phone }; 
      const request = dispatch(fetchAddContacts(newContact));
      request.then(res => res.type === "contacts/fetchAddContact/fulfilled" && form.reset());
  
  }
  
 return (
      <>
        <form  className={styles.formwrap}  onSubmit={handleSubmit}>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              type="text"
              name="name"
              placeholder="Enter name..."
            ></input>
          </label>
          <label className={styles.contactFormLable}>
            <input
            className={styles.input}
              type="tel"
              name="number"
              placeholder="Enter number..."
            ></input>
          </label>

          <button className={styles.btn} type="submit">Add contact</button>
        </form>
      </>
    );
}


export default ContactForm;