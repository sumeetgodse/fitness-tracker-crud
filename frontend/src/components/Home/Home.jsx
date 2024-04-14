import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "2% auto" }}
    >
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
