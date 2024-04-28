import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { apiClient } from "../../axios";

export const DeleteModal = ({ open, setOpen, setNotification }) => {
  const { refetch: getActivities } = useQuery({
    queryFn: () => {
      return apiClient.get(
        `/api/get-activities/${localStorage.getItem("username")}`
      );
    },
    queryKey: ["get-activities"],
  });

  const {
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
    isError: isDeleteErr,
    mutate: deleteActivity,
  } = useMutation({
    mutationFn: (activityId) => {
      return apiClient.delete(`/api/delete-activity/${activityId}`);
    },
  });

  useEffect(() => {
    if (isDeleteSuccess) {
      setNotification({ isOpen: true, message: "Activity deleted!" });
      setOpen({ open: false, type: "", activity: {} });
      getActivities();
    } else if (isDeleteErr) {
      setNotification({ isOpen: true, message: "Failed to delete activity!" });
      setOpen({ open: false, type: "", activity: {} });
    }
  }, [isDeleteSuccess, isDeleteErr]);

  return (
    <Dialog
      open={open.open && open.type === "delete"}
      onClose={() => {
        setOpen({ open: false, type: "", activity: {} });
      }}
    >
      <DialogTitle>Do you really wish to delete this activity? </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            deleteActivity(open.activity._id);
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
