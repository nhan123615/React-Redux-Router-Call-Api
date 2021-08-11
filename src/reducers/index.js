import { combineReducers } from "redux";
import products from "./products";
import editingItem from "./editingItem";

const appReducers = combineReducers({
    products,
    editingItem,
})

export default appReducers;