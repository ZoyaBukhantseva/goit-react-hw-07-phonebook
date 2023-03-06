import axios from "axios";


const contactInstanse = axios.create({
baseURL:"https://6400a1b329deaba5cb3c0dfa.mockapi.io/contacts/contacts"
})

export  const getAllContacts= async()=>{
    const {data}= await contactInstanse.get("/");
    return data};
 

 export const addContacts = async(data) => {
    const {data: result} = await contactInstanse.post("/", data);
    return result;
}

export const deleteContacts = async(id) => {
    const {data} = await contactInstanse.delete(`/${id}`);
    return data;
}
