import { useState } from 'react';
import { motion } from 'framer-motion';

function Featured() {
  const [showFydeText, setShowFydeText] = useState(false);
  const [showViseText, setShowViseText] = useState(false);
  const [showTrawaText, setShowTrawaText] = useState(false);
  const [showPremiumText, setShowPremiumText] = useState(false);

  return (
    <div className='w-full py-20 rounded-t-3xl '>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700 '>
        <h1 className='text-5xl tracking-tight '>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div
            className='cardcontainer relative w-1/2 h-[80vh]'
            onMouseEnter={() => setShowFydeText(true)}
            onMouseLeave={() => setShowFydeText(false)}
          >
            <motion.h1
              className={`absolute text-[#CDEA68] left-full px-1 ml-[-7vw] top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-semibold text-8xl ${showFydeText ? 'visible' : 'hidden'}`}
              whileHover={{ scale: 1.1 }}
            >
              FYDE
            </motion.h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' alt='FYDE'></img>
            </div>
          </div>
          <div
            className='cardcontainer relative w-1/2 h-[80vh]'
            onMouseEnter={() => setShowViseText(true)}
            onMouseLeave={() => setShowViseText(false)}
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <motion.h1
                className={`absolute text-[#CDEA68] right-full px-1 mr-[-6vw] top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-semibold text-8xl ${showViseText ? 'visible' : 'hidden'}`}
                whileHover={{ scale: 1.1 }}
              >
                VISE
              </motion.h1>
              <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt='VISE'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 gap-16 px-20 flex'>
        <div className='gap-2  flex'>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>Audit</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>copywriting</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>sales deck</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>slides design</button>
        </div>
        <div className='gap-2  flex'>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>agency</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>company presentation</button>
        </div>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div
            className='cardcontainer relative w-1/2 h-[80vh]'
            onMouseEnter={() => setShowTrawaText(true)}
            onMouseLeave={() => setShowTrawaText(false)}
          >
            <motion.h1
              className={`absolute text-[#CDEA68] left-full px-1 ml-[-7vw] top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-semibold text-8xl ${showTrawaText ? 'visible' : 'hidden'}`}
              whileHover={{ scale: 1.1 }}
            >
              TRAWA
            </motion.h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg' alt='FYDE'></img>
            </div>
          </div>
          <div
            className='cardcontainer relative w-1/2 h-[80vh]'
            onMouseEnter={() => setShowPremiumText(true)}
            onMouseLeave={() => setShowPremiumText(false)}
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <motion.h1
                className={`absolute text-[#CDEA68] right-full px-1 mr-[-23vw] top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-semibold text-8xl ${showPremiumText ? 'visible' : 'hidden'}`}
                whileHover={{ scale: 1.1 }}
              >
                PREMIUM BLEND
              </motion.h1>
              <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png' alt='VISE'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 gap-20 px-20 flex'>
        <div className='gap-2 flex'>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>Brand identity</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>design reasearch</button>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>investor deck</button>
        </div>
        <div className='gap-2  flex'>
          <button style={{ border: '1px solid white' }} className='font-light px-5 py-1 rounded-full tracking-tight uppercase'>branded template</button>
        </div>
      </div>
      <div className='flex items-center justify-center mt-28'>
        <button style={{ border: '1px solid white' }} className=' gap-10 px-5 py-3 flex items-center tracking-tight  uppercase  rounded-full text-white'>view all case studies
          <div className='rounded-full bg-zinc-100 w-2 h-2 '></div>
        </button>
      </div>
    </div>
  );

}

export default Featured;