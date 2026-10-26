import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import {ThemeProvider} from "./contexts/ThemeContext.jsx";
import {FavoritesProvider} from "./contexts/FavoritesContext.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <FavoritesProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </FavoritesProvider>
      </ThemeProvider>
  </StrictMode>,
)
