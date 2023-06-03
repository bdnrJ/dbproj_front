import React from 'react'
import Popup from '../components/Popup'
import AddVehicle from '../Formy/AddVehicle'

const Vehicles = () => {
    return (
        <div>
            <Popup buttonText="Add Vehicle">
                <AddVehicle />
            </Popup>
        </div>
    )
}

export default Vehicles