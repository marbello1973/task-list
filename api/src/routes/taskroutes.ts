import { Router } from "express";
import Task from "../models/Todolist";
const taskroutes = Router();

/*******  Ruta GET ******/
const getData = async (req, res) => {
  const task = await Task.findAll();
  res.status(200).json({ task });
};
taskroutes.get("/", getData);

/*******  Ruta POST ******/

const postData = async (req, res) => {
  const { name, description, active } = req.body;

  const task = await Task.create({
    name,
    description,
    active,
  });
  res.status(200).json(task);
};

taskroutes.post("/", postData);

/**  rutas delete  */

const dellData = async (req, res) => {
  const { id } = req.params;
  const dataId = await Task.findByPk(id);
  if (!dataId) null;
  await dataId.destroy();
  const data = await Task.findAll();
  res.status(200).json(data);
};

taskroutes.delete("/:id", dellData);

const putData = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;
  const dataId = await Task.findByPk(id);
  if (name) dataId.name = name;
  if (description) dataId.description = description;
  if (active) dataId.active = active;
  await dataId.save();
  res.status(200).json(dataId);
};

taskroutes.put("/:id", putData);

export default taskroutes;
