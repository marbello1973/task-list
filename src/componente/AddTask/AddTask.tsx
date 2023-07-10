import React, { useState } from "react";
import styles from "./AddTask.module.css";
import { TaskList } from "../TaskList/TaskList";

const Addtask: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
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
            onChange={(e) => setTask(e.target.value)}
          />
          <button className={styles.buton}>Add</button>
        </form>
      </div>
      {/* <div>
        <ul>
          {taskList?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div> */}
      <TaskList 
        {taskList?.map((el) => {
          return {
            id: Math.random(),
            name: el,
            description: "description",
            done: false,
          };
        })}
      />
    </div>
  );
};

export default Addtask;
