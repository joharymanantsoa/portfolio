import styles from "./Formation.module.css";
import monImage from "../../assets/images/profil.png";
import alphorm from "../../assets/formation-logos/alphorm.png"
import apisec from "../../assets/formation-logos/apisec.png"
import c3sai from "../../assets/formation-logos/c3sai.jfif"
import esiee from "../../assets/formation-logos/esiee-it.jpeg"
import esti from "../../assets/formation-logos/esti.png"
import fortinet from "../../assets/formation-logos/fortinet.png"
import itti from "../../assets/formation-logos/ITTI.png"
import yali from "../../assets/formation-logos/yali.jfif"

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function Formation() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1434);
  const btnRef = useRef(null);
  const btnRef1 = useRef(null);
  const [isCertification, setIsCertification] = useState(true);

  useEffect(() => {
    // Initial style for buttons
    btnRef.current.className = styles.btnRef;
    btnRef1.current.className = styles.btnRef1;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1432);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function showCertification(e) {
    // style buttons
    btnRef.current.className = styles.btnRef;
    btnRef1.current.className = styles.btnRef1;
    setIsCertification(true);
  }
  function showStudies(e) {
    // style buttons
    btnRef.current.className = styles.btnRef1;
    btnRef1.current.className = styles.btnRef;
    setIsCertification(false);
  }
  return (
    <div id="formations" className={styles.all}>
      <center>
        <h3 className="font-bold text-[30px]" id={styles.title}>
          FORMATION
        </h3>
        <button ref={btnRef} onClick={(e) => showCertification(e)}>
          certification
        </button>
        <button ref={btnRef1} onClick={(e) => showStudies(e)}>
          éducation
        </button>
        <p className="mt-[20px] text-[20px]">
          Je travaille dans le domaine de la cybersécurité pour des entreprises
          du monde entier depuis plus de sept ans. J'y ai tout appris, de ses
          racines médiévales à nos jours.
        </p>
      </center>
      <div className="flex lg:flex-row md:flex-col flex-col items-center sm:justify-center justify-center">
        <div className="w-full sm:w-[350px] md:w-[350px] lg:w-[390px] flex-col sm:justify-center lg:justify-end justify-end min-[1024px]:mr-[-50px] align-baseline">
          {isCertification ? (<>
            <div className="flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">Certificated Cybersecurity Analyst | C3SAI</h5>
                <img className="w-15 h-15" src={c3sai} alt="c3sai" />
              </div>
              <p>Cyber Warfare Labs</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">Cambridge</span>
                <span className="whitespace-nowrap">Octobre 2023</span>
              </div>
            </div>
            <div className={clsx(
              'flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm',
              {
                'ml-[-50px]': isLargeScreen,
              }
            )}>
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">YALI REGIONAL LEADERSHIP CENTER</h5>
                <img className="w-15 h-15" src={yali} alt="yali" />
              </div>
              <p>YALI RLC & USAID</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">Afrique de Sud</span>
                <span className="whitespace-nowrap">Août 2023</span>
              </div>
            </div>
            <div className="flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">Fortinet Certified Fundamentals in Cybersecurity</h5>
                <img className="w-15 h-15" src={fortinet} alt="fortinet" />
              </div>
              <p>Fortinet</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">Sunnyvale</span>
                <span className="whitespace-nowrap">Avril 2023</span>
              </div>
            </div>
          </>) : (<>
            <div className="flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">ESIEE-IT Paris / ESTI Antanimena</h5>
                <img className="w-15 h-15" src={esiee} alt="esiee" />
              </div>
              <p>MASTER en Infrastructure et Cybersécurité</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">Madagascar</span>
                <span className="whitespace-nowrap">2021 - 2024</span>
              </div>
            </div>
          </>)}
        </div>
        <div className="flex-1"  id={styles.image}>
          <div className="relative w-full h-full flex justify-center items-center py-8">
            {/* Effet de glow amélioré et élargi */}
            <div className="absolute bg-red-900/70 w-[340px] h-[340px] rounded-full blur-3xl"></div>

            {/* Container d'image circulaire */}
            <div className="relative z-10 w-[476px] h-[398px] rounded-full overflow-hidden">
              <img
                src={monImage}
                alt="Sarobidy ANDRIAMIALY"
                className="w-[476px] h-[398px] object-cover object-top" // object-top pour focus sur le visage
                style={{ objectPosition: "center 30%" }} // Ajustement fin de la position verticale
                loading="eager"
              />
            </div>
          </div>
        </div>



        <div className="w-full sm:w-[350px] md:w-[350px] lg:w-[390px] flex-col justify-end align-baseline">
          {isCertification ? (<>
            <div className="flex-1 bg-[#f91b1b70] m-[20px] px-[20px] py-[10px] sm:w-[300px] max-[1023px]:mt-0 md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B] pr-6">API Penetration Testing</h5>
                <img className="w-15 h-15" src={apisec} alt="apisec" />
              </div>
              <p>APISEC University</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">San Francisco</span>
                <span className="whitespace-nowrap">Avril 2023</span>
              </div>
            </div>
            <div className={clsx(
              'flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm',
              {
                'ml-[90px]': isLargeScreen,
              }
            )}>
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">Certificate of Superior Level English C2</h5>
                <img className="w-15 h-15" src={itti} alt="itti" />
              </div>
              <p>International Testing &Training institute</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">New York</span>
                <span className="whitespace-nowrap">Août 2022</span>
              </div>
            </div>
            <div className="flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B]">L'essentiel pour l'Analyste SOC</h5>
                <img className="w-15 h-15" src={alphorm} alt="alphorm" />
              </div>
              <p>Alphorm</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">France</span>
                <span className="whitespace-nowrap">Décembre 2022</span>
              </div>
            </div>
          </>) : (<>
            <div className="flex-1 bg-[#F91B1B70] m-[20px] px-[20px] py-[10px] sm:w-[300px] md:w-[300px] lg:w-[320px] max-w-[320px] hover:cursor-pointer hover:shadow-[#F91B1B] hover:shadow-sm">
              <div className="flex">
                <h5 className="text-[18px] text-[#F91B1B] pr-10">ESTI Antanimena</h5>
                <img className="w-15 h-15" src={esti} alt="esti" />
              </div>
              <p>LICENSE en Réseaux et Systèmes</p><br></br>
              <div className="flex justify-between w-full">
                <span className="text-[#F91B1B] whitespace-nowrap">Madagascar</span>
                <span className="whitespace-nowrap">2017 - 2021</span>
              </div>
            </div>
          </>)}
        </div>

      </div>
    </div>
  );
}
export default Formation;
