import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { workoutPlans } from "./constants";
import { useState } from "react";
import { SelectedMuscle } from "./SelectedMuscle";

export const WorkoutPlans = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");

  return (
    <>
      {!selectedMuscle ? (
        <div style={{ overflowY: "scroll" }}>
          {workoutPlans.map((workout) => {
            return (
              <Card
                key={workout.type}
                sx={{ width: 400, margin: "1%", float: "left" }}
              >
                <CardMedia
                  image={`../../public/${workout.icon}.png`}
                  style={{ height: "150px", width: "150px", margin: "0 auto" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {workout.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {workout.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      setSelectedMuscle(workout.type);
                    }}
                    variant="outlined"
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      ) : (
        <SelectedMuscle
          selectedMuscle={selectedMuscle}
          setSelectedMuscle={setSelectedMuscle}
        />
      )}
    </>
  );
};
