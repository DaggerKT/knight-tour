function playSound(url) {
  const audio = new Audio(url);
  audio.volume = 0.5;
  audio.play().catch(() => {});
}

export const useSound = () => {
  const playHover = () => {
    playSound("/hover-btn.mp3");
  };

  const playClick = () => {
    playSound("/click-btn.mp3");
  };

  const playerMove = () => {
    playSound("/player-move.wav");
  };

  return { playHover, playClick, playerMove };
};
