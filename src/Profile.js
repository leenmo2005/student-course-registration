// Profile.js
// Author: Leen Alkhalil

function showProfile(student) {
  console.log("Name: " + student.name);
  console.log("Faculty: " + student.faculty);
  console.log("Major: " + student.major);
}

module.exports = { showProfile };