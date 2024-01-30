import { app } from "@/firebase";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue } from "firebase/database";

interface Student {
  //type of subItems
  email: string;
  id: number;
  name: string;
}

interface SyllabusItem {
  //type of subItems
  content: string;
  done: boolean;
  topic: string;
  week: number;
}

//structure of whole course item
interface Course {
  completed: number;
  description: string;
  duration: string;
  enrollmentStatus: string;
  id: number;
  instructor: string;
  location: string;
  name: string;
  prerequisites: string[];
  schedule: string;
  students: Student[];
  syllabus: SyllabusItem[];
  thumbnail: string;
}

type InitialState = {
  loading: boolean;
  course: Course[]; //course itself is an array
  error: string;
  filter: string;
};
const initialState: InitialState = {
  loading: false,
  course: [],
  error: "",
  filter: "",
};

//getting all course data from firebase using SDK
export const fetchData = createAsyncThunk(
  "course/fetchCourseData",
  async () => {
    const database = getDatabase(app);
    return new Promise<Course[]>((resolve, reject) => {
      const coursesRef = ref(database, "courses");

      onValue(coursesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const coursesArray: Course[] = Object.values(data);
          resolve(coursesArray);
        } else {
          reject(new Error("No data available"));
        }
      });
    });
  }
);

const dataSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.course = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.course = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default dataSlice.reducer;
export const { setFilter } = dataSlice.actions;
