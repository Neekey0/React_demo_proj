import {createStore} from "redux";
import EmpReducer from "./Emp/empReducer";


const store = createStore(EmpReducer);

export default store;
