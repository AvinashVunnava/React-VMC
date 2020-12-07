import React, { ReactElement, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import withStyles from "./styles";

export default function WarningModal(props: {
  openModal: boolean;
  children: ReactElement;
}) {
  const classes = withStyles();
  const [open, setOpen] = useState<boolean>(props.openModal);

  useEffect(() => {
    setOpen(props.openModal);
  }, [props.openModal]);

  return (
    <Modal
      open={open}
      key={String(open) + String(props.openModal)}
      onClose={() => setOpen(false)}
      aria-labelledby="warning-modal-title"
      aria-describedby="warning-modal-description"
      title="Warning Modal"
    >
      <Paper classes={{ root: classes.modalContent }}>{props.children}</Paper>
    </Modal>
  );
}
