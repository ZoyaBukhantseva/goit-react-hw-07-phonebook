import axios from "axios";

axios.defaults.baseURL="https://6400a1b329deaba5cb3c0dfa.mockapi.io/contacts";

export const getAllContacts =  async () => {
    const { data } = await axios.get("/contacts");
    return data;
};

export const addContacts = async(data) => {
    const {data: result} = await axios.post("/contacts", data);
    return result;
}

export const deleteContacts = async(id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}

