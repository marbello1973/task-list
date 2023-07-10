import styles from "./TaskList.module.css";

interface Tasks {
  id: number;
  name: string;
  description: string;
  done: boolean;
}

export const TaskList: React.FC<Tasks> = () => {
  return <div className={styles.container}>TaskList</div>;
};
