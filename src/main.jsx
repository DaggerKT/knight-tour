// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MusicProvider } from "./context/MusicContext";

const theme = createTheme({
  typography: {
    fontFamily: '"Playpen Sans", "Prompt", sans-serif',
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <MusicProvider>
      <App />
    </MusicProvider>
  </ThemeProvider>
);
