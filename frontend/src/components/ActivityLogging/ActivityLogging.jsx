import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ActivityModal } from "./ActivityModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../axios";

export const ActivityLogging = ({ setNotification }) => {
  const [open, setOpen] = useState(false);

  const {
    isLoading,
    isSuccess,
    isError,
    data: activities,
  } = useQuery({
    queryFn: () => {
      return apiClient.get(
        `/api/get-activities/${localStorage.getItem("username")}`
      );
    },
    queryKey: ["get-activities"],
  });

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outlined"
        size="small"
        style={{ margin: "1%" }}
      >
        Add new activity
      </Button>

      <div style={{ overflowY: "scroll" }}>
        {activities?.data.map((activity) => {
          return (
            <Card
              key={activity.date}
              sx={{
                width: 300,
                margin: "1%",
                float: "left",
                background: "#fbe9e7",
                padding: "1%",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {activity.activityType}
                </Typography>
                <table
                  style={{
                    margin: "2%",
                    padding: "1%",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <u>Duration</u> :
                      </td>
                      <td>{activity.duration} hrs.</td>
                    </tr>
                    <tr>
                      <td>
                        <u>Distance</u> :
                      </td>
                      <td>
                        {activity.distance ? activity.distance : "NA"} kms.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <u>Calories Burned</u> :
                      </td>
                      <td>{activity.caloriesBurned} cals.</td>
                    </tr>
                    <tr>
                      <td>
                        <u>Date</u> :
                      </td>
                      <td>{new Date(activity.date).toLocaleDateString()} </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
              <CardActions
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <Button
                  onClick={() => {}}
                  variant="contained"
                  size="small"
                  color="error"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>

      <ActivityModal
        setNotification={setNotification}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
