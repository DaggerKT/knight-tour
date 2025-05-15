import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useSound } from "../hooks/useSound";
import Swal from "sweetalert2";

export default function SelectDifficulty({ onSelect }) {
  const levels = [5, 6, 7, 8];

  const { playHover, playClick } = useSound();

  const learnRules = () => {
    Swal.fire({
      title: "เรียนรู้กติกา",
      icon: "info",
      html: `
    <p>กติกา:</p>
    <ul style="text-align: left; line-height: 1.6;">
      <li>1.เริ่มเกมโดยคลิกที่ช่องใดก็ได้บนกระดาน</li>
      <li>2.เดินตามรูปแบบ "ม้า" (รูปตัว L)</li>
      <li>3.ห้ามเดินซ้ำช่องเดิม</li>
      <li>4.ถ้าไม่มีทางไป → Game Over</li>
      <li>5.ถ้าเดินครบทุกช่อง → ชนะ!</li>
    </ul>
  `,
      confirmButtonText: "ตกลง",
    });
  };

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
        <Button
          onClick={learnRules}
          onMouseEnter={playHover}
          onMouseLeave={playHover}
          onMouseDown={playClick}
          variant="outlined"
          size="large"
          color="primary"
          sx={{ borderColor: "#1976d2", color: "#1976d2" }}
          className="hover:scale-105 transition-transform duration-200 w-[200px] h-[60px]"
        >
          เรียนรู้กติกา
        </Button>
      </Stack>
    </Box>
  );
}
