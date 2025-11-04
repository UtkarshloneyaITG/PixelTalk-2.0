

class messageOBJECT {
  constructor(msg, userID) {
    this.msg = msg;
    this.date = () => {
      let date = new Date();
      return `${date.getFullYear()}-${String(date.getMonth()).padStart(
        2,
        0
      )}-${String(date.getDate()).padStart(2, 0)}`;
    };
    this.time = () => {
      let time = new Date();
      return `${time.getHours()}:${String(time.getMinutes()).padStart(
        2,
        0
      )}:${String(time.getSeconds()).padStart(2, 0)}`;
    };
    this.userID = userID;
  }
}

module.exports = messageOBJECT;
