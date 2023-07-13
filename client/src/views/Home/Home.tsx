import Addtask from "../../componente/AddTask/AddTask";

export const Home: React.FC = () => {
  return (
    <div>
      Home
      <Addtask tasksList={[]} />
    </div>
  );
};
