import { combineReducers } from "redux";
import moviesReducer from "./components/store/reducers";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
