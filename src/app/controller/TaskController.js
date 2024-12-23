const TasksRepository = require("../repositories/TasksRepository");

class TaskController {
  async index(req, res) {
    const tasks = await TasksRepository.findAll();
    res.json(tasks);
  }

  async store(req, res) {
    const { title, description, completed } = req.body;

    if (!title) {
      res.status(400).json({ error: "Title is required" });
    }

    const task = await TasksRepository.create({
      title,
      description,
      completed,
    });

    res.json(task);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (!id) {
      res.status(400).json({ error: "Id is required" });
    }

    const taskExists = await TasksRepository.findById(id);

    if (!taskExists) {
      res.status(404).json({ error: "Task not found" });
    }

    const task = await TasksRepository.update(id, {
      title: title ?? taskExists.title,
      description: description ?? taskExists.description,
      completed: completed ?? taskExists.completed,
    });
    res.json(task);
  }

  async delete(req, res) {
    const { id } = req.params;
    const taskExists = await TasksRepository.findById(id);

    if (!taskExists) {
      res.status(404).json({ error: "Task not found" });
    }

    await TasksRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new TaskController();
