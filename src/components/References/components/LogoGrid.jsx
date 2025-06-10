import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LogoGrid.css';

export default function LogoGrid({ references }) {
  return (
    <div className="references-container flex justify-center px-4">
      <div className="flex flex-col items-center gap-12 py-8">

        {/* Première ligne : 3 logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 place-items-center gap-6 lg:gap-16 sm:gap-6 px-4">
          {references.slice(0, 3).map((reference, index) => (
            <figure
              key={reference.id}
              className={`
                bg-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow
                logo-item
                logo-float-${(index % 5) + 1}
                w-36 h-36 sm:w-40 sm:h-40 lg:w-52 lg:h-52
              `}
              role="img"
              aria-label={`Logo de ${reference.name}`}
            >
              <img
                src={reference.logo.src}
                alt={reference.logo.alt}
                className="w-full h-full object-contain mx-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.src = reference.logo.placeholder;
                }}
              />
            </figure>
          ))}
        </div>

        {/* Deuxième ligne : 2 logos centrés*/}
        <div className="grid grid-cols-2 place-items-center gap-10 lg:gap-24 mx-auto max-w-md">
          {references.slice(3, 5).map((reference, index) => (
            <figure
              key={reference.id}
              className={`
        bg-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow
        logo-item
        logo-float-${(index + 3) + 1}
        w-36 h-36 sm:w-40 sm:h-40 lg:w-52 lg:h-52
      `}
              role="img"
              aria-label={`Logo de ${reference.name}`}
            >
              <img
                src={reference.logo.src}
                alt={reference.logo.alt}
                className="w-full h-full object-contain mx-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.src = reference.logo.placeholder;
                }}
              />
            </figure>
          ))}
        </div>

      </div>
    </div>
  );
}

LogoGrid.propTypes = {
  references: PropTypes.arrayOf(PropTypes.object).isRequired
};