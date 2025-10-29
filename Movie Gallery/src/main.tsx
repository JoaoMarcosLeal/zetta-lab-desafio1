import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Page from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
