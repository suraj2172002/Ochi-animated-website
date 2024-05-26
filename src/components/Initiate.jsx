import React, { useState } from 'react';
import { useEffect } from 'react';

function Initiate() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })


  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.4' className='relative bg-[#CDEA68] w-full min-h-screen  rounded-t-3xl'>
      <div className='py-40 leading-none text-center'>
        <h1 className='text-zinc-900 text-[15vw] tracking-tight font-bold'>READY</h1>
        <h1 className='text-zinc-900 text-[15vw] tracking-tight font-bold'>TO START</h1>
        <h1 className='text-zinc-900 text-[15vw] tracking-tight font-bold'>THE PROJECT?</h1>

        <div className='absolute left-1/2 top-[75vh] transform -translate-x-1/2 -translate-y-1/2 flex gap-10 '>
          <div className='flex justify-center items-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full'>
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div className='flex items-center justify-center py-12 uppercase'>play</div>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4'>
                <div className='bg-zinc-100 ml-[1%] w-4 h-4 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full'>
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div className='flex items-center justify-center py-12 uppercase'>play</div>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4'>
                <div className='bg-zinc-100 ml-[1%] w-4 h-4 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col  py-44 mt-[-25vw]'>
        <button className='bg-zinc-900 gap-10 px-5 py-3.5 flex items-center justify-center uppercase rounded-full text-white '>Start the project
          <div className='rounded-full bg-zinc-100 w-2 h-2 '></div>
        </button>
        <h1 className='uppercase text-zinc-900 py-3'>or</h1>
        <button className='bg-zinc-900 gap-10 px-5 py-3.5 flex items-center justify-center uppercase  rounded-full text-white'>hello@ochi.design
          <div className='rounded-full bg-zinc-100 w-2 h-2 '></div>
        </button>
      </div>
    </div>

  );

}

export default Initiate;
