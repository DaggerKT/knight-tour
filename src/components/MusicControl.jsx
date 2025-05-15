import React from "react";
import { Button } from "@mui/material";
import { useMusic } from "../context/MusicContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function MusicControl() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <Button
      onClick={toggleMusic}
      variant="contained"
      size="small"
      sx={{ ml: 2 }}
      startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    >
      {isPlaying ? "หยุดเพลง" : "เล่นเพลง"}
    </Button>
  );
}
