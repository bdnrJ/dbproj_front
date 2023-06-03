import { useState } from 'react'
import {createBrowserRouter, RouterProvider, ScrollRestoration} from "react-router-dom";
import './App.css'
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './views/Home';
import Students from './views/Students';
import Vehicle from './views/vehicle';

export const Layout = () => {
  return (
          <div className="layout">
              <Navbar/>
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
      ]
  },
  {
      path: "/students",
      element:  <Students />
  },
  {
    path: "/vehicle",
    element:  <Vehicle/>
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