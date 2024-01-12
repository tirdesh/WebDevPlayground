import { configureStore } from "@reduxjs/toolkit";
import courseReducer from './slices/course-slice';

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        
    }
})