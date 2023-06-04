import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';
import AddVehicle from '../../Formy/AddVehicle';

const Vehicles = () => {
    const [students, setStudents] = useState([]);
    const [tests, setTests] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/students');
                setStudents(response.data);
            } catch (err) {
                console.error('Error fetching students:', err);
            }
        };
        fetchStudents();
    }, []);

    const fetchTests = async (studentId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/tests/passed/${studentId}`);
            setTests(response.data);
        } catch (err) {
            console.error('Error fetching tests:', err);
        }
    };

    const handleStudentSelect = (event) => {
        const studentId = event.target.value;
        setSelectedStudent(studentId);
        fetchTests(studentId);
    };

    return (
        <div>
            <section className="min-h-screen bg-slate-800 font-sans text-center">
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
                    <div className="overflow-y-auto py-5 px-3 h-full  border-r  bg-gray-800 border-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/Tests" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <span className="w-6 h-6 mr-2">
                                        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 00-.707 1.707L13.586 9H3a1 1 0 000 2h10.586l-5.293 5.293a1 1 0 101.414 1.414l7-7a1 1 0 000-1.414l-7-7A1 1 0 009 2z"></path>
                                        </svg>
                                    </span>
                                    <span>Tests</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="p-4 sm:ml-64 text-white">
                    <p className="text-lg">Please select a student to show his passed tests:</p>
                    <select onChange={handleStudentSelect} value={selectedStudent} className="text-white text-lg bg-gray-800">
                        <option>Select a student...</option>
                        {students.map(student => 
                            <option key={student.studentId} value={student.studentId} className="text-white text-lg">
                                {student.studentId + " " + student.firstName + " " + student.lastName}
                            </option>
                        )}
                    </select>

                    <div className="mx-auto flex-1 p-3">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Test Date</th>
                                        <th scope="col" className="px-6 py-3">Score</th>
                                        <th scope="col" className="px-6 py-3">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tests[0] && tests.map(test => 
                                        <tr key={test.testId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{test.testDate}</td>
                                            <td className="px-6 py-4">{test.score}</td>
                                            <td className="px-6 py-4">{test.result ? "Passed" : "Failed"}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Vehicles;
