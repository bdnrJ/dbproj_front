import React from 'react'
import Popup from '../components/Popup'
import AddCourse from '../Formy/AddCourse'

const Courses = () => {
    return (
        <div>
            <Popup buttonText="Add Course">
                <AddCourse />
            </Popup>
        </div>
    )
}

export default Courses