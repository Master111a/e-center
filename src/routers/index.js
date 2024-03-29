const ROUTER = {
  LOGIN: "/login",
  HOME: "/*",
  ADMIN: "/admin/*",
  TEACHER: "/teacher/*",
  USER: "/user/*",
  ABOUT: "/about",
  SIGNUP: "/signup",
  LEARNING: "/learning/:id",
  LICHHOC: "/lich-hoc",

  //   ADMIN
  ADHOME: "/admin-dashboard",

  ADUSER: "/admin-user",
  ADADDUSER: "/admin-addUser",
  ADTKUSER: "/admin-statsUser",

  ADTEACHER: "/admin-teacher",
  ADADDTEACHER: "/admin-addTeacher",
  ADTKTEACHER: "/admin-statsTeacher",

  ADSTUDENT: "/admin-students",
  ADADDSTUDENT: "/admin-addStudents",
  ADTKSTUDENT: "/admin-statsStudents",

  ADCLASS: "/admin-class",
  ADADDCLASS: "/admin-addClass",
  ADTKCLASS: "/admin-statsClass",

  ADCOURSE: "/admin-course",
  ADLESSON: "/admin-lesson",
  ADSCHEDULE: "/admin-schedule",
  ADSALARY: "/admin-salary",
  ADTUITION: "/admin-tuition",
  //Nav-Home
  LOTRINH: "/lo-trinh-hoc",
  KHOAHOC: "/khoa-hoc",
  DOINGU: "/doi-ngu-dao-tao",
  PHUONGPHAP: "/phuong-phap",
  HOCVIEN: "/hoc-vien",
  SCHEDULEHOME: "/schedule",
  //User
  CTKHOAHOC: "/khoa-hoc/:id",
  MYCOURSES: "/my-courses",
  MYPROFILE: "/profile",
  SETTINGS: "/settings/*",
  SCHEDULE: "/schedule/*",
  TUITION: "/tuition",
  //Teacher
  STUDENT: "/students",
  SALARY: "/salary",
  TEASCHEDULE: "/lecture-schedule",

  //setting
  PERSONAL: "/personal",
  SECURITY: "/security",
  NOTIFICATIONS: "/notifications",
};
export default ROUTER;
