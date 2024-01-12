import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
 
import "./App.css";
import Course from "./models/course";
import * as courseService from "./services/course-service";
import CourseTable from "./home/CourseTable/CourseTable";
import CourseSearch from "./home/CourseSearch/CourseSearch";
import NavBar from "./home/NavBar/NavBar";
 
const initialArray: Course[] = [];
// Hook
function App() {
  const [courseList, setCourses] = useState(initialArray);
 
  useEffect(() => {
    courseService.search().then((courses) => setCourses(courses));
  }, []);
 
  const searchHandler = (query: string) => {
    const filteredCourses = courseList.filter((c) => c.name.startsWith(query));
  };
 
  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <CourseSearch onSearch={searchHandler}></CourseSearch>
        <CourseTable courses={courseList}></CourseTable>
      </Container>
    </div>
  );
}
 
export default App;