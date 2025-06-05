import profil from '../../../assets/profil.jpeg'
function Header() {

  return (
    <>

      <div className='min-h-screen mb-cover w-full gap-5 px-20 mt-15'>   

        <div className='flex flex-col mb-cover container px-4 md:px-15 lg:flex-row items-center w-full'>

          <div className="flex-1 mt-20">
            <h2 className='text-white text-5xl'>Je suis</h2>
            <h1 className='text-red-700 text-7xl font-bold'>Sarobidy <br/> ANDRIAMIALY</h1>
            <h2 className='text-white text-4xl'>Consultant en cybersécurité</h2>
            <p className='text-red-200 mb-10-max-w-2xl my-4'>Passionné par le cybersécurité, je conçois et <br />
            enforces des systèmes d'informations<br/> sûrs et résilients</p>
            <div className="flex-1 transform translate-x-30  p-4">
              <h3 className='text-white text-3xl font-bold text-shadow-red-500 text-shadow-lg drop-shadow-2xl drop-shadow-red-500 animate-pulse'> +de 6 ans d'expérience</h3>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative ">
    
              <div className="absolute  bg-red-900  w-full h-full rounded-full blur-3xl"></div>

                <div className="relative flex items-center justify-center text-center">
                <img src={profil} alt="Image" class="rounded-lg mx-auto  object-cover h-[500px] aspect-video w-[500px] z-10" />
              </div>
            </div>
          </div>

        </div>
     
      </div>
    </>

  );
}

export default Header;
