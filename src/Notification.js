// Notification.js
// Author: Leen Alkhalil
// Instructor: Dr. Hasan Mugbil Abualese

class Notification {
  constructor(notificationId, message) {
    this.notificationId = notificationId;
    this.message = message;
    this.sendDate = new Date();
  }
}

module.exports = Notification;