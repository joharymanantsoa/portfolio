import './footer.css'

function Footer() {
    return (<>
        <footer className="bg-[#101522] text-white relative pt-[100px]">
        <div id='footer' className='absolute w-full bg-[#171C28] top-0 h-[150px] z-[999]'>
        </div>
            <div className='container py-9 mx-auto flex flex-col md:flex-row justify-between min-[768px]:pt-[200px]items-center'>
                {/* Logo section */}
                <div className='mb-6 md:mb-0'>
                    <h2 className='max-[1024px]:hidden text-3xl font-script text-gray-300'>Sarobidy</h2>
                </div>
                <div className='max-[1024px]:hidden h-32 w-px bg-gray-300'></div>

                {/* Middle section with navigation and copyright */}
                <div className='mb-6 md:mb-0 flex flex-col items-center'>
                    <div className='flex space-x-6 mb-3'>
                        {/* <p className="cursor-pointer hover:text-gray-300">Accueil</p>
                        <p className="cursor-pointer hover:text-gray-300">References</p>
                        <p className="cursor-pointer hover:text-gray-300">Services</p>
                        <p className="cursor-pointer hover:text-gray-300">Formations</p>
                        <p className="cursor-pointer hover:text-gray-300">Réalisations</p> */}
                        
                        <ul className="hidden lg:flex space-x-6 text-white">
                            <li><a href="#home" className="hover:text-red-600">Accueil</a></li>
                            <li><a href="#references" className="hover:text-red-600">References</a></li>
                            <li><a href="#services" className="hover:text-red-600">Services</a></li>
                            <li><a href="#formations" className="hover:text-red-600">Formations</a></li>
                            <li><a href="#realisations" className="hover:text-red-600">Realisations</a></li>
                        </ul>
                    </div>
                    <div className="text-sm text-gray-400">© 2025 tout droit réservé.</div>
                </div>

                {/* Social and contact section */}
                <div></div>
                <div className='flex flex-col items-start space-y-2'>
                    <div className='flex space-x-4'>
                        <div className='flex-col gap-2'>
                            <div className='p-2 flex justify-start gap-2'>
                                <a href="https://www.facebook.com/sarobidy.andriamialy/" aria-label="Facebook" className="flex gap-1">
                                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                    <span>Sarobidy Andriamialy</span>
                                </a>

                            </div>
                            <div className='p-2 flex justify-start gap-2'>
                                <a href="https://www.linkedin.com/in/sarobidy-andriamialy-280b3514b/" aria-label="LinkedIn" className="flex gap-1">
                                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" clipRule="evenodd" />
                                    </svg>
                                    <span>Sarobidy Andriamialy</span>
                                </a>

                            </div>
                           
                        </div>
                    </div>
                    <a href="mailto:andrisarobidy@gmail.com" className='text-sm text-white hover:text-gray-300'>
                    andrisarobidy@gmail.com
                    </a>
                    <a href="tel:+261346860026" className='text-[#ff3838] text-sm hover:text-red-400'>
                        +261 34 68 600 26
                    </a>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer