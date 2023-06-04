import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type TestType = {
  result: number;
  score: number;
  testDate: Date;
  courseID: number;
  instructorID: number;
  studentID: number;
};

const AddTest: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [courseList, setCourseList] = useState<number[]>([]);
  const [studentList, setStudentList] = useState<number[]>([]);
  const [instructorList, setInstructorList] = useState<number[]>([]); // New state for instructor list

  const schema: ZodType<TestType> = z.object({
    result: z.number(),
    score: z.number().min(0, 'Score must be greater than or equal to 0'),
    testDate: z.date(),
    courseID: z.number().positive('Course ID must be positive'),
    instructorID: z.number().positive('Instructor ID must be positive'),
    studentID: z.number().positive('Student ID must be positive'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestType>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const fetchCourseList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        const courses = response.data;
        const courseIDs = courses.map((course: any) => course.id);
        setCourseList(courseIDs);
      } catch (err) {
        console.error('Error fetching course list:', err);
      }
    };

    const fetchStudentList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        const students = response.data;
        const studentIDs = students.map((student: any) => student.id);
        setStudentList(studentIDs);
      } catch (err) {
        console.error('Error fetching student list:', err);
      }
    };

    const fetchInstructorList = async () => { // Fetch the instructor list from the server
      try {
        const response = await axios.get('http://localhost:8080/api/instructors');
        const instructors = response.data;
        const instructorIDs = instructors.map((instructor: any) => instructor.id);
        setInstructorList(instructorIDs);
      } catch (err) {
        console.error('Error fetching instructor list:', err);
      }
    };

    fetchCourseList();
    fetchStudentList();
    fetchInstructorList(); // Call the fetchInstructorList function
  }, []);

  const onSubmit = async (data: TestType) => {
    try {
      const response = await axios.post('http://localhost:8080/api/tests', data);
      setDisabled(true);
      alert('Added new test successfully');
      window.location.reload();
    } catch (err) {
      console.error('Error adding test:', err);
      alert('Error adding test.');
    }
  };

  return (
    <div className="grid w-14/12 place-items-center">
      <div className="p-12 bg-white">
        <h1 className="text-xl font-semibold">
          Add Test
          <br /> <span className="font-normal"></span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="result" className="block text-xs font-semibold text-gray-600 uppercase">
            Result
          </label>
          <select
            id="result"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.result && 'border-red-500'}`}
            {...register('result', { required: true })}
          >
            <option value="">Select Result</option>
            <option value="1">Pass</option>
            <option value="0">Fail</option>
          </select>

          <label htmlFor="score" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Score
          </label>
          <input
            id="score"
            type="number"
            placeholder="Score"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.score && 'border-red-500'
            }`}
            {...register('score', { required: true })}
          />
          {errors.score && <span className="text-red-500 text-xs">{errors.score.message}</span>}

          <label htmlFor="testDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Test Date
          </label>
          <input
            id="testDate"
            type="date"
            placeholder="Test Date"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.testDate && 'border-red-500'
            }`}
            {...register('testDate', { required: true })}
          />
          {errors.testDate && <span className="text-red-500 text-xs">{errors.testDate.message}</span>}

          <label htmlFor="courseID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Course ID
          </label>
          <select
            id="courseID"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.courseID && 'border-red-500'
            }`}
            {...register('courseID', { required: true })}
          >
            <option value="">Select Course ID</option>
            {courseList.map((courseID) => (
              <option key={courseID} value={courseID}>
                {courseID}
              </option>
            ))}
          </select>
          {errors.courseID && <span className="text-red-500 text-xs">{errors.courseID.message}</span>}

          <label htmlFor="instructorID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Instructor ID
          </label>
          <select
            id="instructorID"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.instructorID && 'border-red-500'
            }`}
            {...register('instructorID', { required: true })}
          >
            <option value="">Select Instructor ID</option>
            {instructorList.map((instructorID) => (
              <option key={instructorID} value={instructorID}>
                {instructorID}
              </option>
            ))}
          </select>
          {errors.instructorID && <span className="text-red-500 text-xs">{errors.instructorID.message}</span>}

          <label htmlFor="studentID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Student ID
          </label>
          <select
            id="studentID"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.studentID && 'border-red-500'
            }`}
            {...register('studentID', { required: true })}
          >
            <option value="">Select Student ID</option>
            {studentList.map((studentID) => (
              <option key={studentID} value={studentID}>
                {studentID}
              </option>
            ))}
          </select>
          {errors.studentID && <span className="text-red-500 text-xs">{errors.studentID.message}</span>}

          <button
            type="submit"
            disabled={disabled}
            className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none"
          >
            Add Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
