import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import CourseDetails from "./components/CourseDetails";

export const router = Router([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/:courseId",
    element: <CourseDetails />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
