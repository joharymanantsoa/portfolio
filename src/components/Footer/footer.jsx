import './footer.css'

function Footer(){
    return(
        <footer className="bg-[#101522] text-white py-8 px-6">
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                {/* Logo section */}
                <div className='mb-6 md:mb-0'>
                    <h2 className='text-3xl font-script text-gray-300'>Sarobidy</h2>
                </div>
                <div className='h-32 w-px bg-gray-300'></div>

                {/* Middle section with navigation and copyright */}
                <div className='mb-6 md:mb-0 flex flex-col items-center'>
                    <div className='flex space-x-6 mb-3'>
                        <p className="cursor-pointer hover:text-gray-300">Expérience</p>
                        <p className="cursor-pointer hover:text-gray-300">Formations</p>
                        <p className="cursor-pointer hover:text-gray-300">Services</p>
                        <p className="cursor-pointer hover:text-gray-300">Réalisations</p>
                    </div>
                    <div className="text-sm text-gray-400">2025 tout droit réservé.</div>
                </div>

                {/* Social and contact section */}
                <div className='flex flex-col items-end space-y-2'>
                    <div className='flex space-x-4'>
                        <a href="#" aria-label="Facebook">
                            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" aria-label="GitHub">
                            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
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
    )
}

export default Footer