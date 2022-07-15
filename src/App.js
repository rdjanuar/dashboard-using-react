import Router from "./router";
import { Navbar } from "./components/navbar/navbar.component";
export const App = () => {
  return (
    <div className="App flex font-Mulish">
      <Navbar alt="images" />
      <Router />
    </div>
  );
};
