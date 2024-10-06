// src/app/components/StarRating.js

export default function StarRating({ calificacionPromedio }) {
  // Asegúrate de que el promedio sea un número y esté en el rango de 0 a 5
  const promedio = Math.max(0, Math.min(5, Number(calificacionPromedio) || 0));
  
  // Redondea el promedio a la estrella más cercana (0-5)
  const estrellasLlenas = Math.floor(promedio); // Estrellas llenas
  const estrellasMedias = promedio % 1 >= 0.5 ? 1 : 0; // Media estrella si aplica
  const estrellasVacias = 5 - estrellasLlenas - estrellasMedias; // Estrellas vacías

  return (
    <div className="flex">
      {/* Estrellas completas */}
      {[...Array(estrellasLlenas)].map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      ))}

      {/* Estrella media */}
      {estrellasMedias === 1 && (
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          {/* cambiar el ícono para media estrella */}
          <path d="M11 17.033L4.481 19.41a1.534 1.534 0 0 1-2.226-1.616l.863-5.03L1.463 9.2a1.535 1.535 0 0 1 .852-2.626l5.05-.735 2.26-4.576a1.534 1.534 0 0 1 2.752 0l2.26 4.576 5.05.735a1.535 1.535 0 0 1 .852 2.626l-3.656 3.563.863 5.03a1.532 1.532 0 0 1-2.226 1.616L11 17.033z" />
        </svg>
      )}

      {/* Estrellas vacías */}
      {[...Array(estrellasVacias)].map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      ))}
    </div>
  );
}
