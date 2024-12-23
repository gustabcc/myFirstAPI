const { v4 } = require("uuid");

let tasks = [
  {
    id: v4(),
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
];

class TasksRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(tasks);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const task = tasks.find((task) => task.id === id);
      resolve(task);
    });
  }

  create({ title, description, completed }) {
    return new Promise((resolve) => {
      const newTask = {
        id: v4(),
        title,
        description,
        completed,
      };

      tasks.push(newTask);
      resolve(newTask);
    });
  }

  update(id, { title, description, completed }) {
    return new Promise((resolve) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);

      const updatedTask = {
        ...tasks[taskIndex],
        title,
        description,
        completed,
      };

      tasks[taskIndex] = updatedTask;
      resolve(updatedTask);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      tasks = tasks.filter((task) => task.id !== id);
      resolve();
    });
  }
}

module.exports = new TasksRepository();
