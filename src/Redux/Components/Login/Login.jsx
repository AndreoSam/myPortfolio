import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "react-bootstrap/Spinner";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
    showPassword2: false,
    error: {
      email: "",
      password: "",
      match: "",
    },
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = { ...state.error };

    try {
      await signInWithEmailAndPassword(auth, state.email, state.password);
      const user = auth.currentUser;
      setSubmit(true);
      console.log(user);
      console.log("Login Successfull!");
      toast.success("Login Successfull!");
      setTimeout(() => {
        navigate("/upload");
      }, 5000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

    setState((prev) => ({
      ...prev,
      error: newErrors,
    }));

    // console.log("Submitted Data: ", state);
  };

  const togglePasswordVisibility = () => {
    setState((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="reg_css">
      <div className="formdata_css" onSubmit={submitHandler}>
        <Toaster position="top-right" reverseOrder={false} />
        <h1>Login</h1>
        <form style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <div className={`email_css ${state.error.email ? "input-error" : ""}`}>
            <label>Enter Address </label>
            <input type="email" name="email" placeholder="Enter your email address" required onChange={handleChange} style={{ width: "100%" }} />
          </div>

          <div className={`password_css ${state.error.password ? "input-error" : ""}`}>
            <label>Password</label>
            <div className="input-wrapper">
              <input placeholder="Enter the password" type={state.showPassword ? "text" : "password"} name="password" required onChange={handleChange} style={{ width: "100%" }} />

              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {state.showPassword ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>

          <div className="reg_submit_button">
            {submit ? (
              <motion.button disabled={true} type="submit" style={{ height: "50px", width: "250px", borderRadius: "20px", fontSize: "20px", backgroundColor: "rgb(211, 211, 211)" }}>
                <Spinner animation="border" variant="success" type="disable" />
              </motion.button>
            ) : (
              <motion.button type="submit" whileHover={{ scale: 1.1, backgroundColor: "rgb(0, 0, 255)", color: "rgb(255, 255, 255)" }} transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ height: "50px", width: "250px", borderRadius: "20px", fontSize: "20px", backgroundColor: "rgb(0, 150, 255)", color: "rgb(255, 255, 255)" }}>
                Login
              </motion.button>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "right" }}>
            <p style={{ margin: "0" }}>
              New User?
              <Link to={"/registration"}>Register Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
