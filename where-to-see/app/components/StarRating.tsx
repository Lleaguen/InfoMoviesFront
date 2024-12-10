'use client'

interface StarRatingProps {
    voteAverage: number;
}

const StarRating: React.FC<StarRatingProps> = ({ voteAverage }) => {
    const normalizedRating = voteAverage / 2; // Normalizar a un rango de 0 a 5
    const fullStars = Math.floor(normalizedRating); // Cantidad de estrellas llenas
    const hasHalfStar = normalizedRating % 1 >= 0.5; // Si tiene media estrella
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Estrellas vacías
  
    return (
      <div className="flex items-center space-x-1">
        {/* Estrellas llenas */}
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <div key={`full-${index}`} className="text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                stroke="white"
                strokeWidth='1'
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.847 1.417 8.268L12 18.897l-7.417 4.452L6 15.081.002 9.234l8.332-1.216L12 .587z" />
              </svg>
            </div>
          ))}
  
        {/* Media estrella */}
        {hasHalfStar && (
          <div className="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              stroke="white"
              strokeWidth='1'
            >
              <defs>
                <clipPath id="half-star">
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
              <path
                d="M12 .587l3.668 7.431L24 9.234l-6 5.847 1.417 8.268L12 18.897l-7.417 4.452L6 15.081.002 9.234l8.332-1.216L12 .587z"
                fill="currentColor"
                clipPath="url(#half-star)"
              />
            </svg>
          </div>
        )}
  
        {/* Estrellas vacías */}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <div key={`empty-${index}`} className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.847 1.417 8.268L12 18.897l-7.417 4.452L6 15.081.002 9.234l8.332-1.216L12 .587z" />
              </svg>
            </div>
          ))}
      </div>
    );
  };
  
  export default StarRating;