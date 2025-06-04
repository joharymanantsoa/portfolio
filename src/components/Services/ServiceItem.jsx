import React from 'react';
import'./Service.css';
export default function SerciceItem({data}) {
  return (
    
    <div className="flex gap-2 my-7">
       <img src={data.icon} className='h-15 w-15 object-contain animate-pulse duration-2000 sary' alt="" /> 
        <div>
          <h4 className="text-xl font-bold text-red-500 typing">{ data.title}</h4>
           <p className=" mb-4 mt-3">{data.description}</p>
        </div>
    </div>
     
    
  )
}
