import { Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../axios";
import { useEffect } from "react";

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
  });

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    mutate: register,
  } = useMutation({
    mutationFn: (body) => {
      return apiClient.post("/api/register", body);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setNotification({ isOpen: true, message: "User registered" });
      navigate("/login");
    } else if (isError) {
      if (error.response.data.message === "USER_ALREADY_EXISTS") {
        setNotification({ isOpen: true, message: "User already exists!" });
      } else {
        setNotification({ isOpen: true, message: "Failed to register user!" });
      }
    }
  }, [isSuccess, isError]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        style={{ height: "150px", width: "150px", margin: "1% auto" }}
        src={"../../../public/fitness.png"}
      />
      <h2 style={{ margin: "1% auto" }}>BurnIt - Register</h2>
      <TextField
        type="email"
        required
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "40%", margin: "1% auto" }}
      />
      <TextField
        type="password"
        required
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "40%", margin: "1% auto" }}
      />
      <TextField
        type="password"
        required
        label="Confirm Password"
        value={confirmPwd}
        onChange={(e) => setConfirmPwd(e.target.value)}
        style={{ width: "40%", margin: "1% auto" }}
      />
      <Button
        onClick={() => {
          if (password === confirmPwd) {
            register({
              username: username,
              password: password,
            });
          } else {
            setNotification({
              isOpen: true,
              message: "Password and confirmation password must be same!",
            });
          }
        }}
        style={{ width: "10%", margin: "1% auto" }}
        variant="contained"
      >
        Register
      </Button>
      <Link style={{ margin: "1% auto" }} to="/login">
        Already a user? Click here to login
      </Link>
      <Snackbar
        open={notification.isOpen}
        autoHideDuration={3000}
        onClose={() => {
          setNotification({ isOpen: false, message: "" });
        }}
        message={notification.message}
      />
    </div>
  );
};
