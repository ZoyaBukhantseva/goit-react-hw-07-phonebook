import { getAllContacts, addContacts,deleteContacts } from "..//shared/servises/contacts-api";
import  { fetchAllContactsError, fetchAllContactsLoading, fetchAllContactsSuccess ,fetchAddContactsLoading,fetchAddContactsSuccess,fetchAddContactsError,fetchDeleteContactsLoading,fetchDeleteContactsSuccess,fetchDeleteContactsError} from "./contact-actions"

export const fetchAllContacts=() =>{
const func = async(dispatch)=>{
    try{
dispatch(fetchAllContactsLoading());
const data = await getAllContacts()
dispatch(fetchAllContactsSuccess())
    }
    catch({response}){dispatch(fetchAllContactsError(response.data.message))}
}
return func;
}
const isDublicate = (contacts, {name, number}) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const result = contacts.find(({ name, number }) => {
        return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
    })
 return Boolean(result)};

export const fetchAddContacts = (data) => {
    const func = async(dispatch, getState) => {
        try {
            const {contacts} = getState();
            if(isDublicate(contacts.items, data)) {
                alert(` ${data.name} is already ixist`);
                return false;
            }
            dispatch(fetchAddContactsLoading());
            const result = await addContacts(data);
            dispatch(fetchAddContactsSuccess(result));
        }
        catch({response}) {
            dispatch(fetchAddContactsError(response.data.message)); 
        }
    }

    return func;
}

export const fetchDeleteContacts = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(fetchDeleteContactsLoading());
            await deleteContacts(id);
            dispatch(fetchDeleteContactsSuccess(id));
        }
        catch({response}) {
            dispatch(fetchDeleteContactsError(response.data.message)); 
        }
    }

    return func;
}