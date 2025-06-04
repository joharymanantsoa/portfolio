import React from 'react';
import { referencesData } from './data/ReferenceData.js';
import LogoGrid from './components/LogoGrid.jsx';
import ReferenceList from './components/ReferenceList.jsx';
import './styles/index.css';

const References = () => {
    return (
        <section className="references-container mx-auto px-4 py-8 md:py-12 bg-[#171C28] text-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-xl md:text-3xl text-white font-bold mb-8 md:mb-12 text-center futuristic-title">
                    Mes références
                </h2>

                {/* Section des logos */}
                <LogoGrid references={referencesData} />

                {/* Section des cartes d'expérience*/}
                <ReferenceList references={referencesData} />

            </div>
        </section>
    );
};

export default References;
export { referencesData } from './data/ReferenceData.js';