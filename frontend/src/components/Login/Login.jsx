import { Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../axios";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
  });
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    mutate: login,
  } = useMutation({
    mutationFn: (body) => {
      return apiClient.post("/api/login", body);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("username", username);
      navigate("/");
    } else if (isError) {
      setNotification({ isOpen: true, message: "Login failed!" });
    }
  }, [isSuccess, isError]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        style={{ height: "150px", width: "150px", margin: "1% auto" }}
        src={"../../../public/fitness.png"}
      />
      <h2 style={{ margin: "1% auto" }}>BurnIt - Login</h2>
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
      <Button
        onClick={() => {
          login({
            username: username,
            password: password,
          });
        }}
        style={{ width: "10%", margin: "1% auto" }}
        variant="contained"
      >
        Login
      </Button>
      <Link style={{ margin: "1% auto" }} to="/register">
        New user? Click here to register
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
