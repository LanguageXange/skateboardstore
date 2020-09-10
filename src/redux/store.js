import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// logger is a middleware for debugging

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
// only want logging in dev mode not in production mode

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// spread the array of middlewares so that in the future just add more stuff into the middlewares array

const persistor = persistStore(store);

export { store, persistor };
