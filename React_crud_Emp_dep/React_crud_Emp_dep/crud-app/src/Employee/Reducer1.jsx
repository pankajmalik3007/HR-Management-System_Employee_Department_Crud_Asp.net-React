import { DELETE_EMPLOYEE, INSERT_EMPLOYEE, READ_EMPLOYEE, UPDATE_EMPLOYEE } from "./Constant1_action";


const initialState = {
  employee: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    case INSERT_EMPLOYEE:
      return {
        ...state,
        employee: [...state.employee, action.payload]
        
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employee: state.employee.map(dep => dep.id === action.payload.id ? action.payload : dep
        )
      };
      case DELETE_EMPLOYEE:
      
      const updatedDepartments = state.employee.filter((department) => department.id !== action.payload.id);
      return {
        ...state,
        employee: updatedDepartments,
      };

    default:
      return state;
  }
};

export default employeeReducer;
