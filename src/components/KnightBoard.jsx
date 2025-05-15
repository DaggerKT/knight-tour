import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useSound } from "../hooks/useSound";

const knightMoves = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];

function isValidMove(from, to) {
  const dx = Math.abs(from.x - to.x);
  const dy = Math.abs(from.y - to.y);
  return knightMoves.some(
    ([mx, my]) => dx === Math.abs(mx) && dy === Math.abs(my)
  );
}

export default function KnightBoard({ boardSize = 5 }) {
  const { playerMove } = useSound();
  const [path, setPath] = useState([]);
  const [current, setCurrent] = useState(null);
  const [won, setWon] = useState(false);

  const getValidNextMoves = React.useCallback((current, path) => {
    if (!current) {
      return [];
    }
    return knightMoves
      .map(([dx, dy]) => ({ x: current.x + dx, y: current.y + dy }))
      .filter(
        ({ x, y }) =>
          x >= 0 &&
          y >= 0 &&
          x < boardSize &&
          y < boardSize &&
          !path.some((p) => p.x === x && p.y === y)
      );
  }, [boardSize]);

  const nextMoves = getValidNextMoves(current, path);

  const handleClick = (x, y) => {
    const coord = { x, y };
    if (path.length === 0) {
      setCurrent(coord);
      setPath([coord]);
      playerMove();
    } else if (
      isValidMove(current, coord) &&
      !path.some((p) => p.x === x && p.y === y)
    ) {
      const newPath = [...path, coord];
      setCurrent(coord);
      setPath(newPath);
      playerMove();
      if (newPath.length === boardSize * boardSize) {
        setWon(true);
      }
    }
  };

  const handleRestart = () => {
    setPath([]);
    setCurrent(null);
    setWon(false);
  };

  useEffect(() => {
    if (
      current &&
      !won &&
      getValidNextMoves(current, path).length === 0 &&
      path.length < boardSize * boardSize
    ) {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "Game Over",
          text: "❌ ไม่มีทางไปต่อแล้ว!",
          confirmButtonText: "Restart",
          confirmButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            handleRestart();
          }
        });
      }, 100);
    }
  }, [current, path, won, boardSize, getValidNextMoves]);

  useEffect(() => {
    if (won) {
      Swal.fire({
        icon: "success",
        title: "🎉 You Win!",
        text: "คุณเดินครบทุกช่องเรียบร้อยแล้ว",
        confirmButtonColor: "#3085d6",
      });
    }
  }, [won]);

  const renderCell = (x, y) => {
    const isInPath = path.findIndex((p) => p.x === x && p.y === y);
    const isCurrent = current?.x === x && current?.y === y;
    const isNextMove = nextMoves.some((p) => p.x === x && p.y === y);

    return (
      <div
        key={`${x}-${y}`}
        onClick={() => handleClick(x, y)}
        style={{
          width: 60,
          height: 60,
          border: "1px solid #333",
          background: isCurrent
            ? "#4caf50"
            : isInPath >= 0
            ? "#90ee90"
            : isNextMove
            ? "#fff176"
            : "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor:
            isInPath >= 0 || (!isCurrent && !isNextMove && path.length !== 0)
              ? "not-allowed"
              : "pointer",
          fontWeight: "bold",
          fontSize: 16,
          color: isCurrent ? "white" : "black",
        }}
      >
        {isCurrent ? (
          <img
            src="/knight-tour/knight.png"
            alt="Knight"
            style={{ width: 30, height: 30 }}
          />
        ) : isInPath >= 0 ? (
          isInPath + 1
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${boardSize}, 60px)`,
        gap: 2,
        justifyContent: "center",
      }}
    >
      {Array.from({ length: boardSize * boardSize }).map((_, i) => {
        const x = i % boardSize;
        const y = Math.floor(i / boardSize);
        return renderCell(x, y);
      })}
    </div>
  );
}
