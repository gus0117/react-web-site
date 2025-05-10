import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/inicio')
    }, []);
  return (
      <>
          <nav>
              <ul className="navbar nav-pills justify-content-center bg-light mb-3">
                  <li className="nav-item">
                      <Link to="inicio">Inicio</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="secretaria">Secretaria</Link>
                      <ul>
                        <li><Link to="/secretaria/alumnos">Alumnos</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item">
                      <Link to="institucion">Institución</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="calendario">Calendario</Link>
                  </li>
              </ul>
          </nav>
          <Outlet />
      </>
      
  )
}

export default Navbar