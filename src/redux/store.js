import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import showSlice from "./slice/show.slice";
import userSlice from "./slice/user.slice";
import teacherSlice from "./slice/teacher.slice";
import courseSlice from "./slice/course.slice";
import classSlice from "./slice/class.slice";
import tuitionSlice from "./slice/tuition.slice";
import lessonSlice from "./slice/lesson.slice";
import scheduleSlice from "./slice/schedule.slice";
import adminSlice from "./slice/admin.slice";
import studentSlice from "./slice/student.slice";
import salarySlice from "./slice/salary.slice";
import videoSlice from "./slice/video.slice";
import imageSlice from "./slice/image.slice";
import learningSlice from "./slice/learning.slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "user",
    "course",
    "lesson",
    "salary",
    "show",
    "learning",
    // "student",
    // "teacher",
  ],
};
const rootReducer = combineReducers({
  show: showSlice,
  admin: adminSlice,
  user: userSlice,
  student: studentSlice,
  teacher: teacherSlice,
  course: courseSlice,
  classSlice: classSlice,
  tuition: tuitionSlice,
  lesson: lessonSlice,
  schedule: scheduleSlice,
  salary: salarySlice,
  video: videoSlice,
  image: imageSlice,
  learning: learningSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
