import React, { useState } from 'react';
import { Hexagon } from 'lucide-react';

const LifeMap = () => {
  const [activeHexagon, setActiveHexagon] = useState(null);
  const [background, setBackground] = useState('bg-gray-100');

  const hexagons = [
    { id: 'family', title: 'Familia', content: 'Somos ramas de un mismo árbol, creciendo hacia distintos cielos, pero compartiendo la misma raíz profunda de amor.', bg: 'bg-red-100' },
    { id: 'personal', title: 'Personal', content: 'En cada silencio, en cada pausa, me encuentro a mí mismo más cerca de la esencia de lo que soy, como una melodía que nunca deja de sonar.', bg: 'bg-blue-100' },
    { id: 'academic', title: 'Académico', content: 'Estudiante de Ingeniería Informática. Pasión por la programación y las matemáticas.', bg: 'bg-green-100' },
    { id: 'social', title: 'Social', content: 'El aprendizaje es un viaje colectivo, y en cada paso que damos juntos, crecemos más allá de nuestras propias fronteras.', bg: 'bg-yellow-100' },
    { id: 'vocational', title: 'Vocacional', content: 'Mi vocación no está en las palabras, sino en los actos que resuenan con autenticidad y dejan huella en mi propio recorrido.', bg: 'bg-purple-100' },
    { id: 'creative', title: 'Creativo', content: 'Mis pensamientos son notas sueltas, que tejen sinfonías invisibles, mientras mis palabras danzan en el espacio entre lo que siento y lo que soy', bg: 'bg-pink-100' },
  ];

  const handleHexagonClick = (id) => {
    setActiveHexagon(id);
    const hexagon = hexagons.find(h => h.id === id);
    setBackground(hexagon.bg);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-500 ${background}`}>
      <h1 className="text-3xl font-bold mb-8">Mi Viaje de Vida</h1>
      <div className="grid grid-cols-3 gap-4">
        {hexagons.map((hexagon) => (
          <div
            key={hexagon.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleHexagonClick(hexagon.id)}
          >
            <Hexagon
              size={80}
              className={`${
                activeHexagon === hexagon.id ? 'text-blue-500' : 'text-gray-400'
              } hover:text-blue-300 transition-colors duration-300`}
            />
            <span className="mt-2 text-sm font-semibold">{hexagon.title}</span>
          </div>
        ))}
      </div>
      {activeHexagon && (
        <div className="mt-8 p-4 bg-white rounded shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">
            {hexagons.find((h) => h.id === activeHexagon).title}
          </h2>
          <p>{hexagons.find((h) => h.id === activeHexagon).content}</p>
        </div>
      )}
      <div className="mt-8 flex items-center">
        <span>Creado con pasión por la programación</span>
      </div>
    </div>
  );
};

export default LifeMap;