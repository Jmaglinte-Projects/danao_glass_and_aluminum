import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const ImageDialog = (prop) => {
  const handleClose = () => {
    prop.updateDialog(false);
  };

  return (
    <Dialog
      open={prop.openDialog}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{prop.image.receipt_note}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <img src={prop.image.receipt_image} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
