import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { apiClient } from "../../axios";

export const DeleteModal = ({ open, setOpen, setNotification }) => {
  const { refetch: getNutritions } = useQuery({
    queryFn: () => {
      return apiClient.get(
        `/api/get-nutrition/${localStorage.getItem("username")}`
      );
    },
    queryKey: ["get-nutrition"],
  });

  const {
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
    isError: isDeleteErr,
    mutate: deleteNutrition,
  } = useMutation({
    mutationFn: (nutritionId) => {
      return apiClient.delete(`/api/delete-nutrition/${nutritionId}`);
    },
  });

  useEffect(() => {
    if (isDeleteSuccess) {
      setNotification({ isOpen: true, message: "Nutrition data deleted!" });
      setOpen({ open: false, type: "", nutrition: {} });
      getNutritions();
    } else if (isDeleteErr) {
      setNotification({
        isOpen: true,
        message: "Failed to delete nutrition data!",
      });
      setOpen({ open: false, type: "", nutrition: {} });
    }
  }, [isDeleteSuccess, isDeleteErr]);

  return (
    <Dialog
      open={open.open && open.type === "delete"}
      onClose={() => {
        setOpen({ open: false, type: "", nutrition: {} });
      }}
    >
      <DialogTitle>
        Do you really wish to delete this nutrition data?{" "}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            deleteNutrition(open.nutrition._id);
          }}
          variant="contained"
          size="small"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
