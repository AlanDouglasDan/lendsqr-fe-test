import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Users } from "../pages/Users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRouter;
