// index.js
// Author: Leen Alkhalil
// Instructor: Dr. Hasan Mugbil Abualese

const { login } = require("./Auth");
const { showProfile } = require("./Profile");
const { browseCourses } = require("./CourseCatalog");
const { addCourse, viewSchedule } = require("./RegistrationService");

const student = login("leen@university.edu", "1234");

if (student) {
  console.log("Login successful");
  showProfile(student);

  const available = browseCourses(student);
  console.log("Available courses:");
  available.forEach((c) => console.log(c.courseId + " - " + c.title));

  addCourse(student, available[0]);
  addCourse(student, available[1]);

  console.log("My schedule:");
  viewSchedule(student).forEach((r) => console.log(r.course.title));
} else {
  console.log("Wrong email or password");
}