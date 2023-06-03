import React from 'react'
import Popup from '../components/Popup'
import AddStudent from '../Formy/AddStudent'

const Students = () => {
  return (
<section className="min-h-screen bg-gray-500 font-sans ">
  <h1 className="text-5xl border-b-4 font-extrabold pb-10 pt-10">Add student</h1>

  <Popup buttonText="Add student">
    <AddStudent />
  </Popup>

  <h1 className="text-5xl font-extrabold pb-10 border-b-4 pt-10">All students</h1>

  <div className="overflow-x-auto p-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg rounded-tr-lg">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3 rounded-bl-lg rounded-br-lg">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">
            Silver
          </td>
          <td className="px-6 py-4">
            Laptop
          </td>
          <td className="px-6 py-4">
            $2999
          </td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h1 className="text-5xl font-extrabold pb-10 border-b-4">Show today lessons</h1>

  <div className="overflow-x-auto p-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg rounded-tr-lg">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">
            Silver
          </td>
          <td className="px-6 py-4">
            Laptop
          </td>
          <td className="px-6 py-4">
            $2999
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h1 className="text-5xl font-extrabold pb-10 border-b-4">Show student who started in given year</h1>

  <div className="overflow-x-auto p-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg rounded-tr-lg">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">
            Silver
          </td>
          <td className="px-6 py-4">
            Laptop
          </td>
          <td className="px-6 py-4">
            $2999
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

  )
}

export default Students