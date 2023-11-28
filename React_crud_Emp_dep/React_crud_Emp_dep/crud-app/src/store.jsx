import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import departmentReducer from './Reducer'; 
import employeeReducer from './Employee/Reducer1';



const rootReducer = combineReducers({
  department: departmentReducer ,
  employee : employeeReducer,
});


const middleware = [thunk];


const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
