"use client"; // Indica que es un Client Component

import { useState } from 'react'

export default function CrearRestaurante() {
  const [name, setName] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validar campos requeridos
    if (!name || !ubicacion) {
      setError('Por favor completa todos los campos obligatorios.')
      return
    }

    try {
      const res = await fetch('/api/restaurantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          ubicacion,
          telefono,
        }),
      })

      if (!res.ok) {
        throw new Error('Error al crear el restaurante')
      }

      setName('')
      setUbicacion('')
      setTelefono('')
      setSuccess('Restaurante creado con éxito!')
    } catch (error) {
        console.error(error)
      setError('Hubo un error al crear el restaurante.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">Registrar un nuevo Restaurante</h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nombre del Restaurante (obligatorio):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Ubicación (obligatorio):</label>
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Teléfono (opcional):</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Crear Restaurante
        </button>
      </form>
    </div>
  )
}
