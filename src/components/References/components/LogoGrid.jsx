import React from 'react';
import PropTypes from 'prop-types';

export default function LogoGrid({ references }) {
  return (
    <div className="references-container flex justify-center px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center py-8 lg:gap-30 gap-10">
        {references.map((reference, index) => (
          <figure
            key={reference.id}
            className={`
              bg-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow
              logo-item
              logo-float-${(index % 4) + 1}
            `}
            style={{ width: '180px', height: '180px' }}
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
  );
}

LogoGrid.propTypes = {
  references: PropTypes.arrayOf(PropTypes.object).isRequired
};