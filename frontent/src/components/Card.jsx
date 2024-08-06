//new
import React from 'react';

export default function Card({ item }) {
  return (
    <div className="relative bg-white shadow  p-[1.25rem] md:rounded-2xl rounded-lg overflow-hidden  lg:p-8 border border-red-200">
      <div className='relative pb-8 border md:rounded-2xl rounded-lg overflow-hidden  border-black'>
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded" />
        <p className="absolute transform -rotate-45 bottom-6 md:bottom-[1.5rem] right-2 lg:right-4 bg-blue-500 text-white px-2 py-1 rounded">
          {`$ ${item.price}`}
        </p>
      </div>
      <p className="mt-2 font-bold">{item.title}</p>
    </div>
  );
}

