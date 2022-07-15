import { Routes, Route } from "react-router-dom";
import { About } from "../views/About";
import { Home } from "../views/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<About />} />
    </Routes>
  );
};

export default Router;
