import { createSelector } from "@reduxjs/toolkit";
export const selectLoadingState = store => store.contacts.isLoading;
export const selectFiltrState = store => store.filter;
export const selectAllContact = store => store.contacts.items;

export const selectFileteredContacts = createSelector(
    [selectAllContact, selectFiltrState],
    (allContacts, filter) => {
      if(filter){
        return allContacts.filter(contact =>      
        contact.name.toLowerCase().includes(filter.toLowerCase()));
      } else {
        return allContacts;
      }
}); 

export const selectErorr = store => store.contacts.error; 