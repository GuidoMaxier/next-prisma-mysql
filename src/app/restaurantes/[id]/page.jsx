"use client"; // Indica que es un Client Component

import { useEffect, useState } from 'react';
export const dynamic = 'force-dynamic';

const RestaurantDetail = ({ params }) => {
    const { id } = params; // Obtén el id directamente desde params
    const [restaurante, setRestaurante] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Usar useEffect para manejar la llamada a la API
    useEffect(() => {
        const fetchRestaurante = async () => {
            try {
                const res = await fetch(`/api/restaurantes/${id}`);
                if (!res.ok) {
                    throw new Error('Error al obtener el restaurante');
                }
                const data = await res.json();
                setRestaurante(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Cambiar loading a false cuando termine la llamada
            }
        };

        if (id) {
            fetchRestaurante();
        } else {
            setLoading(false); // Si no hay id, detener la carga
        }
    }, [id]); // Dependencia de id

    // Manejo de estados de carga y error
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!restaurante) return <div>No se encontró el restaurante.</div>;

    

    return (
        <div>
            <h1>{restaurante.name}</h1>
            <p>Ubicación: {restaurante.ubicacion}</p>
            <p>Teléfono: {restaurante.telefono}</p>
            <h2>Reseñas:</h2>
            <ul>
                {restaurante.reviews.map((review) => (
                    <li key={review.id}>
                        {review.comentario} - Calificación: {review.calificacion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantDetail;

