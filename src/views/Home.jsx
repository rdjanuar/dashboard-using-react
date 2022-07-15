import { Header } from "../components/header/hearder.component";
import { Chart } from "../components/chart/chart";
import { Task } from "../components/task/task";
export const Home = () => {
  return (
    <div className="bg-anjay w-full">
      <Header header="Overview" />
      <Task />
      <Chart />
    </div>
  );
};
