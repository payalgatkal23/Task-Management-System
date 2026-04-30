const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.post("/tasks", userController.createtask);
router.get("/tasks", userController.getTasks);
router.delete("/tasks/:id", userController.deleteTask);

module.exports = router;

