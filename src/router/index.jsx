import { Routes, Route } from "react-router-dom";
import { PaginatedBooks } from "../views/Dashboard";
import { Home } from "../views/Home";
import { UpdateUser } from "../views/updateUser";
import { CreateUser } from "../views/createUser";
import { Login } from "../views/login";
import { Register } from "../views/register";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<PaginatedBooks />} />
      <Route path="/form" element={<CreateUser />} />
      <Route path="/update/:bookId" element={<UpdateUser />} />
    </Routes>
  );
};

export default RouteList;
