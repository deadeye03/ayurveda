'use client'
import Image from "next/image"
import { useState } from "react";


const img = [
  {
    id: '1',
    url: '/pic1.jpeg',
    title: 'STRENGTH',

  },
  {
    id: '2',
    url: '/pic2.jpeg',
    title: 'MOBILITY',

  },
  {
    id: '3',
    url: '/pic3.jpeg',
    title: 'DRILLS',

  }
]


export default function Home() {
  const [hoverId, setHoverId] = useState<string | null>('2');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white ">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl ">
        <div className=" flex items-center justify-center gap-0">
          {img.map((image) => (
            <div key={image.title} className={`relative transition-all duration-500 ease-in-out 
          ${image.id === hoverId ? 'w-[500px]' : 'w-[300px]'}
          ${hoverId === null && image.id === '2' ? 'w-[500px]' : ''}
          `}
          onMouseEnter={() => setHoverId(image.id)}
          onMouseLeave={() => setHoverId('2')}
          >
              <div className="relative h-[400px]">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-blact/30"/>
                 <h1 className={`absolute top-6 left-6 text-white text-xl font-bold ${image.title!=='STRENGTH'?'text-neutral-400':''}`}>{image.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

