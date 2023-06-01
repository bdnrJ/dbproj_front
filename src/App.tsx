import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [test, setTest] = useState<any>();

  const todayLessons = async () => {
      try{
        const response = await axios.get('http://localhost:8080/api/students/today_lessons');
        console.log(response);
        setTest(response.data)
      }catch(err: any){
        console.log(err);
      }
  }

  return (
    <>
      <div>
        <button onClick={todayLessons} >Students with lessons today</button>
        <ul>
          {test.map((gowno: any) => (
            <li>{gowno.firstName + " " + gowno.lastName}</li>
          ))}
        </ul>
        <button onClick={() => console.log(test)} >log</button>
      </div>
    </>
  )
}

export default App