import { IconButton, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

export default function SocialMedia() {
  return (
    <div>
        <Stack direction="row" spacing={0} sx={{display: 'flex', justifyContent: 'center'}}>
      <IconButton sx={{color: "inherit"}}>
        <FacebookOutlinedIcon />
      </IconButton>
      <IconButton sx={{color: "inherit"}}>
        <InstagramIcon />
      </IconButton>
      </Stack>
    </div>
  );
}
