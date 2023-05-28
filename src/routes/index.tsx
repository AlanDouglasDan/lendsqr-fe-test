import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Users } from "../pages/Users";
import { User } from "../pages/User";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Users />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/users/:id" element={<User />} />
      <Route path="*" element={<Users />} />
    </Routes>
  );
};

export default AppRouter;
