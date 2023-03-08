
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import s from "..//components/ContactForm/ContactForm.module.css"

const App=()=>{

return (<>
<div className={s.wrapper}>
<div className={s.phonebook}>
    <h1 className={s.header}>Phonebook</h1>
    <ContactForm />
</div>
<div className={s.contacts}>
    <h2  className={s.header}>Contacts</h2>
    <Filter />
    <ContactList/>
    </div>
    </div>
  </>
);
};
 

export default App;
/*
  componentDidMount(){       
    const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
    const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

    if (LocalPhonebook?.length) {
        this.setState({contacts: LocalPhonebook});
    }; 
}

componentDidUpdate (prevProps, prevState) {
    const prevConatcts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (currentContacts !== prevConatcts) {
        localStorage.setItem ('LocalPhonebook', JSON.stringify(currentContacts));
    }
}*/