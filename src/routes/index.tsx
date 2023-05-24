import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Users } from "../pages/Users";
import { User } from "../pages/User";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
};

export default AppRouter;
