const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    email: String,
    password: String,
    name: String
});

const todoSchema = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
});

const UserModel = mongoose.model("users", userSchema);
const TodoModel = mongoose.model("todos", todoSchema);

module.exports = {
    UserModel,
    TodoModel
};