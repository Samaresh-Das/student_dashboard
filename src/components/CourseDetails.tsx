import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";
import CourseProgress from "./CourseProgress";

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
    return <LoadingSpinner />;
  }

  return (
    <div className="m-20 shadow-2xl p-5">
      <p className=" text-[30px] text-wrap italic">
        <span className="font-bold underline not-italic">
          {courseDetails.name}
        </span>{" "}
        - {courseDetails.location}
      </p>
      <div className="flex flex-row justify-between">
        <div className="mr-10">
          <p className="text-wrap">{courseDetails.description}</p>
          <p className="text-sm italic mt-7">
            By{" "}
            <span className="font-bold text-gray-500 underline">
              {courseDetails.instructor}
            </span>
          </p>
          <div className="text-lg font-bold mt-7">
            Pre-Requisites{" "}
            <ul className="font-normal text-gray-600 list-disc  ml-5">
              {courseDetails.prerequisites.map(
                (need: string, index: number) => (
                  <li key={index}>{need}</li>
                )
              )}
            </ul>
          </div>
          <p className="text-sm italic mt-7">
            Course Duration{" "}
            <span className="font-bold text-gray-500 underline">
              {courseDetails.duration}
            </span>
          </p>
          <p className="text-sm italic mt-7">
            Enrollment Status -{" "}
            <span className="font-bold text-gray-500 underline">
              {courseDetails.enrollmentStatus}
            </span>
          </p>
          <p className="text-sm italic mt-7">
            Course Duration{" "}
            <span className="font-bold text-gray-500 underline">
              {courseDetails.schedule}
            </span>
          </p>
        </div>
        <div className="mx-10">
          <img
            src={courseDetails.thumbnail}
            alt="Course image"
            className="w-[300px] h-[200px] object-cover rounded-xl drop-shadow-lg"
          />
        </div>
      </div>

      <div className="w-4/6 mt-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${courseDetails.completed}%` }}
        >
          {courseDetails.completed}%
        </div>
      </div>

      <CourseProgress syllabus={courseDetails.syllabus} />
    </div>
  );
};

export default CourseDetails;
