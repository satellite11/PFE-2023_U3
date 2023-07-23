import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Calama from './components/Calama.jsx'
import Ejercicio01 from './components/ejercicios/Ejercicio01.jsx'
import Tareas from './components/tareas/Tareas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ciudad",
    element: <Calama />
  },
  {
    path : "/Ejercicio01",
    element: <Ejercicio01/>
  },
  {
    path : "/tareas",
    element: <Tareas/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
