import React from 'react'
import Popup from '../components/Popup'
import AddStudent from '../Formy/AddStudent'

const Students = () => {
  return (
    <div className="">
      <Popup buttonText="Add student">
        <AddStudent />
      </Popup>
    </div>
  )
}

export default Students