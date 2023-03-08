import { createSlice } from "@reduxjs/toolkit";
import { fetchDeleteContacts, fetchAllContacts, fetchAddContacts} from "./contact-operations"
const initialContacts = {
    items:[],
    isLoading: false,
    error: null,
};

const contatsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllContacts.pending, (store) => {
           store.isLoading = true; 
        })
        .addCase(fetchAllContacts.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            store.items = action.payload;
        })
        .addCase(fetchAllContacts.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
        .addCase(fetchAddContacts.pending, (store) => {
            store.isLoading = true; 
        })
        .addCase(fetchAddContacts.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            store.items.push(action.payload);
        })
        .addCase(fetchAddContacts.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
        .addCase( fetchDeleteContacts.pending, (store) => {
            store.isLoading = true; 
        })
        .addCase( fetchDeleteContacts.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            const delIndex = store.items.findIndex(item => item.id === action.payload);
            store.items.splice(delIndex, 1);
        })
        .addCase(fetchDeleteContacts.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
    } 
});

export const { addContact, delContact } = contatsSlice.actions;
export default contatsSlice.reducer;