import StarRating from './StarRating';

export default function CardRestaurante({ restaurante }) {
  if (!restaurante) {
    return <div>No hay información disponible sobre el restaurante.</div>;
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img 
        className="p-8 rounded-t-lg" 
        src={restaurante.imagen || "https://th.bing.com/th/id/OIP.8WDfBuzZn3FQe6-1s0T5xwHaEo?rs=1&pid=ImgDetMain"} 
        alt={`Imagen de ${restaurante.name}`} 
      />
      <div className="px-5 pb-5">
        <div className='flex justify-between'>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {restaurante.name}
          </h5>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Promedio: {restaurante.calificacionPromedio}
          </span>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <StarRating calificacionPromedio={restaurante.calificacionPromedio} />
        </div>
        <a 
          href={`/restaurantes/${restaurante.id}`} 
          aria-label={`Ver más detalles sobre ${restaurante.name}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver más
        </a>
      </div>
    </div>
  );
}


// export default CardRestaurante;


// Definición de tipos de propiedades para el componente
// CardRestaurante.propTypes = {
//     id: PropTypes.number.isRequired,
//     nombreRestaurante: PropTypes.string.isRequired,
//     calificacion: PropTypes.number.isRequired,
//     imagen: PropTypes.string.isRequired,
// };

// export default CardRestaurante;
