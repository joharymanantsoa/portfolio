import React from "react";
import ServiceItem from "./ServiceItem";
import gadena from '../../assets/gadenat.png';
import lock_PC from '../../assets/pc-lock.png';
import cle from '../../assets/key.png';
import './Service.css';
import lock from '../../assets/lock1.png';
import pro from '../../assets/vecteezy_modern-cybersecurity-technology-background-with-shield_24640619.png';

const serviceData = [
  { icon: gadena, title: "Cybersecurity Analyst", description: "En tant qu'analyste en cybersécurité, je surveille en continu les systèmes pour détecter rapidement toute anomalie ou activité malveillante. Grâce à l'analyse approfondie des données et à l'utilisation d'outils spécialisés, j'identifie les failles potentielles et contribue à anticiper et neutraliser les cybermenaces avant qu'elles n'affectent votre infrastructure" },
  { icon: cle, title: "Professionnal", description: "En tant que professionnel de la cybersécurité, je conçois et implémente des stratégies intégrées, allant de l'analyse des vulnérabilités à la mise en place de dispositifs de sécurité avancés adaptés à vos besoins. Grâce à une approche proactive et une expertise terrain, je supervise l'ensemble des mesures de protection pour assurer la résilience de vos infrastructures face aux menaces actuelles et futures." },
  { icon: pro, title: "Pentesting", description: "En tant que spécialiste du pentesting, je simule des attaques pour révéler les failles et identifier les vulnérabilités potentielles dans vos systèmes. En combinant des outils automatisés à une expertise manuelle éprouvée, je propose des mesures concrètes et adaptées afin de renforcer efficacement la résilience de votre infrastructure face aux cybermenaces." },
  { icon: lock_PC, title: "Audit et mise en place d'outils de sécurité", description: "Je réalise des audits complets de votre infrastructure existante pour évaluer votre posture de sécurité actuelle. Fort de cette analyse, je conçois et déploie des solutions de sécurité adaptées : firewalls, systèmes de détection d'intrusion, antivirus d'entreprise, et outils de monitoring. Mon approche méthodique garantit une intégration harmonieuse des technologies de protection tout en optimisant les performances de vos systèmes." }

];
function Services() {
  return (
    <div  id="services" className="container py-8 md:py-12 bg-[#171C28] text-white mx-auto px-4 md:px-8">
      <div className="flex flex-col  md:flex-row items-center gap-20 justify-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 typing-container ">Mes services</h1>
          <p className=" mb-5">
            Je propose mes services en cybersécurité en tant qu'analyste et
            professionnel, spécialisé en pentesting pour détecter et corriger les
            vulnérabilités. Je mets en place des solutions sur mesure pour renforcer
            la sécurité de vos environnements et prévenir les menaces.
          </p>

          {
            serviceData.map((data, i) => (
              <ServiceItem key={i} data={data} />
            ))
          }


        </div>

        <div id='image_container' className="flex-1 ">
          <img src={lock} alt="" className="w-150 h-150 object-cover animate-pulse anim max-[1030px]:hidden" />
 
        </div>
      </div>

    </div>

  );
}
export default Services;
