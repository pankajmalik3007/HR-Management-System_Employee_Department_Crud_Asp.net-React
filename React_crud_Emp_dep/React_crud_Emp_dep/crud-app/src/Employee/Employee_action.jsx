
import axios from 'axios';
import { Base_Url,apiExtension,Get_All_Emp,Create_Emp,Update_Emp,Delete_Emp } from './Base1_Url';
import { READ_EMPLOYEE,INSERT_EMPLOYEE,UPDATE_EMPLOYEE,DELETE_EMPLOYEE } from './Constant1_action';

export const readEmployee = () => async (dispatch) => {
  try {
    const response = await axios.get(Base_Url + apiExtension + Get_All_Emp);
    dispatch({
      type: READ_EMPLOYEE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching Employee:', error);
  }
};

export const insertEmployee = (employeeData) => async (dispatch) => {
  try {
    const response = await axios.post(Base_Url + apiExtension + Create_Emp , employeeData )
    console.log(response)
    dispatch({
      type: INSERT_EMPLOYEE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error creating department:', error);
  }
};



export const updateEmployee = (EmployeeId, employeeData) => async (dispatch) => {
  try {
    const response = await axios.put(Base_Url + apiExtension + Update_Emp, { id: EmployeeId, ...employeeData });
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error updating department:', error);
  }
};


export const deleteEmployee = (EmployeeId) => async (dispatch) => {
  try {
  
    const response = await axios.delete(Base_Url + apiExtension + Delete_Emp + `${EmployeeId}`);
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: { id: EmployeeId},
    });
  } catch (error) {
    console.error('Error deleting department:', error);
  }
};


