import React from 'react'
import CrearRestaurante from '../components/CrearRestaurante.jsx'
import Restaurantes from '../components/Restaurantes.jsx'

function Homepage() {
  return (
    <div>
      Home page

      <h1>Crear un restaurante</h1>
      <CrearRestaurante />

  
      <Restaurantes />

    </div>
  )
}

export default Homepage
