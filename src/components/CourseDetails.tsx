import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "../firebase";

import LoadingSpinner from "./UI/LoadingSpinner";
import CourseProgress from "./CourseProgress";
import { AiOutlineLike } from "react-icons/ai";

const CourseDetails = () => {
  const database = getDatabase(app);
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState<any>(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        //get the course details from database through firebase predefined SDK
        const courses = ref(database, `courses/${courseId}`);
        onValue(courses, (snapshot) => {
          const data = snapshot.val();
          setCourseDetails(data);
        });
      } catch (error: any) {
        console.error("Error fetching course details:", error.message);
      }
    };

    getCourseDetails();
  }, [courseId]);

  //get likes handler. It get course likes in real time
  useEffect(() => {
    const getLikes = ref(database, `courses/${courseId}/likes`);
    onValue(getLikes, (snapshot) => {
      const data = snapshot.val();
      setLikes(data);
    });
  }, [courseId]);

  //incrementing likes in realtime in DB
  const incrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
    set(ref(database, `courses/${courseId}/likes`), likes + 1)
      .then(() => {
        console.log("Likes updated successfully");
      })
      .catch((error) => {
        console.error("Error updating likes:", error.message);
        // Revert the state if there's an error
        setLikes((prevLikes) => prevLikes - 1);
      });
  };

  //mark course as completed or incomplete
  const toggleCompletion = () => {
    const oppositeValue = !courseDetails.isCompleted;

    set(ref(database, `courses/${courseId}/isCompleted`), oppositeValue)
      .then(() => {
        console.log(
          `Course marked as ${
            oppositeValue ? "completed" : "incomplete"
          } successfully`
        );
      })
      .catch((error) => {
        console.error(
          `Error marking course as ${
            oppositeValue ? "completed" : "incomplete"
          }:`,
          error.message
        );
      });
  };

  //conditional statements should always come after use effects
  if (!courseDetails) {
    return <LoadingSpinner />;
  }

  return (
    <div className="m-10 md:m-20 shadow-2xl p-5">
      <p className=" text-lg md:text-[30px] text-wrap italic">
        <span className="font-bold underline not-italic text-xl md:text-[30px]">
          {courseDetails.name}
        </span>{" "}
        - {courseDetails.location}
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-7">
        <div className="md:hidden mx-1 mb-5">
          <img
            src={courseDetails.thumbnail}
            alt="Course image"
            className="w-[300px] h-[200px] object-cover rounded-xl drop-shadow-lg"
          />
          <div className="md:hidden flex flex-row my-5">
            <button onClick={incrementLikes}>
              <AiOutlineLike className="text-[20px] hover:text-blue-700" />
            </button>
            <p className="my-auto ml-5 text-sm">Likes {likes}</p>
          </div>
        </div>
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
        <div className="hidden md:block mx-10">
          <img
            src={courseDetails.thumbnail}
            alt="Course image"
            className="w-[300px] h-[200px] object-cover rounded-xl drop-shadow-lg"
          />
          <div className="flex flex-row my-5">
            <button onClick={incrementLikes}>
              <AiOutlineLike className="text-[40px] hover:text-blue-700" />
            </button>
            <p className="my-auto ml-5">Likes {likes}</p>
          </div>
        </div>
      </div>

      <div className=" w-full md:w-4/6 mt-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${courseDetails.completed}%` }}
        >
          {courseDetails.completed}%
        </div>
      </div>

      <CourseProgress
        syllabus={courseDetails.syllabus}
        isCompleted={courseDetails.isCompleted}
      />

      <button
        type="button"
        className={`focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
          courseDetails.isCompleted
            ? "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            : "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 focus:ring-green-300"
        }`}
        onClick={toggleCompletion}
      >
        {courseDetails.isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
    </div>
  );
};

export default CourseDetails;
