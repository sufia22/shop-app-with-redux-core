import { combineReducers } from "redux";
import shopReducer from "./Shop/shopReducer";

// create root reducer
const rootReducer = combineReducers({
  shop: shopReducer,
});

// export
export default rootReducer;
