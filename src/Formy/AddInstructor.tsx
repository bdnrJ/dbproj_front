// AddInstructor.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type InstructorType = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    email: string;
    address: string;
    hireDate: string;
};

const AddInstructor: React.FC = () => {
    const [disabled, setDisabled] = useState(false);

    const schema: ZodType<InstructorType> = z.object({
        firstName: z.string().max(45, 'Too long').min(1, 'Required'),
        lastName: z.string().max(45, 'Too long').min(1, 'Required'),
        dateOfBirth: z.string().min(1, 'Required'),
        phoneNumber: z.string().min(1, 'Required').max(9, 'Too long'),
        email: z.string().email('Invalid email'),
        address: z.string().min(1, 'Required'),
        hireDate: z.string().min(1, 'Required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<InstructorType>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: InstructorType) => {
        try {
            const response = await axios.post('http://localhost:8080/api/instructors', data);
            setDisabled(true);
            alert("Added new instructor successfully");
            window.location.reload(); // reload the page
        } catch (err) {
            console.error('Error adding instructor:', err);
            alert('Error adding instructor.');
        }
    };

    return (
        <div className="grid place-items-center">
            <div className=" p-12 bg-white ">
                <h1 className="text-xl font-semibold">Add Instructor<br /> <span className="font-normal"></span></h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between gap-3">
                        <span className="w-1/2">
                            <label htmlFor="firstName" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                            <input id="firstName" type="text" placeholder="John" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.firstName && "border-red-500"}`} {...register('firstName', { required: true })} />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </span>
                        <span className="w-1/2">
                            <label htmlFor="lastName" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                            <input id="lastName" type="text" placeholder="Doe" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.lastName && "border-red-500"}`} {...register('lastName', { required: true })} />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </span>
                    </div>

                    <label htmlFor="dateOfBirth" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Birth</label>
                    <input id="dateOfBirth" type="date" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.dateOfBirth && "border-red-500"}`} {...register('dateOfBirth', { required: true })} />
                    {errors.dateOfBirth && <span className="text-red-500 text-xs">{errors.dateOfBirth.message}</span>}

                    <label htmlFor="phoneNumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
                    <input id="phoneNumber" type="text" placeholder="1234567890" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.phoneNumber && "border-red-500"}`} {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}

                    <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input id="email" type="email" placeholder="john.doe@company.com" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.email && "border-red-500"}`} {...register('email', { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

                    <label htmlFor="address" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                    <input id="address" type="text" placeholder="123 Main St" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.address && "border-red-500"}`} {...register('address', { required: true })} />
                    {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}

                    <label htmlFor="hireDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Hire Date</label>
                    <input id="hireDate" type="date" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.hireDate && "border-red-500"}`} {...register('hireDate', { required: true })} />
                    {errors.hireDate && <span className="text-red-500 text-xs">{errors.hireDate.message}</span>}

                    <button type="submit" disabled={disabled} className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none">
                        Add Instructor
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddInstructor;
