import RealHead from './RealHead'
import RealItem from './RealItem'
import { Spotlight } from '../ui/Spotlight'

import besidesImage from '../../assets/brand/besides.png'
import cyberIslandImage from '../../assets/brand/cyber-island.jpg'
import yesMadagascarImage from '../../assets/brand/yes-madagascar.png'
import youthOpportunitiesImage from '../../assets/brand/youth-opportunities.jpg'


const RealisationData = [
    {
        logo: besidesImage,
        title: 'BSides Madagascar',
        subtitle: "Organisateur principal",
        created_at: 'Septembre 2024 - À PRÉSENT',
        description: "Un événement d’envergure internationale, offrant un espace d'échange et d'apprentissage pour les professionnels, étudiants et passionnés à la cybersécurité.",
        tasks: [{
            title: "Planification et exécution de l'événement ",
            description: "Diriger la planification stratégique, la gestion des ressources et l'exécution de BSides Madagascar, en veillant à la bonne coordination des différentes étapes, de la préparation à la clôture de l'événement."
        },
        {
            title: "Gestion des volontaires",
            description: "Superviser l'équipe de volontaires, définir leurs rôles et responsabilités, et veiller à leur formation et à leur engagement tout au long de l'événement."
        },
        {
            title: "Création d'une expérience enrichissante",
            description: "Garantir que chaque participant bénéficie d'une expérience captivante, en mettant en place des sessions interactives, des ateliers et des conférences qui favorisent l'échange de connaissances et de pratiques en cybersécurité."
        },
        {
            title: "Promotion de Madagascar dans la cybersécurité mondiale",
            description: "Contribuer à la visibilité internationale de Madagascar en tant que hub émergent dans le domaine de la cybersécurité, en attirant des experts et des passionnés du monde entier."
        }
        ]
    },
    {
        logo: cyberIslandImage,
        title: 'CyberIsland',
        subtitle: "Co-Founder",
        created_at: 'Juin 2024 - À PRÉSENT',
        description: " Une plateforme dédiée à la formation en cybersécurité des jeunes issus des îles, telles que Madagascar, Maurice, etc.",
        tasks: [
            {
                title: "Podcasts",
                description: " Créer et animer des podcasts sur des sujets de cybersécurité pour partager des idées, des expériences et des perspectives avec une audience globale. "
            },
            {
                title: "Coordination d'événements",
                description: " Organiser et gérer des événements de cybersécurité, y compris des compétitions (CTF), des ateliers pratiques et des campagnes de sensibilisation pour promouvoir la sécurité informatique."
            },
            {
                title: "Organisation de webinaires",
                description: "Concevoir et animer des webinaires gratuits, en invitant des experts pour partager des connaissances approfondies et offrir des opportunités d'apprentissage à un large public."
            },
        ]
    },
    {
<<<<<<< HEAD
        logo: yesMadagascarImage,
=======
        logo: LogoCompany,
>>>>>>> 5830da2 (fix:footer,header,realisation import:fonts)
        title: 'YES Madagascar',
        subtitle: "Founder / Président ",
        created_at: 'Septembre 2023 - À PRÉSENT ',
        description: " Une plateforme consacrée aux jeunes afin d’encourager le partage, l’entraide et surtout le travail en équipe par l’intermédiaire de conférence, événement et sensibilisation ",
        tasks: [
            {
                title: "Soutien au développement des jeunes leaders",
                description: "Mise en place d'actions concrètes avec des universités et lycées pour encourager les jeunes à initier des projets et devenir des agents de changement au sein de leurs communautés. "
            },
            {
                title: "Coordination d'événements internationaux et nationaux",
                description: "Collaboration avec des partenaires pour organiser des conférences, des séances de partage et des événements visant à sensibiliser et encourager l’entraide à l’échelle nationale et internationale. "
            },
            {
                title: "Direction et gestion d'initiatives humanitaires",
                description: "Organisation d'événements et de projets visant à soutenir les personnes démunies et vulnérables à Madagascar et en Afrique, avec un engagement constant pour améliorer les conditions de vie des communautés locales. "
            }
        ]
    },
    {
        logo: youthOpportunitiesImage,
        title: 'Youth Opportunities',
        subtitle: "Campus Ambassadeur",
        created_at: 'Mars 2023 – Décembre 2023',
        tasks: [
            {
                title: "Faciliter l'accès aux opportunités",
                description: "Partager les informations sur les bourses, stages, concours et programmes de leadership afin d'ouvrir des portes aux jeunes pour leur développement."
            },
            {
                title: "Mettre en réseau les jeunes",
                description: "Connecter les jeunes avec des ressources et des opportunités qui favorisent leur développement personnel et professionnel."
            },
            {
                title: "Encourager l'exploitation des opportunités mondiales",
                description: "Motiver les jeunes à tirer parti des opportunités de développement et de réussite à l'échelle mondiale."
            }
        ]
    }
]


export default function Realisation() {
    return (
        <section className='lg:px-20 p-5 relative w-full overflow-hidden  antialiased'>
            <Spotlight
                className="-top-70 -left-0"
                fill="red"
            />
            <RealHead />
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-7'>
                {
                    RealisationData.map((data, i) => (

                        <RealItem key={i} data={data} />
                    ))
                }
            </div>
        </section>
    )
}
