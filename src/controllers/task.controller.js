import { Task } from "../models/index.js";
import { getPagination } from "../libs/getPagination.js";

export const createTask = async (req, res) => {
  try {
    // validate fields
    if (!req.body.title) {
      return res.status(400).send({ message: "Content cannot be empty" });
    }

    // create tutorial
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });

    // Saving the task in the Database
    const taskSaved = await task.save();

    // Responding to the client
    return res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong creating the Task",
    });
  }
};

export const findAllTasks = async (req, res) => {
  try {
    const { title, page, size } = req.query;

    const condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};

    const { limit, offset } = getPagination(page, size);

    const data = await Task.paginate(condition, { offset, limit });

    return res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};

export const findOneTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task)
      return res
        .status(404)
        .json({ message: `Task with ID: ${id} does not exists` });
    return res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Task with id: " + id });
  }
};

export const updateTask = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data update cannot be empty",
    });
  }

  const { id } = req.params;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask)
      return res.status(404).json({
        message: `Cannot update tutorial with ${id}. Maybe the tutorial does not exists`,
      });

    return res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: `Error updating tutorial with id ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Task.findByIdAndDelete(id);
    if (!data)
      return res.status(404).json({
        message: `Cannot delete Task with id=${id}. Maybe the task does not exists`,
      });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Could not delete Task with id = ${id}`,
    });
  }
};

export const deleteAllTask = async (req, res) => {
  try {
    const data = await Task.deleteMany({});
    if (!data) return res.status(404).json({ message: "No tasks to delete" });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Some error ocurred while removing all tutorials",
    });
  }
};

export const findAllDoneTasks = async (req, res) => {
  try {
    const data = await Task.find({ done: true });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  }
};
