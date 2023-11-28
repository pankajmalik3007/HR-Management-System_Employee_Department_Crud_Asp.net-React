
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { readDepartment, insertDepartment, updateDepartment, deleteDepartment } from './Department_action';
import './DepartmentList.css';

const DepartmentList = () => {
  const departments = useSelector(state => state.department.departments);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('insert'); // 'insert', 'update', or 'delete'
  const [selectedDepartment, setSelectedDepartment] = useState({ id: '', name: '' });
  const [updateData, setUpdateData] = useState({ id: '', name: '' });
  const dispatch = useDispatch();
  const [newDepartment, setNewDepartment] = useState({ name: '' });

  useEffect(() => {
    dispatch(readDepartment());
  }, [dispatch]);

  const handleOpenInsertModal = () => {
    setModalMode('insert');
    setIsModalOpen(true);
  };

  const handleOpenUpdateModal = (department) => {
    setIsModalOpen(true);
    setModalMode('update');
    setUpdateData({ id: department.id, name: department.name });
  };

  const handleOpenDeleteModal = (department) => {
    setModalMode('delete');
    setSelectedDepartment(department);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDepartment({ id: '', name: '' });
    setModalMode('insert');
  };

  const handleInsert = () => {
    dispatch(insertDepartment(newDepartment));
    setNewDepartment({ name: '' });
    handleCloseModal();
  };

  const handleUpdate = () => {
    dispatch(updateDepartment(updateData.id, updateData));
    setUpdateData({ id: '', name: '' });
    handleCloseModal();
  };

 
  const handleDelete = () => {
    dispatch(deleteDepartment(selectedDepartment.id));
    handleCloseModal();
  };
  return (
    <div className="department-container">
   <h3 style={{ color: 'blue' }}>Department List</h3>

      <div className="insert-button-container">
        <button className="insert-button" onClick={handleOpenInsertModal}>Insert Department</button>
      </div>

      {/* Department list table */}
      <table className="department-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>
                <button className="update-button" onClick={() => handleOpenUpdateModal(department)}>Update</button>
                <button className="delete-button" onClick={() => handleOpenDeleteModal(department)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for insert/update/delete */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Department Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
      
        {modalMode === 'insert' && (
          <>
            <h3>Add New Department:</h3>
            <input
              type="text"
              placeholder="Department Name"
              value={newDepartment.name}
              onChange={(e) => setNewDepartment({ name: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="insert-button" onClick={handleInsert}>Insert Department</button>
              <button className="insert-button close-button" onClick={handleCloseModal}>Close</button>
            </div>
          </>
        )}

        {modalMode === 'update' && (
          <>
            <h3>Update Department:</h3>
            <input
              type="text"
              placeholder="Department Name"
              value={updateData.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="insert-button update-button" onClick={handleUpdate}>Update Department</button>
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

export default DepartmentList;
