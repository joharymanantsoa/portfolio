import React from 'react';
import ReferenceCard from './ReferenceCard';

const ReferenceList = ({ references }) => {
  // Validation des données
  if (!references || references.length < 4) {
    return (
      <div className="text-center text-red-500 p-8">
        <p>Données de références incomplètes</p>
      </div>
    );
  }

  return (
    <div className="references-container mt-22">
      <div className=" mx-auto px-4">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 aspect-square md:aspect-auto ">
          {references.slice(0, 2).map((reference, index) => (
            <ReferenceCard 
              key={reference.id}
              name={reference.name}
              position={reference.position}
              location={reference.location}
              period={reference.period.display}
              className={`reference-card-${index + 1}`}
            />
          ))}
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4 aspect-square md:aspect-auto mt-4">
          {references.slice(2, 4).map((reference, index) => (
            <ReferenceCard 
              key={reference.id}
              name={reference.name}
              position={reference.position}
              location={reference.location}
              period={reference.period.display}
              className={`reference-card-${index + 1}`}
            />
          ))}
            
          {/* Carte CTA */}
          <div className="reference-cta-card h-full">
            <div className="border border-red-500 bg-gradient-to-br from-[#3c262b] to-[#2a1b1f] p-6 rounded-md flex flex-col items-center justify-center text-center h-full min-h-[160px] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-red-500 font-medium text-lg mb-2">Faites comme eux,</p>
                <p className="text-red-500 font-medium text-lg">faites nous confiance</p>
                <div className="mt-4 w-16 h-0.5 bg-red-500 mx-auto opacity-70"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceList;