import React, { createContext, useContext, useState } from "react";
import useAutoplayMusic from "../hooks/useAutoplayMusic";

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {
  const audio = useAutoplayMusic("/knight-tour/background.wav", 0.6);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
