import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const tasks = [1, 1, 1, 1];

export default function UserList({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tasks.map((item, index) => (
            <>
              <div className="flex items-center justify-between w-full ">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/microsoft-512.png" />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={"@abhishek9773"}
                      primary={"Abhishek"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button className="customButton">select</Button>
                </div>
              </div>
              {index !== tasks.length - 1 && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
