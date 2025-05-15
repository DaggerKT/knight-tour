function playSound(url) {
  const audio = new Audio(url);
  audio.volume = 0.5;
  audio.play().catch(() => {});
}

export const useSound = () => {
  const playHover = () => {
    playSound("/knight-tour/hover-btn.mp3");
  };

  const playClick = () => {
    playSound("/knight-tour/click-btn.mp3");
  };

  const playerMove = () => {
    playSound("/knight-tour/player-move.wav");
  };

  return { playHover, playClick, playerMove };
};
