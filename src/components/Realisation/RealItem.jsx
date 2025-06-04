import './RealItem.css'

export default function RealItem({ data }) {
    return (
        <article className='real-item bg-slate-600/20 p-5 lg:p-15 border border-slate-500/30 rounded-md'>

            <div className='flex gap-5'>
                <figure><img src={data.logo} className="h-20 w-20 aspect-video rounded-md" alt="logo-company" /></figure>
                <div>
                    <h2 className='text-xl'>{data.title} </h2>
                    <h3>{data.subtitle}</h3>
                    <h4 className='text-slate-400'>{data.created_at} </h4>
                </div>
            </div>

            {data.description && <em className='my-3 inline-block mb-10'>  {data.description} </em>}


            {
                data.tasks.map(({ title, description }, i) => (

                    <div key={i} className='flex items-start gap-3 my-9 '>
                        <span className='bg-red-600/20 text-red-600 p-1 w-6 h-6 grid content-center border border-red-600  rounded-full text-center'>✔</span>
                        <div className="w-full">
                            <h5 className='text-xl font-bold'>{title} </h5>
                            <p className=' text-slate-400  break-words'>{description} </p>
                        </div>
                    </div>
                ))
            }
        </article>
    )
}
