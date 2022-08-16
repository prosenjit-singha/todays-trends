import React from "react";
import { Container, Wrapper } from "./styles";
import { Snackbar, Alert } from "@mui/material";

const Modal = ({ open, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      // autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity="success"
        onClose={handleClose}
        sx={{ width: "100%" }}
      >
        Thank you for your subscribe!
      </Alert>
    </Snackbar>
  );
};

export default Modal;
