const { Router } = require("express");
const router = Router();
const TaskController = require("./app/controller/TaskController");

router.get("/tasks", TaskController.index);
router.post("/tasks", TaskController.store);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.delete);

module.exports = router;
