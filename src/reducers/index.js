import { combineReducers } from 'redux';
import sitesReducer from "./siteReducer";
import usersReducer from "./userReducer";

export default combineReducers({
    sites: sitesReducer,
    users: usersReducer
})