import React from 'react'
import Popup from '../components/Popup'

const Students = () => {
  return (
    <div className="">
      <Popup buttonText="Add student">
        <form action="">
          <input type="text" placeholder='name' />
        </form>
      </Popup>
    </div>
  )
}

export default Students