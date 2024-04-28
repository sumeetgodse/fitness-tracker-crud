import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";

export const ShareModal = ({ open, setOpen, setNotification }) => {
  const content = `Hey, I did a ${open.activity?.activityType} today and burned ${open.activity?.caloriesBurned} calories! Do check it out on BurnIt!`;
  return (
    <Dialog
      open={open.open && open.type === "share"}
      onClose={() => {
        setOpen({ open: false, type: "", activity: {} });
      }}
    >
      <DialogTitle
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="h6">
          Share activity{" "}
        </Typography>
        <div style={{ display: "flex" }}>
          <a target="_blank" href="https://www.instagram.com/">
            <img
              style={{ height: "40px", width: "40px" }}
              src={"../../../public/instagram.png"}
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/">
            <img
              style={{ height: "40px", width: "40px", marginLeft: "8%" }}
              src={"../../../public/facebook.png"}
            />
          </a>
        </div>
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom variant="h6" margin={2}>
          {content}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(content);
            setNotification({ isOpen: true, message: "Copied to clipboard!" });
          }}
          variant="contained"
          size="small"
          color="primary"
        >
          Copy Text
        </Button>
      </DialogActions>
    </Dialog>
  );
};
