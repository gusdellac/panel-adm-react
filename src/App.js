import "../src/App.css";
// import { useState } from 'react';
// import { useAutoAnimate } from '@formkit/auto-animate/react';
import { SolicitudViaje } from './components/SolicitudViaje.jsx';
import { datosSolicitudes } from "./mock/datos.js";

const App = () => {
  
  return (
    <div className="App">
      <div className="contenedor-solicitud-viaje">
          {Object.keys(datosSolicitudes).map((clave) => (
            <SolicitudViaje 
             text={datosSolicitudes[clave].texto}
             estado = {datosSolicitudes[clave].estado}
             color = {datosSolicitudes[clave].color}
            />
          ))}
      </div>
    </div>
  )
}

export default App


