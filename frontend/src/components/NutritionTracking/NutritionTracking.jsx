import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../axios";
import { DeleteModal } from "./DeleteModal";
import { NutritionModal } from "./NutritionModal";

export const NutritionTracking = ({ setNotification }) => {
  const [open, setOpen] = useState({ open: false, type: "", nutrition: {} });

  const {
    isLoading,
    isSuccess,
    isError,
    data: nutritions,
    refetch: getNutrition,
  } = useQuery({
    queryFn: () => {
      return apiClient.get(
        `/api/get-nutrition/${localStorage.getItem("username")}`
      );
    },
    queryKey: ["get-nutrition"],
  });

  return (
    <div>
      <Button
        onClick={() => {
          setOpen({ open: true, type: "add", nutrition: {} });
        }}
        variant="outlined"
        size="small"
        style={{ margin: "1%" }}
      >
        Add new nutrition data
      </Button>

      <div style={{ overflowY: "scroll" }}>
        {nutritions?.data.length > 0 ? (
          nutritions?.data.map((nutrition) => {
            return (
              <Card
                key={nutrition.date}
                sx={{
                  width: 300,
                  margin: "1%",
                  float: "left",
                  background: "#f5f5f5",
                  padding: "1%",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {nutrition.meal}
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
                          <u>Calories Intake</u> :
                        </td>
                        <td>{nutrition.calories} cals.</td>
                      </tr>
                      <tr>
                        <td>
                          <u>Date</u> :
                        </td>
                        <td>
                          {new Date(nutrition.date).toLocaleDateString()}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
                <CardActions
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <Button
                    onClick={() => {
                      setOpen({
                        open: true,
                        type: "delete",
                        nutrition: nutrition,
                      });
                    }}
                    variant="contained"
                    size="small"
                    color="error"
                    style={{ marginLeft: "2%" }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Typography gutterBottom variant="h5">
              Oops! You do not any nutrition data!
            </Typography>
          </div>
        )}
      </div>

      <NutritionModal
        setNotification={setNotification}
        open={open}
        setOpen={setOpen}
      />
      <DeleteModal
        setNotification={setNotification}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
