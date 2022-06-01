import { combineReducers } from "redux";
import addToCartReducer from "../reducers/addToCartReducer";

const reducers = combineReducers({
  addToCart: addToCartReducer,
});

export default reducers;
