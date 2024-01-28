import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

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
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(URL);
        if (!data.ok) {
          throw new Error(`HTTP error! Status: ${data.status}`);
        }
        const response = await data.json();
        setCourses(response);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          courseID={course.id}
          courseName={course.name}
          courseDescription={course.description}
          instructor={course.instructor}
          completed={course.completed}
        />
      ))}
    </div>
  );
};

export default Dashboard;
