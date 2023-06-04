import axios from 'axios';
import React from 'react'

const DeleteStudent = ({ student }) => {

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/students/${id}`);
            alert(`deleted ${student.name} successfully`)
        } catch (err) {
            console.error('Error deleting student:', err);
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="relative mx-auto w-auto max-w-md px-6 py-4 bg-white rounded-lg shadow-lg text-left">
                <h4 className="text-lg font-medium text-gray-900">Confirm Delete</h4>
                <p className="mt-2 text-sm text-gray-600">Are you sure you want to delete {student.firstName} {student.lastName}?</p>
                <div className="mt-5 flex justify-end">
                    <button onClick={() => deleteStudent(student.studentId)} className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteStudent
