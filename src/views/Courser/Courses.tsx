import React from 'react'
import Popup from '../../components/Popup'
import AddCourse from '../../Formy/AddCourse'

const Courses = () => {
    return (
        <div>

       


<section className="min-h-screen bg-slate-800 font-sans text-center">
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />

<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
<span className="sr-only">Open sidebar</span>
<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
</svg>
</button>
<Popup buttonText="Add Course">
                <AddCourse />
            </Popup>
<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
<div className="overflow-y-auto py-5 px-3 h-full  border-r  bg-gray-800 border-gray-700">
<ul className="space-y-2">
<li>
     
</li>
<li>
<a href="/Courses" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
    <span className="ml-3">Courses</span>
</a>
</li>
<li>
<a href="/CourseTodayLesson" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
    <span className="ml-3">Today Lesson</span>
</a>
</li>

<li>
<a href="/CoursesMaxLesson" className="flex items-center p-2 text-base font-normal text-blue-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
    <span className="ml-3">Max Lesson</span>
</a>
</li>

</ul>

</div>

</aside>

<div className="p-4 sm:ml-64">
<div className="mx-auto flex-1 p-3">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" className="px-6 py-3">Email</th>
      <th scope="col" className="px-6 py-3">First Name</th>
      <th scope="col" className="px-6 py-3">Last Name</th>
      <th scope="col" className="px-6 py-3">Date of Birth</th>
      <th scope="col" className="px-6 py-3">Phone Number</th>
      <th scope="col" className="px-6 py-3">Address</th>
</tr>
</thead>
<tbody>

</tbody>
</table>
</div>

</div>
</div>


</section>
</div>   
    )
}

export default Courses