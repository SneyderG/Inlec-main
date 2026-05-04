import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {App} from './App.jsx'
import {AppMain} from './AppMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/} /*Comentamos el componente App para mostrar el componente AppMain*/
    <AppMain />
  </StrictMode>
)
