import React, { useEffect, useState } from 'react'
import Popup from '../../components/Popup'
import AddVehicle from '../../Formy/AddVehicle'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vehicles = () => {

  const [tests, setTests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('1');

  const fetchVehicles = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tests/average/${id}`);
      setTests(response.data);
      console.log(response);
    } catch (err) {
      console.error('Error fetching tests:', err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/courses`);
      setCourses(response.data);
      console.log(response);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleButtonClick = () => {
    fetchVehicles(courseId);
  };

  return (
    <div>
      <section className="min-h-screen bg-slate-800 font-sans text-center">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
          <div className="overflow-y-auto py-5 px-3 h-full  border-r  bg-gray-800 border-gray-700">
            <ul className="space-y-2">
              <li>
                <Link to="/Tests" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Tests</span>
                </Link>
              </li>
              <li>
                <Link to="/passed" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">passed</span>
                </Link>
              </li>
              <li>
                <Link to="/AvrageTest" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">AvrageTest</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64 text-white">
  <p className="text-lg font-bold mb-2">Please select which course you want to see the average result from:</p>
  <select
    className="mb-4 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
    value={courseId}
    onChange={(e) => {
      setCourseId(e.target.value);
      fetchVehicles(e.target.value);
    }}
  >
    {courses.map(course =>
      <option key={course.id} value={course.courseId}>
        {course.courseId + " " + course.courseName}
      </option>
    )}
  </select>

  <div className="mx-auto flex-1 p-3">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <p className="text-sm">
        {tests && 
          `The average result for ${
            (courses.find(course => course.courseId == courseId) || {}).courseName
          } is ${tests}`}
      </p>
    </div>
  </div>
</div>



      </section>
    </div>
  )
}

export default Vehicles
