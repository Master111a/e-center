import { Route, Routes } from "react-router-dom";
import { Admin, Home, Learning, Login, SignUp, Teacher, User } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackToTop, LoadingMain, NotFound } from "./components";
import ROUTER from "./routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { isJsonString } from "./utils/function";
import * as UserService from "../src/services/user.api";
import * as ScheduleService from "../src/services/schedule.api";
import * as CourseService from "../src/services/course.api";
import * as ClassService from "../src/services/class.api";
import * as VideoService from "../src/services/video.api";
import { setUser, setUserList } from "./redux/slice/user.slice";
import { setScheduleList } from "./redux/slice/schedule.slice";
import { setCourseList } from "./redux/slice/course.slice";
import { setClassList } from "./redux/slice/class.slice";
import { setTeacher, setTeacherList } from "./redux/slice/teacher.slice";
import { setStudent } from "./redux/slice/student.slice";
import { setVideoList } from "./redux/slice/video.slice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const teacherList = useSelector((state) => state.teacher.teacherList);
  const studentList = useSelector((state) => state.student.studentList);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    handleGetSchedule();
    handleGetCourseList();
    handleGetClassList();
    handleGetUserList();
    handleGetAllTeacher();
    handleGetVideoList();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    const { decoded, storageData } = handleDecoded();
    if (user?.email) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
    if (decoded?.id && !user?.email) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);
  useEffect(() => {
    if (user?.role === 2 && teacherList?.length > 0) {
      dispatch(
        setTeacher(teacherList?.find((teacher) => teacher?._id === user?.id))
      );
    }
    if (user?.role === 3 && studentList?.length > 0) {
      dispatch(
        setStudent(studentList?.find((student) => student?._id === user?.id))
      );
    }
  }, [user]);
  //
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailUserAPI(id, token);
    if (res.status === "OK") {
      dispatch(setUser({ ...res?.data, access_token: token }));
    }
  };
  //
  const handleGetUserList = async () => {
    const res = await UserService.getAllUserAPI();
    if (res.status === "OK") {
      dispatch(setUserList(res?.data));
    }
  };
  //
  const handleGetVideoList = async () => {
    const res = await VideoService.getAllVideoAPI();
    if (res.status === "OK") {
      dispatch(setVideoList(res?.data));
    }
  };
  //
  const handleGetSchedule = async () => {
    const res = await ScheduleService.getAllScheduleAPI();
    if (res.status === "OK") {
      dispatch(setScheduleList(res?.data));
    }
  };
  //
  const handleGetCourseList = async () => {
    const res = await CourseService.getAllCourseAPI();
    if (res.status === "OK") {
      dispatch(setCourseList(res?.data));
    }
  };

  //
  const handleGetClassList = async () => {
    const res = await ClassService.getAllClassAPI();
    dispatch(setClassList(res?.data));
  };
  const handleGetAllTeacher = async () => {
    const res = await UserService.getAllTeacherAPI();
    if (res.status === "OK") {
      dispatch(setTeacherList(res?.data));
    }
  };
  //lay access_token trong localStorage va chuyen sang JSON
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      //chuyen tu dang token sang json
      decoded = jwt_decode(storageData);
    }
    return { decoded, storageData };
  };

  return (
    <div className="relative bg-cardOverlay w-full">
      {isLoading && (
        <div className="md:fixed z-[1001] absolute md:inset-0 flex items-center justify-center w-full h-full">
          <LoadingMain />
        </div>
      )}
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.SIGNUP} element={<SignUp />} />
        <Route path={ROUTER.LOGIN} element={<Login />} />
        <Route
          path={ROUTER.ADMIN}
          element={user && user?.role === 1 ? <Admin /> : <NotFound />}
        />
        <Route path={ROUTER.USER} element={user ? <User /> : <NotFound />} />
        <Route
          path={ROUTER.TEACHER}
          element={user && user?.role === 2 ? <Teacher /> : <NotFound />}
        />
        <Route path={ROUTER.LEARNING} element={<Learning />} />
      </Routes>
      <ToastContainer />
      <BackToTop />
    </div>
  );
}

export default App;
