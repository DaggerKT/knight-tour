import React, { useState } from "react";
import { Stack } from "@mui/material";
import SelectDifficulty from "./pages/SelectDifficulty";
import GamePage from "./pages/GamePage";
import MusicControl from "./components/MusicControl";

export default function App() {
  const [boardSize, setBoardSize] = useState(null);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center w-screen">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ borderBottom: "1px solid #ccc" }}
      >
        <h1 style={{ margin: 0 }}>Knight's Tour</h1>
      </Stack>
      <div className="absolute top-0 right-0 p-2">
        <MusicControl />
      </div>
      {!boardSize ? (
        <SelectDifficulty onSelect={setBoardSize} />
      ) : (
        <GamePage boardSize={boardSize} onBack={() => setBoardSize(null)} />
      )}
    </div>
  );
}
