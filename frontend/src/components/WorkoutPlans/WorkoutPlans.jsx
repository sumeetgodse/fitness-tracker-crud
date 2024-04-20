import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { workoutPlans } from "./constants";

export const WorkoutPlans = () => {
  return (
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
              <Button variant="outlined" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
