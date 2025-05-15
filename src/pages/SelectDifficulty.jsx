import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useSound } from "../hooks/useSound";

export default function SelectDifficulty({ onSelect }) {
  const levels = [5, 6, 7, 8];

  const { playHover, playClick } = useSound();

  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        เลือกระดับความยาก
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {levels.map((size) => (
          <Button
            key={size}
            onClick={() => onSelect(size)}
            onMouseEnter={playHover}
            onMouseLeave={playHover}
            onMouseDown={playClick}
            variant="contained"
            size="large"
            className="hover:scale-105 transition-transform duration-200 w-[200px] h-[60px]"
          >
            {size} x {size}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
