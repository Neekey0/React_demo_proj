import { createStore } from "redux";
import EmpReducer from "./Emp/empReducer";
import createSagaMiddleWare from "redux-saga";
import EmpSaga from "./Emp/EmpSaga";
import { applyMiddleware } from "redux";


const sagaMiddleWare = createSagaMiddleWare();
const store = applyMiddleware(sagaMiddleWare)(createStore)(EmpReducer);

sagaMiddleWare.run(EmpSaga);

export default store;
