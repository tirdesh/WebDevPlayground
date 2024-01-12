import { useState } from 'react';
import './App.css';
import { courses } from './models/course';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';

// Hook - to manage state
function App() {
  const [courseList, setCourses] = useState([...courses]);
  const searchHandler = (query: string) =>{
    const filteredCourses = [...courses].filter(c => c.name.includes(query));
    setCourses(filteredCourses);
  }
  return (
    <div>
      <CourseSearch onSearch={searchHandler}></CourseSearch>
      <CourseTable courses = {courseList}></CourseTable>
    </div>
  );
}

export default App;
