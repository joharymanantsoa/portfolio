import React from 'react';
import PropTypes from 'prop-types';

const ReferenceCard = ({ name, position, location, period, className = '' }) => {
  return (

      <div className={`reference-card ${className} relative`}>
      <div className=" bg-gradient-to-br from-[#3c262b] to-[#2a1b1f] p-4 md:p-6 rounded-md flex flex-col items-center justify-center text-center  min-h-[160px] relative overflow-hidden border border-transparent hover:border-red-500   transition-all duration-300 h-123 ">
        {/* Contenu principal */}
        <div class="card">
  <div class="side front">Front</div>
  <div class="side back">Back</div>
</div>
      {/* Effet de scan futuriste */}
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