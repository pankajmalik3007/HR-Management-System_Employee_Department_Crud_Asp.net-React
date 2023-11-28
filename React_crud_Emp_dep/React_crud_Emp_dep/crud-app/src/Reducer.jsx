import { READ_DEPARTMENT, INSERT_DEPARTMENT, UPDATE_DEPARTMENT, DELETE_DEPARTMENT } from './Constant_action';

const initialState = {
  departments: []
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_DEPARTMENT:
      return {
        ...state,
        departments: action.payload
      };
    case INSERT_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload]
      };
    case UPDATE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.map(dep =>
          dep.id === action.payload.id ? action.payload : dep
        )
      };
      case DELETE_DEPARTMENT:
      
      const updatedDepartments = state.departments.filter((department) => department.id !== action.payload.id);
      return {
        ...state,
        departments: updatedDepartments,
      };

    default:
      return state;
  }
};

export default departmentReducer;
