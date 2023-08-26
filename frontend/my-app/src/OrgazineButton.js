import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function OrgazineButton() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={5}
        sx={{ marginLeft: "1.5rem", marginTop: "3rem" }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 500,
            height: 300,
            backgroundColor: "primary.dark",
            borderRadius: "30px",
          }}
        >
          <Typography sx={{color: 'white', textAlign: 'right', fontSize: '40px', padding: '10px 20px 10px 10px'}}>
            Опознай България! Избери следващата си дестинация.
          </Typography>
          <Button variant="outlined" color="secondary" sx={{color: 'white', marginLeft: '13rem', borderRadius: '50px', pointerEventsevents: 'none'}}>
          Организирай пътуването си
            </Button>
        </Box>
      </Stack>
    </div>
  );
}
