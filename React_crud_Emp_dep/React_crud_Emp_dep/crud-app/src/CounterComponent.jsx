
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import './Countercomponent.css';


import { deleteEmployee, insertEmployee, readEmployee, updateEmployee } from './Employee/Employee_action';

const CounterComponent = () => {
  const departments = useSelector(state => state.employee.employee);
  console.log(departments)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('insert'); // 'insert', 'update', or 'delete'
  const [selectedDepartment, setSelectedDepartment] = useState({ id: '', name: '', emp_Addr: '', emp_Photo: ''});
  const [updateData, setUpdateData] = useState({ id: '', name: '' , emp_Addr: '', emp_Photo: ''});
  const dispatch = useDispatch();
  const [newDepartment, setNewDepartment] = useState({ name: '', emp_Addr: '', emp_Photo: '' });

  useEffect(() => {
    dispatch(readEmployee());
  }, [dispatch]);

  const handleOpenInsertModal = () => {
    setModalMode('insert');
    setIsModalOpen(true);
  };

  const handleOpenUpdateModal = (department) => {
    setIsModalOpen(true);
    setModalMode('update');
    setUpdateData({ id: department.id, name: department.name, emp_Addr: department.emp_Addr, emp_Photo: department.emp_Photo });
  };

  const handleOpenDeleteModal = (department) => {
    setModalMode('delete');
    setSelectedDepartment(department);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDepartment({ id: '', name: '', emp_Addr: '', emp_Photo: '' });
    setModalMode('insert');
  };

  const handleInsert = () => {
    dispatch(insertEmployee(newDepartment));
    setNewDepartment({ name: '',emp_Addr: '',emp_Photo: '' });
    handleCloseModal();
  };
 
  
  const handleUpdate = () => {
    dispatch(updateEmployee(updateData.id, updateData));
    setUpdateData({ id: '', name: '',emp_Addr: '',emp_Photo: '' });
    handleCloseModal();
  };

  
  
  
  const handleDelete = () => {
    dispatch(deleteEmployee(selectedDepartment.id));
    handleCloseModal();
  };
  return (
  
<div className="employee-container">
  <h3 style={{ color: 'blue' }}>Employee List</h3>

  <div className="insert-button-container">
    <button className="insert-button" onClick={handleOpenInsertModal}>Add new Employee</button>
  </div>

 
  <table className="employee-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Photo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {departments.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.emp_Addr}</td>
          <td>
            {item.emp_Photo && <img src={item.emp_Photo} alt="Employee" style={{ width: '50px', height: '50px' }} />}
          </td>

          <td>
            <button className="update-button" onClick={() => handleOpenUpdateModal(item)}>Update</button>
            <button className="delete-button" onClick={() => handleOpenDeleteModal(item)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
 <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Employee Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
     

{modalMode === 'insert' && (
  <>
    <h3>Add New Employee:</h3>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Employee Name"
        value={newDepartment.name}
        onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
      />
    </div>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Employee Address"
        value={newDepartment.emp_Addr}
        onChange={(e) => setNewDepartment({ ...newDepartment, emp_Addr: e.target.value })}
      />
    </div>
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="empPhoto">Employee Photo:</label>
      <input
        type="file"
        id="empPhoto"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setNewDepartment({ ...newDepartment, emp_Photo: reader.result });
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
    <div className="modal-buttons">
      <button className="insert-button" onClick={handleInsert}>Insert Employee</button>
      <button className="insert-button close-button" onClick={handleCloseModal}>Close</button>
    </div>
  </>
)}

     
{modalMode === 'update' && (
  <>
    <h3>Update Employee:</h3>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Employee Name"
        value={updateData.name}
        onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
      />
    </div>
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Employee Address"
        value={updateData.emp_Addr}
        onChange={(e) => setUpdateData({ ...updateData, emp_Addr: e.target.value })}
      />
    </div>
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="empPhoto"> Photo:</label>
      <input
        type="file"
        id="empPhoto"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setUpdateData({ ...updateData, emp_Photo: reader.result });
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
    <div className="modal-buttons">
      <button className="insert-button update-button" onClick={handleUpdate}>Update Employee</button>
      <button className="insert-button close-button" onClick={handleCloseModal}>Close</button>
    </div>
  </>
)}


    {modalMode === 'delete' && (
    <>
      <h3>Delete Department:</h3>
      <p>Are you sure you want to delete the department "{selectedDepartment.name}"?</p>
      <div className="modal-buttons">
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        <button className="insert-button close-button" onClick={handleCloseModal}>Cancel</button>
      </div>
    </>
  )}
  </Modal>
    </div>
  );
};

export default CounterComponent;









