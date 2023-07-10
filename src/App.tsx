import styles from "./App.module.css";
import Addtask from "./componente/AddTask/AddTask";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Addtask />
      </div>
    </>
  );
}

export default App;
