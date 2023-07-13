import React, { useState } from "react";
import styles from "./AddTask.module.css";
import { TaskList } from "../TaskList/TaskList";

interface AddProps {
  tasksList: string[];
}

const Addtask: React.FC<AddProps> = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isInput, setIsInput] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validar();
    if (!error) {
      addTask();
    }
  };

  const validar = () => {
    if ((!task || task === "") && taskList?.length === 0) {
      setError("Ingrese una tarea");
    } else if (!task || task === "") {
      setError("Ingrese una tarea");
    } else {
      setError("");
    }
  };

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTask}>
        <h2 className={styles.title}>To Do List</h2>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            value={task}
            type="text"
            onChange={(e) => {
              setTask(e.target.value), setIsInput(e.target.value === "");
            }}
          />
          <button className={styles.buton} disabled={isInput}>
            Add
          </button>
        </form>
      </div>
      <TaskList tasksList={taskList} />
      {/* <div>
        <ul>
          {taskList?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Addtask;
