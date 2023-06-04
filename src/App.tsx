import { useState } from 'react'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import './App.css'
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './views/Home';
import Students from './views/Students/Students';
import Vehicles from './views/Vehicles/Vehicles';
import Courses from './views/Courses';
import Instructors from './views/Instructors';
import Todaylesson from './views/Students/Todaylesson';
import StudentsWhoStartedInYear from './views/Students/StudentsWhoStartedInYear';
import Assigned from './views/Vehicles/Assigned';
import Maintenance from './views/Vehicles/Maintenance';
import CoursesMaxLesson from './views/CoursesMaxLesson';
import CourseTodayLesson from './views/CourseTodayLesson';
export const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/students",
                element: <Students />
            },
            {
                path: "/Todaylesson",
                element: <Todaylesson />
            },
            {
                path: "/StudentsWhoStartedInYear",
                element: <StudentsWhoStartedInYear />
            },
            {
                path: "/Assigned",
                element: <Assigned />
            },
            {
                path: "/Maintenance",
                element: <Maintenance />
            },
            {
                path: "/vehicles",
                element: <Vehicles />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/CoursesMaxLesson",
                element: <CoursesMaxLesson />
            },
            {
                path: "/CourseTodayLesson",
                element: <CourseTodayLesson />
            },
            {
                path: "/instructors",
                element: <Instructors />

            },
        ]
    },
]); 

// const [test, setTest] = useState<any>();

// const todayLessons = async () => {
//     try{
//       const response = await axios.get('http://localhost:8080/api/students/today_lessons');
//       console.log(response);
//       setTest(response.data)
//     }catch(err: any){
//       console.log(err);
//     }
// }

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App