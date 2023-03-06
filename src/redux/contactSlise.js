import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import {fetchAllContactsLoading,fetchAllContactsSuccess,fetchAllContactsError} from "./contact-actions"
const initialContacts =   {
    items: [],
    isLoading: false,
    error: null
  };

const contctsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
       [fetchAllContactsLoading]:(store=>{store.isLoading=true;}),
       [fetchAllContactsSuccess]:(store,{payload}) => {
        store.isLoading = false;
        store.items = payload;
    },
    [fetchAllContactsError]: (store, {payload}) => {
        store.isLoading = false;
        store.error = payload;
    },
    
    
        // delContact(state,action){return state.filter(el => el.id !== action.payload)},
    }
});

export const { addContact, delContact } = contctsSlice.actions;
export default contctsSlice.reducer;