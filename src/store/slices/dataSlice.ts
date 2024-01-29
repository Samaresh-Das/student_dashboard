import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

//createAsyncThunk expose promises to use. It makes working with promises a delight
export const fetchData = createAsyncThunk(
  "https://student-dashboard-bf0b4-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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
