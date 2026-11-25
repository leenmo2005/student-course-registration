// Auth.js
// Author: Leen Alkhalil
// Instructor: Dr. Hasan Mugbil Abualese

const crypto = require("crypto");
const Student = require("./Student");

// passwords are stored as hashes, not plain text
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const users = [
  {
    student: new Student("S1001", "Leen Alkhalil", "leen@university.edu", "Engineering", "Software Engineering"),
    passwordHash: hashPassword("1234"),
  },
];

function login(email, password) {
  const user = users.find((u) => u.student.email === email);
  if (user && user.passwordHash === hashPassword(password)) {
    return user.student;
  }
  return null;
}

module.exports = { login, hashPassword };