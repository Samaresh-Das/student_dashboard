import { Link } from "react-router-dom";
import ProgressBar from "./UI/ProgressBar";

interface Props {
  courseID: number;
  courseName: string;
  courseDescription: string;
  instructor: string;
  completed: number;
  image: string;
}

const CourseCard = ({
  courseID,
  courseName,
  courseDescription,
  instructor,
  completed,
  image,
}: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-[300px] object-fill"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {courseName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {courseDescription}
        </p>
        <p className="text-white my-3">{instructor}</p>
        <ProgressBar progress={completed} />
        <p className="text-white my-1">Progress: {completed}%</p>
        <Link
          // id - 1 is the index in the array
          to={`/${courseID - 1}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go to Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
