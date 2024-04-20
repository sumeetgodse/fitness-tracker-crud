import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotLoggedIn } from "../NotLoggedIn/NotLoggedIn";
import { Dashboard } from "../Dashboard/Dashboard";

export const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BurnIt - Fitness Tracker
          </Typography>
          {user ? (
            <>
              Welcome {user}
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("username");
                  setUser("");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {user ? <Dashboard user={user} /> : <NotLoggedIn />}
    </div>
  );
};
