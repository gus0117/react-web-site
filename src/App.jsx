
import Home from './pages/home'
import './App.css'
import Navbar from './components/navigation/Navbar'
import Secretaria from './pages/Secretaria'
import Institucion from './pages/Institucion'
import Calendario from './pages/Calendario'
import { Route, Routes } from 'react-router'
import Alumnos from './pages/Alumnos'

function App() {
  // Este es el componente principal de la aplicación
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/inicio" element={<Home />} />
          {
            // Opciones de secretaria
          }
          <Route path="/secretaria" element={<Secretaria />} />
          <Route path="/secretaria/alumnos" element={<Alumnos />} />

          <Route path="/institucion" element={<Institucion />} />
          <Route path="/calendario" element={<Calendario />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
