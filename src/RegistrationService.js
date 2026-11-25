// RegistrationService.js
// Author: Leen Alkhalil

const Registration = require("./Registration");
const Notification = require("./Notification");

const registrations = [];

function addCourse(student, course) {
  const reg = new Registration(registrations.length + 1, student, course);
  registrations.push(reg);
  const note = new Notification(registrations.length, "Registered in " + course.title);
  console.log("Notification: " + note.message);
  return reg;
}

function dropCourse(student, courseId) {
  const i = registrations.findIndex(
    (r) => r.student.studentId === student.studentId && r.course.courseId === courseId
  );
  if (i !== -1) registrations.splice(i, 1);
}

function viewSchedule(student) {
  return registrations.filter((r) => r.student.studentId === student.studentId);
}

module.exports = { addCourse, dropCourse, viewSchedule };