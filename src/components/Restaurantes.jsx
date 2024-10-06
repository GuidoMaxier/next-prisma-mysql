"use client"; // Indica que es un Client Component

import { useEffect, useState } from 'react'
import CardRestaurante from './CardRestaurante'

export default function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    const fetchRestaurantes = async () => {
      const res = await fetch('/api/restaurantes')
      const data = await res.json()
      setRestaurantes(data)
    }
    
    fetchRestaurantes()
  }, [])

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className="text-2xl font-bold mb-4">Lista de Restaurantes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurantes.map((restaurante) => (
          <CardRestaurante key={restaurante.id} restaurante={restaurante} />
        ))}
      </div>
    </div>
  );
}
