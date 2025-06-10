import React from 'react';
import ReferenceCard from './ReferenceCard';
import './ReferenceCard.css'

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
    <section className='mx-auto'>
      <div className='cards flex flex-col lg:flex-row justify-center gap-4'>

        <div className='carte '>
          <div className='cartes front'>
            <p>BANQUE MONDIALE</p>
            <p className='pt-4'>Expert en Cybersécurité</p>
            <p className='pt-4'>Madagascar</p>
            <p className='pt-4'>Mai 2025 - à présent</p>


          </div>
          <div className='cartes back'>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Pilotage et gestion de projets de sécurité
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Analyse et gestion des vulnérabilités
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Collaboration stratégique
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Leadership et management d'équipe
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Réponse aux incidents
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Innovation et optimisation des solutions
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Gestion des patchs
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Mise en place de procédures de sécurité
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Politique de sécurité et stratégie nationale de cybersécurité
            </p>
          </div>
        </div>

        <div className='carte '>
          <div className='cartes front'>
            <p>ACCÈS BANQUE</p>
            <p className='pt-4'>Lead Ingénieur Cybersécurité</p>
            <p className='pt-4'>Madagascar</p>
            <p className='pt-4'>Mai 2024 - à présent</p>


          </div>
          <div className='cartes back'>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Pilotage et gestion de projets de sécurité
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Analyse et gestion des vulnérabilités
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Collaboration stratégique
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Leadership et management d'équipe
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Réponse aux incidents
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Innovation et optimisation des solutions
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Gestion des patchs
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Audit et tests d'intrusion
            </p>
          </div>
        </div>


        <div className='carte '>
          <div className='cartes front'>
            <p>GROUPE AXIAN / PULSE</p>
            <p className='pt-4'>Ingénieur en cybersécurité</p>
            <p className='pt-4'>Madagascar</p>
            <p className='pt-4'>Mai 2024 - à présent</p>
          </div>
          <div className='cartes back'>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Gestion et optimisation des solutions de sécurité
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Analyse et gestion des vulnérabilités (VAPT)
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Gestion des patchs management
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Renforcement systèmes / Hardening
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Réponse aux incidents
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Preuves de concept (POC)</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Surveillance proactive des menaces
            </p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Collaboration stratégique</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Rapports et communication</p>
          </div>
        </div>
      </div>


      <div className='cards flex mt-4 flex-col md:flex-row justify-center gap-4 w-full'>

        <div className='carte '>
          <div className='cartes front'>
            <p>BANQUE BGFI</p>
            <p className='pt-4'>Consultant Développeur</p>
            <p className='pt-4'>Madagascar</p>
            <p className='pt-4'>Mai 2024 - à présent</p>
          </div>
          <div className='cartes back'>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Développement de scripts et outils</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>

              Data Science</p>
          </div>
        </div>


        <div className='carte '>
          <div className='cartes front'>
            <p>EASYTECH / BEWYS OUTSOURCING</p>
            <p className='pt-4'>Lead Ingénieur Cybersécurité</p>
            <p className='pt-4'>Madagascar</p>
            <p className='pt-4'>Mai 2024 - à présent</p>
          </div>
          <div className='cartes back'>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Support utilisateur</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Gestion des tickets</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Monitoring réseau</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Développement d'outils et de scripts</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Gestion des firewalls</p>
            <p className='flex gap-3 items-center'>
              <span className='text-red-600 p-1 w-2 h-2 grid content-center rounded-full text-center'>✔</span>
              Installation et configuration de serveurs</p>
          </div>
        </div>


        <div className='carte-desc '>
          <div className='cartes front' id='card-desc'>
            Faites comme eux,
            <p>faites nous confiance</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ReferenceList;