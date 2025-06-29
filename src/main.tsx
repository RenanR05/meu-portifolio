import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';


console.log(
  `%cHey, curioso! 👀\n\nSe você está lendo isso, provavelmente é porque gosta de explorar o código.\n\nSou o RenanR — desenvolvedor full stack com foco em React, Node.js e AWS.\n\nSe quiser trocar uma ideia:\n👉 LinkedIn: https://www.linkedin.com/in/renan-regis-507114329\n👉 GitHub: https://github.com/RenanR05\n\nBons códigos! 🚀`,
  'color: #6C63FF; font-size: 14px; font-family: monospace; line-height: 1.5;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);