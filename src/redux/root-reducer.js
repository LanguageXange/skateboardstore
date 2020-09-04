import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// this is the local storage
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import DirectoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
// configuration is an object, start storage from the root
// whitelist is an array of string name of the reducer
// since user is handled by firebase we just want cart to persist

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
