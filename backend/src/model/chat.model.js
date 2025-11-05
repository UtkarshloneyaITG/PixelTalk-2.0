let datefor = () => {
  let date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth()).padStart(
    2,
    0
  )}-${String(date.getDate()).padStart(2, 0)}`;
};

let timeform = () => {
  let time = new Date();
  return `${time.getHours()}:${String(time.getMinutes()).padStart(
    2,
    0
  )}:${String(time.getSeconds()).padStart(2, 0)}`;
};

class messageOBJECT {
  constructor(msg, userID, image) {
    this.msg = msg;
    this.date = datefor();
    this.time = timeform();
    this.userID = userID;
    this.image = image;
  }
}

module.exports = messageOBJECT;
