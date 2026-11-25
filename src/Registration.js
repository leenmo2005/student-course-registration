// Registration.js
// Author: Leen Alkhalil
// Instructor: Dr. Hasan Mugbil Abualese

class Registration {
  constructor(registrationId, student, course) {
    this.registrationId = registrationId;
    this.student = student;
    this.course = course;
    this.dateRegistered = new Date();
    this.status = "Registered";
  }
}

module.exports = Registration;