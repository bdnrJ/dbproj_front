import React from 'react'
import Popup from '../components/Popup'
import AddInstructor from '../Formy/AddInstructor'

const Instructors = () => {
    return (
        <Popup buttonText="Add Instructor">
            <AddInstructor />
        </Popup>
    )
}

export default Instructors