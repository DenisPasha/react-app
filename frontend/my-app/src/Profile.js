import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import './App.css';

export default function Profile() {
  return (
    <div>
      <Stack direction="row" spacing={20} sx={{ margin: "5rem" }}>
        <Avatar sx={{ width: "15rem", height: "15rem", bgcolor: "#102444" }}>
          A
        </Avatar>
        <Stack direction='row' spacing={3}>
          <Stack spacing={3}>
            <Typography>Име: Вилиана</Typography>
            <Typography>Фамилия: Атанасова</Typography>
            <Typography>Пол: Жена</Typography>
            <Typography>Телефон: 08765432</Typography>
            <Typography>Страна: България</Typography>
          </Stack>
          
          <Stack spacing={3}>
            <Typography>Име: Вилиана</Typography>
            <Typography>Фамилия: Атанасова</Typography>
            <Typography>Пол: Жена</Typography>
            <Typography>Телефон: 08765432</Typography>
            <Typography>Страна: България</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
