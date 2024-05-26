import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full  p-20  bg-[#CDEA68] rounded-t-3xl rounded-b-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-none'> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full  bg-[#CDEA68]'>
        <div className="flex leading-none gap-80  mt-[4vw] border-zinc-400 border-t-[1px] ">
          <h1>What you can expect:</h1>
          <h1>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
          </h1>
          {/* <div className=" flex flex-col flex flex-col items-start">
            <a href='https://www.instagram.com/ochi_design/'>Instagram</a>
            <a href='https://www.behance.net/ochi_design'>Behance</a>
            <a href='https://www.facebook.com/people/OCHI-presentation-design/100067218942460/'>Facebook</a>
            <a href='https://www.linkedin.com/company/56403597'>Linkedin</a>
          </div> */}
        </div>
        {/* <div className="mt-[25vw] border-zinc-400 border-t-2 "></div> */}
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-[25vw] border-[#a1b562]">
          <div className='w-1/2 -mt-6 '>
            <h1 className='text-5xl tracking-tight'>Our approach:</h1>
            <button className='bg-zinc-900 gap-10 px-5 py-3.5 flex items-center uppercase mt-6 rounded-full text-white'>Read More
              <div className='rounded-full bg-zinc-100 w-2 h-2 '></div></button>
          </div>
          <img className=' -mt-5 w-[47vw] h-[33vw] rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;

