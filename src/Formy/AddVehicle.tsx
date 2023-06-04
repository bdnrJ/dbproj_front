// AddVehicle.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type VehicleType = {
    make: string;
    model: string;
    year: string;
    licensePlate: string;
    color: string;
    registrationDate: string;
    maintenanceDate: string;
};

type Props = {
}

const AddVehicle: React.FC<Props> = ({ }) => {
    const [disabled, setDisabled] = useState(false);

    const schema: ZodType<VehicleType> = z.object({
        make: z.string().max(45, 'Too long').min(1, 'Required'),
        model: z.string().max(45, 'Too long').min(1, 'Required'),
        year: z.string().min(1, 'Required').max(4, 'Bad format'),
        licensePlate: z.string().min(1, 'Required').max(10, 'Bad format'),
        color: z.string().min(1, 'Required'),
        registrationDate: z.string().min(1, 'Required'),
        maintenanceDate: z.string().min(1, 'Required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<VehicleType>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: VehicleType) => {
        try {
            const response = await axios.post('http://localhost:8080/api/vehicles', data);
            setDisabled(true);
            alert("Added new vehicle successfully");
            window.location.reload(); // reload the page
        } catch (err) {
            console.error('Error adding vehicle:', err);
            alert('Error adding vehicle.');
        }
    };

    return (
        <div className="grid place-items-center">
            <div className=" p-12 bg-white ">
                <h1 className="text-xl font-semibold">Add vehicle<br /> <span className="font-normal"></span></h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between gap-3">
                        <span className="w-1/2">
                            <label htmlFor="make" className="block text-xs font-semibold text-gray-600 uppercase">Make</label>
                            <input id="make" type="text" placeholder="Toyota" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.make && "border-red-500"}`} {...register('make', { required: true })} />
                            {errors.make && <span className="text-red-500 text-xs">{errors.make.message}</span>}
                        </span>
                        <span className="w-1/2">
                            <label htmlFor="model" className="block text-xs font-semibold text-gray-600 uppercase">Model</label>
                            <input id="model" type="text" placeholder="Corolla" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.model && "border-red-500"}`} {...register('model', { required: true })} />
                            {errors.model && <span className="text-red-500 text-xs">{errors.model.message}</span>}
                        </span>
                    </div>

                    <label htmlFor="year" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Year</label>
                    <input id="year" type="text" placeholder="2023" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.year && "border-red-500"}`} {...register('year', { required: true })} />
                    {errors.year && <span className="text-red-500 text-xs">{errors.year.message}</span>}

                    <label htmlFor="licensePlate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">License Plate</label>
                    <input id="licensePlate" type="text" placeholder="AB123CD" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.licensePlate && "border-red-500"}`} {...register('licensePlate', { required: true })} />
                    {errors.licensePlate && <span className="text-red-500 text-xs">{errors.licensePlate.message}</span>}

                    <label htmlFor="color" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Color</label>
                    <input id="color" type="text" placeholder="Blue" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.color && "border-red-500"}`} {...register('color', { required: true })} />
                    {errors.color && <span className="text-red-500 text-xs">{errors.color.message}</span>}

                    <label htmlFor="registrationDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Registration Date</label>
                    <input id="registrationDate" type="date" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.registrationDate && "border-red-500"}`} {...register('registrationDate', { required: true })} />
                    {errors.registrationDate && <span className="text-red-500 text-xs">{errors.registrationDate.message}</span>}

                    <label htmlFor="maintenanceDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Maintenance Date</label>
                    <input id="maintenanceDate" type="date" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.maintenanceDate && "border-red-500"}`} {...register('maintenanceDate', { required: true })} />
                    {errors.maintenanceDate && <span className="text-red-500 text-xs">{errors.maintenanceDate.message}</span>}

                    <button type="submit" disabled={disabled} className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none">
                        Add Vehicle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVehicle;
