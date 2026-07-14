const mongoose = require("mongoose");
const schema = mongoose();
const objectId = mongoose.objectId;

const user = new schema({
  email: String,
  password: String,
  name:String
});

const todo = new schema({
  todo: String,
  done: boolean,
  userID: objectId
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel:TodoModel
}