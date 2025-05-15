import React, { useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import KnightBoard from "../components/KnightBoard";
import { useSound } from "../hooks/useSound";
import ForwardIcon from "@mui/icons-material/Forward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function GamePage({ boardSize, onBack }) {
  const [key, setKey] = useState(0);

  const { playHover, playClick } = useSound();

  const handleRestart = () => setKey((prev) => prev + 1);

  return (
    <Box p={3}>
      <Stack direction="row" spacing={2} mb={2}>
        <Button
          onClick={onBack}
          onMouseEnter={playHover}
          onMouseLeave={playHover}
          onMouseDown={playClick}
          variant="contained"
        >
          <ForwardIcon className="rotate-180" />
          เลือกระดับ
        </Button>
        <Button
          onClick={handleRestart}
          onMouseEnter={playHover}
          onMouseLeave={playHover}
          onMouseDown={playClick}
          variant="contained"
          color="secondary"
        >
          <RestartAltIcon />
          <span className="ml-1">เริ่มใหม่</span>
        </Button>
      </Stack>

      <Typography variant="h5" gutterBottom>
        Knight's Tour ({boardSize} x {boardSize})
      </Typography>

      <KnightBoard key={key} boardSize={boardSize} />
    </Box>
  );
}
