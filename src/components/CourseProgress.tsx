interface SyllabusItem {
  // Define the structure of each item in the syllabus array
  // Adjust these properties based on the actual structure of your objects
  content: string;
  topic: string;
  week: number;
  done: boolean;
  // Add other properties as needed
}

interface Props {
  syllabus: SyllabusItem[];
  isCompleted: boolean;
}

const CourseProgress = ({ syllabus, isCompleted }: Props) => {
  return (
    <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-10 ml-5">
      {syllabus.map((topic, index) => (
        <li className="mb-10 ms-6" key={index}>
          <span
            className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white  ${
              isCompleted
                ? "bg-green-500 dark:ring-green-700"
                : topic.done
                ? "bg-green-500 dark:ring-green-700"
                : "dark:ring-gray-400"
            }`}
          >
            <svg
              className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <h3 className="font-medium leading-tight">
            <span className="italic text-black">Week {topic.week} - </span>
            {topic.topic}
          </h3>
          <p className="text-sm">{topic.content}</p>
        </li>
      ))}
    </ol>
  );
};

export default CourseProgress;
