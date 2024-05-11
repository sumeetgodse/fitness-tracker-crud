import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { apiClient } from "../../axios";

export const NutritionModal = ({ open, setOpen, setNotification }) => {
  const [nutrition, setNutrition] = useState({
    meal: "",
    calories: "",
  });

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    mutate: addNewNutrition,
  } = useMutation({
    mutationFn: (body) => {
      return apiClient.post("/api/add-new-nutrition", body);
    },
  });

  const { refetch: getNutritions } = useQuery({
    queryFn: () => {
      return apiClient.get(
        `/api/get-nutrition/${localStorage.getItem("username")}`
      );
    },
    queryKey: ["get-nutrition"],
  });

  useEffect(() => {
    if (isSuccess) {
      setNotification({
        isOpen: true,
        message: "Added a new nutrition tracking data!",
      });
      setNutrition({
        meal: "",
        calories: "",
      });
      getNutritions();
    } else if (isError) {
      setNotification({
        isOpen: true,
        message: "Failed to add nutrition tracking data!",
      });
      setNutrition({
        meal: "",
        calories: "",
      });
    }
  }, [isSuccess, isError]);

  return (
    <Dialog
      open={open.open && open.type === "add"}
      onClose={() => {
        setOpen({ open: false, type: "" });
      }}
    >
      <DialogTitle>Add a new nutrition tracking data </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a new nutrition data to track your goals and progress.
        </DialogContentText>

        <div style={{ padding: "1%" }}>
          <FormControl style={{ margin: "1%" }} variant="standard" fullWidth>
            <InputLabel id="meal">Nutrition Meal</InputLabel>
            <Select
              labelId="meal"
              value={nutrition.meal}
              onChange={(e) => {
                setNutrition({ ...nutrition, meal: e.target.value });
              }}
              fullWidth
            >
              <MenuItem value={"Oats"}>Oats</MenuItem>
              <MenuItem value={"Cereal"}>Cereal</MenuItem>
              <MenuItem value={"Rice"}>Rice</MenuItem>
              <MenuItem value={"Eggs"}>Eggs</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{ margin: "1%" }}
            type="number"
            label="Calorie Intake (cal)"
            variant="standard"
            fullWidth
            value={nutrition.calories}
            onChange={(e) => {
              setNutrition({
                ...nutrition,
                calories: e.target.value.toString(),
              });
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            addNewNutrition({
              ...nutrition,
              username: localStorage.getItem("username"),
              date: new Date().toISOString(),
            });
            setOpen({ open: false, type: "" });
          }}
          variant="contained"
          size="small"
          color="success"
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            setOpen({ open: false, type: "" });
          }}
          variant="contained"
          size="small"
          color="error"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
