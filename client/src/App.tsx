import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import styles from "./App.module.css";
import { TaskDetail } from "./componente/TaskDetail/TaskDetail";
function App() {
  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskDetail" element={<TaskDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
