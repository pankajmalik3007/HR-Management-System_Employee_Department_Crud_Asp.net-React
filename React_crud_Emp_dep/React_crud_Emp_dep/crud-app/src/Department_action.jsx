
import axios from 'axios';
import { Base_Url, apiExtension , Get_All_Dep,Create_Dep,Update_Dep,Delete_Dep } from './Base_Url'; 
import {
  READ_DEPARTMENT,
  INSERT_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT
  
} from './Constant_action';

export const readDepartment = () => async (dispatch) => {
  try {
    const response = await axios.get(Base_Url + apiExtension + Get_All_Dep);
    dispatch({
      type: READ_DEPARTMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
};

export const insertDepartment = (departmentData) => async (dispatch) => {
  try {
    const response = await axios.post(Base_Url + apiExtension + Create_Dep , departmentData )
    dispatch({
      type: INSERT_DEPARTMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error creating department:', error);
  }
};



export const updateDepartment = (departmentId, departmentData) => async (dispatch) => {
  try {
    const response = await axios.put(Base_Url + apiExtension + Update_Dep, { id: departmentId, ...departmentData });
    dispatch({
      type: UPDATE_DEPARTMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error updating department:', error);
  }
};


export const deleteDepartment = (departmentId) => async (dispatch) => {
  try {
  
    const response = await axios.delete(Base_Url + apiExtension + Delete_Dep + `${departmentId}`);
    dispatch({
      type: DELETE_DEPARTMENT,
      payload: { id: departmentId },
    });
  } catch (error) {
    console.error('Error deleting department:', error);
  }
};


