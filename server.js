const express = require("express");
const mongoose = require("mongoose");

const Todo = require("./models/Todo");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Home Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Add Task
app.post("/add", async (req, res) => {
    await Todo.create({ task: req.body.task });
    res.redirect("/");
});

// Delete Task
app.get("/delete/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

// Get All Tasks
app.get("/tasks", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});