import { getAllContacts, addContacts,deleteContacts } from "..//shared/servises/contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchAllContacts = createAsyncThunk("contacts/fetchAll", async(_, thunkAPI) =>{
    try{
        return await getAllContacts();
    } catch({response}) {
        return thunkAPI.rejectWithValue(response.data);
    }
});
export const fetchAddContacts = createAsyncThunk("contacts/fetchAddContact", async({name, phone}, thunkAPI) =>{
    try{
        return await addContacts({name, phone});
    }
    catch({response}) {
        return thunkAPI.rejectWithValue(response.data);
    }
    },{
    condition: ({name}, {getState}) => {
        const {contacts} = getState();

        const isPresentContact = contacts.items.find(element => 
            element.name.toLowerCase() === name.toLowerCase()
        );

        if (isPresentContact) { 
            alert('Contact is already exist!')
            return false;
        };
    }
});


export const fetchDeleteContacts = createAsyncThunk("contacts/fetchDelContact", async(id, thunkAPI) => {
    try {
        await deleteContacts(id);
        return id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
