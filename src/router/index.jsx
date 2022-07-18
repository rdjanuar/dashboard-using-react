import { Routes, Route } from "react-router-dom";
import { PaginatedBooks } from "../views/Dashboard";
import { Home } from "../views/Home";
import { UpdateUser } from "../views/updateUser";
import { Form } from "../views/form";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<PaginatedBooks />} />
      <Route path="/form" element={<Form />} />
      <Route path="/update/:bookId" element={<UpdateUser />} />
    </Routes>
  );
};

export default RouteList;
