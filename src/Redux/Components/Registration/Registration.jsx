import React, { useState } from "react";
import "./Registration.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "react-bootstrap/Spinner";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Registration = () => {
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    password2: "",
    showPassword: false,
    showPassword2: false,
    error: {
      email: "",
      password: "",
      password2: "",
      match: "",
    },
  });

  const navigate = useNavigate();

  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = { ...state.error };

    if (state.password !== state.password2) {
      newErrors.match = "Re-Entered password doesn't match!";
      toast.error(newErrors.match);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, state.email, state.password);
        newErrors.match = "";
        const user = auth.currentUser;
        console.log(user);
        // console.log("User Registered successfully!");
        toast.success("User Registered successfully! Redirecting to login page...");
        setSubmit(true);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (error) {
        console.log(error.message);
        newErrors.match = error.message;
      }
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

  const togglePasswordVisibility2 = () => {
    setState((prev) => ({
      ...prev,
      showPassword2: !prev.showPassword2,
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
        <h1>Registration</h1>
        <form style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <div className={`email_css ${state.error.email ? "input-error" : ""}`}>
            <label>Email Address</label>
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

          <div className="password2_css">
            <label>Re-Enter Password</label>
            <div className="input-wrapper">
              <input placeholder="Re-enter the password again" type={state.showPassword2 ? "text" : "password"} name="password2" required onChange={handleChange} className={state.error.match ? "input-error" : ""} style={{ width: "100%" }} />

              <span className="password-toggle-icon" onClick={togglePasswordVisibility2}>
                {state.showPassword2 ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>

          <div className="error_message">{state.error.match && <p style={{ margin: 0 }}>{state.error.match}</p>}</div>

          <div className="reg_submit_button">
            {submit ? (
              <motion.button disabled={true} type="submit" style={{ height: "50px", width: "250px", borderRadius: "20px", fontSize: "20px", backgroundColor: "rgb(211, 211, 211)" }}>
                <Spinner animation="border" variant="success" type="disable" />
              </motion.button>
            ) : (
              <motion.button type="submit" whileHover={{ scale: 1.1, backgroundColor: "rgb(0, 128, 0)", color: "rgb(255, 255, 255)" }} transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ height: "50px", width: "250px", borderRadius: "20px", fontSize: "20px" }}>
                Register
              </motion.button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
