import { Link } from "react-router-dom";
import styles from "./TaskList.module.css";
import { TaskDetail } from "../TaskDetail/TaskDetail";

interface TaskListProps {
  tasksList: string[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasksList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTask}>
        {tasksList?.map((el, i) => (
          <div className={styles.card} key={i}>
            <Link to={`${(<TaskDetail />)}`}>
              <p className={styles.title} key={i}>
                ToDo TasK
              </p>
            </Link>
            <div className={styles.descripcion}>
              <span className={styles.descritionTask} key={i}>
                {el}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
