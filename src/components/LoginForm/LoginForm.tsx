import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input } from "components/Input";
import "./LoginForm.styles.scss";
import { PasswordInput } from "components/PasswordInput";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) toast.error("Please fill all fields");
    else {
      toast.success("Login Successful");
      navigate("dashboard");
    }
  };

  return (
    <div className="w-100">
      <div className="welcomeText">Welcome!</div>

      <div className="welcomeText2">Enter details to login.</div>

      <div className="minWidth w-lg-100">
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Enter email"
          id="email"
        />

        <PasswordInput
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          placeholder="Password"
          id="password"
        />

        <div className="forgotPassword">FORGOT PASSWORD?</div>

        <button
          type="submit"
          className="w-100 submitButton text-white"
          onClick={() => handleSubmit()}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
