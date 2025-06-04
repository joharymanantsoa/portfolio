import React from 'react';
import PropTypes from 'prop-types';

const ReferenceCard = ({ name, position, location, period, className = '' }) => {
  return (
    <div className={`reference-card ${className}`}>
      <div className="bg-gradient-to-br from-[#3c262b] to-[#2a1b1f] p-4 md:p-6 rounded-md flex flex-col items-center justify-center text-center  min-h-[160px] relative overflow-hidden border border-transparent hover:border-red-500   transition-all duration-300 h-70 ">
        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col justify-center text-center items-center ">
          <h3 className="text-white  mb-3 md:mb-4 uppercase  md:text-xl leading-tight ">{name}</h3>
          <p className="text-xl   md:text-xl mb-2 text-white/90 text-center flex-grow">{position}</p>
          <div className="">
            <p className="text-xs md:text-xl text-white/80">{location}</p>
            <p className="text-xs md:text-xl text-gray-400">{period}</p>
          </div>
        </div>
        
        {/* Effet de scan futuriste */}
        <div className="absolute hover:inset-0 hover:bg-gradient-to-r hover:from-transparent hover:via-red-500/10 hover:to-transparent hover:animate-pulse"></div>
      </div>
    </div>
  );
};

ReferenceCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ReferenceCard;