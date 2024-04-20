import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { WorkoutPlans } from "../WorkoutPlans/WorkoutPlans";
import { ActivityLogging } from "../ActivityLogging/ActivityLogging";

export const Dashboard = ({ user }) => {
  const [tabval, setTabval] = useState(0);
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
        <Tab label="Workout Plans" value={0} />
        <Tab label="Activity Logging" value={1} />
      </Tabs>
      {tabval === 0 ? (
        <WorkoutPlans />
      ) : tabval === 1 ? (
        <ActivityLogging />
      ) : null}
    </div>
  );
};
