// AddCourse.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type CourseType = {
    courseName: string;
    courseDescription: string;
    courseDuration: number;
    courseFee: number;
};

const AddCourse: React.FC = () => {
    const [disabled, setDisabled] = useState(false);

    const schema: ZodType<CourseType> = z.object({
        courseName: z.string().max(100, 'Too long').min(1, 'Required'),
        courseDescription: z.string().max(500, 'Too long').min(1, 'Required'),
        courseDuration: z.number().positive('Must be positive').int('Must be an integer'),
        courseFee: z.number().positive('Must be positive'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<CourseType>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: CourseType) => {
        try {
            const response = await axios.post('http://localhost:8080/api/courses', data);
            setDisabled(true);
            alert("Added new course successfully");
            window.location.reload(); // reload the page
        } catch (err) {
            console.error('Error adding course:', err);
            alert('Error adding course.');
        }
    };

    return (
        <div className="grid w-14/12 place-items-center">
            <div className=" p-12 bg-white ">
                <h1 className="text-xl font-semibold">Add course<br /> <span className="font-normal"></span></h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="courseName" className="block text-xs font-semibold text-gray-600 uppercase">Course Name</label>
                    <input id="courseName" type="text" placeholder="Course Name" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.courseName && "border-red-500"}`} {...register('courseName', { required: true })} />
                    {errors.courseName && <span className="text-red-500 text-xs">{errors.courseName.message}</span>}

                    <label htmlFor="courseDescription" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Course Description</label>
                    <input id="courseDescription" type="text" placeholder="Course Description" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.courseDescription && "border-red-500"}`} {...register('courseDescription', { required: true })} />
                    {errors.courseDescription && <span className="text-red-500 text-xs">{errors.courseDescription.message}</span>}

                    <label htmlFor="courseDuration" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Course Duration</label>
                    <input id="courseDuration" type="number" placeholder="Course Duration (hours)" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.courseDuration && "border-red-500"}`} {...register('courseDuration', { required: true, valueAsNumber:true  })} />
                    {errors.courseDuration && <span className="text-red-500 text-xs">{errors.courseDuration.message}</span>}

                    <label htmlFor="courseFee" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Course Fee</label>
                    <input id="courseFee" type="number" placeholder="Course Fee ($)" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.courseFee && "border-red-500"}`} {...register('courseFee', { required: true, valueAsNumber:true })} />
                    {errors.courseFee && <span className="text-red-500 text-xs">{errors.courseFee.message}</span>}

                    <button type="submit" disabled={disabled} className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none">
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
