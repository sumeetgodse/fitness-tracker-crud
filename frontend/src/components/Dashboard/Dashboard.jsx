import { Snackbar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { WorkoutPlans } from "../WorkoutPlans/WorkoutPlans";
import { ActivityLogging } from "../ActivityLogging/ActivityLogging";

export const Dashboard = ({ user }) => {
  const [tabval, setTabval] = useState(0);
  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
  });
  return (
    <div
      style={{ margin: "1%", border: "1px solid #bdbdbd", minHeight: "90dvh" }}
    >
      <Tabs
        value={tabval}
        onChange={(e, newValue) => {
          setTabval(newValue);
        }}
      >
        <Tab label="My Activities" value={0} />
        <Tab label="Workout Plans" value={1} />
      </Tabs>
      {tabval === 0 ? (
        <ActivityLogging setNotification={setNotification} />
      ) : tabval === 1 ? (
        <WorkoutPlans />
      ) : null}
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
