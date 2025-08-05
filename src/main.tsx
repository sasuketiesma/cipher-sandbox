import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Caesar from './routes/Caesar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Caesar />
  </StrictMode>
)
