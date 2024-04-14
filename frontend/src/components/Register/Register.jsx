import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export const Register = () => {
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
        style={{ width: "40%", margin: "1% auto" }}
      />
      <TextField
        type="password"
        required
        label="Password"
        style={{ width: "40%", margin: "1% auto" }}
      />
      <TextField
        type="password"
        required
        label="Confirm Password"
        style={{ width: "40%", margin: "1% auto" }}
      />
      <Button style={{ width: "10%", margin: "1% auto" }} variant="contained">
        Register
      </Button>
      <Link style={{ margin: "1% auto" }} to="/login">
        Already a user? Click here to login
      </Link>
    </div>
  );
};
