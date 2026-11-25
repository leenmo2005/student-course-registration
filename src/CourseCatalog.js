// CourseCatalog.js
// Author: Leen Alkhalil
// Instructor: Dr. Hasan Mugbil Abualese

const Course = require("./Course");

const courses = [
  new Course("CS201", "Data Structures", 3),
  new Course("CS210", "Web Development", 3),
  new Course("CS301", "Database Systems", 3),
  new Course("CS305", "Algorithms", 3),
];

// study plan: which courses each major needs
const studyPlans = {
  "Software Engineering": ["CS201", "CS210", "CS301", "CS305"],
};

function browseCourses(student) {
  const plan = studyPlans[student.major] || [];
  return courses.filter((c) => plan.includes(c.courseId));
}

module.exports = { browseCourses };