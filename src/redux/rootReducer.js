import { combineReducers } from "@reduxjs/toolkit";

import contactsReduser from "./contactSlise";
import filterReducer from "./filterSlise";

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
});

export default rootReducer;