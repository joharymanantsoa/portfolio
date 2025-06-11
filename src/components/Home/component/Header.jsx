import profil from '../../../assets/profil.jpeg'
function Header() {

  return (
    <>

      <div id="home" className='mb-cover w-full gap-5 px-20 mt-15 p-10'>

        <div className='flex flex-col mb-cover container px-4 md:px-15 lg:flex-row items-center w-full'>

          <div className="flex-1 mt-20">
            <h2 className='text-white text-5xl'>Je suis</h2>
            <h1 className='text-red-700 text-7xl font-bold'>Sarobidy <br /> ANDRIAMIALY</h1>
            <h2 className='text-white text-4xl'>Consultant en cybersécurité</h2>
            <p className='text-red-200 mb-10-max-w-2xl my-4'>Passionné par la cybersécurité, je conçois et <br />
              enforce des systèmes d'informations<br /> sûrs et résilients</p>
            <div className="flex-1 transform md:translate-x-30  p-4">
              <h3 className='text-white text-3xl font-bold text-shadow-red-500 text-shadow-lg drop-shadow-2xl drop-shadow-red-500 animate-pulse'> +de 6 ans d'expérience</h3>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full h-full flex justify-center items-center py-8">
              {/* Effet de glow amélioré et élargi */}
              <div className="absolute bg-red-900/70 w-[340px] h-[340px] rounded-full blur-3xl"></div>

              {/* Container d'image circulaire */}
              <div className="relative z-10 w-[300px] h-[300px] rounded-full overflow-hidden">
                <img
                  src={profil}
                  alt="Sarobidy ANDRIAMIALY"
                  className="w-full h-full object-cover object-top" // object-top pour focus sur le visage
                  style={{ objectPosition: "center 30%" }} // Ajustement fin de la position verticale
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </>

  );
}

export default Header;
