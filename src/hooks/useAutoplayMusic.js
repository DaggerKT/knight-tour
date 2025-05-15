import { useEffect, useRef, useState } from 'react';

export default function useAutoplayMusic(src = "/background.wav", volume = 0.6) {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }

    const handleClick = () => {
      if (!started && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setStarted(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [src, volume, started]);

  return audioRef.current;
}
