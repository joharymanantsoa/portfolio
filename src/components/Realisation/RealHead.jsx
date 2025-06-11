import lockImage from '../../assets/lock.png'
import './RealHead.css'

export default function RealHead() {
    return (
        <div className='flex flex-column-reverse gap-5 justify-content-between'>
            <div className='flex-2'>
                <h2 className='text-red-700 font-bold'>REALISATIONS SIGNIFICATIVES</h2>
                <h3 className='text-slate-400 text-2xl font-bold'>Accomplissements professionnels</h3>
                <p className='text-slate-600 my-2'>Depuis plus de sept ans, j'accompagne des entreprises à travers le monde dans le domaine de la cybersécurité.
                    Mon expertise couvre l'ensemble du spectre, de la protection des systèmes d'informations à la détection proactive des menaces.
                    J’ai acquis une compréhension approfondie de l’évolution du domaine, de ses fondements historiques à ses enjeux actuels.</p>
            </div>
            <figure className='flex-1 hidden md:block'><img loading='lazy' className='lock-image h-full w-50 object-cover aspect-auto animate-pulse ' src={lockImage} alt="lock-image" /></figure>
        </div>
    )
}
