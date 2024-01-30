import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import LoadingSpinner from "./UI/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "../store/slices/type";
import { fetchData } from "../store/slices/dataSlice";

const URL =
  "https://student-dashboard-bf0b4-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json";

interface Course {
  id: number;
  name: string;
  description: string;
  instructor: string;
  completed: number;
}

const Dashboard = () => {
  const { course, loading, error, filter } = useAppSelector(
    (state) => state.course
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(URL));
  }, []);

  //filtering data based on name and tutor
  const filteredCourses = course.filter(
    (c) =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
      {filteredCourses.length > 0 &&
        filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            courseID={course.id}
            courseName={course.name}
            courseDescription={course.description}
            instructor={course.instructor}
            completed={course.completed}
            image={course.thumbnail}
          />
        ))}
    </div>
  );
};

export default Dashboard;
