import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState<any>(null);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://student-dashboard-bf0b4-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${courseId}.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCourseDetails(data);
      } catch (error: any) {
        console.error("Error fetching course details:", error.message);
      }
    };

    getCourseDetails();
  }, [courseId]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{courseDetails.name}</p>
      <p>{courseDetails.description}</p>
      <p>{courseDetails.instructor}</p>
      <p>{courseDetails.completed}</p>

      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${courseDetails.completed}%` }}
        >
          {courseDetails.completed}%
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
