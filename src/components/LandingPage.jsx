import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

   return (
      <div data-scroll data-scroll-section data-scroll-speed='-.6' className='w-full h-screen bg-zinc-900 pt-1 mb-[40vh]'>
         <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
               return (<div className='masker'>
                  <div className='w-fit flex items-end overflow-hidden'>
                     {index === 1 && (
                        <motion.div
                           initial={{ paddingLeft: 0, paddingRight: 0 }}
                           animate={{ paddingLeft: 60, paddingRight: 60 }}
                           transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                           className='  rounded-md  mr-2 py-9 px-16 relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'>
                        </motion.div>
                     )}
                     <h1 className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-[`Founders_Grotesk_X-Condensed`] font-medium'>
                        {item}
                     </h1>
                 </div>
               </div>
               );
            })}
         </div>
         <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO",].map((item, index) => (
               <p className='text-md font-ligt tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
               <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase '>START THE PROJECT</div>
               <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                  <span className='rotate-[45deg]'><FaArrowUpLong /></span></div>
            </div>
         </div>
      </div>
   )
}

export default LandingPage