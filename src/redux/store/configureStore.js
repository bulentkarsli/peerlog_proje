import {applyMiddleware, createStore} from "redux"
import rootReducer from "../reducers"
import thunk from "redux-thunk";
//import {loadState,saveState} from "./sessionStore";

//const persistedState=loadState();
const store = createStore(rootReducer,applyMiddleware(thunk));
/*store.subscribe(() => {
    saveState(store.getState());
});*/

export default function configureStore() {
    return store;

}
