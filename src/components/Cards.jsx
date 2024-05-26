import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.4' style={{position:'sticky', top:'10vh' }} className=' mt-[60vh]  mb-20 h-screen px-20 w-full gap-5 flex'>
            <div className='bg-[#004D43] h-[65vh] w-[47vw] rounded-2xl'>
                <h1 className='flex items-center justify-center text-7xl text-[#CDEA68] font-semibold tracking-tight mt-36'>ochi</h1>
                <div className="border mt-28 ml-10 border-[#CDEA68] inline-block px-3 py-0.5 rounded-3xl ">
                    <h1 className='text-[#CDEA68] tracking-tight'>©2022-2024</h1>
                </div>
            </div>
            <a className='bg-zinc-700 h-[65vh] w-[24vw] rounded-2xl relative flex relative flex flex-col justify-center items-center justify-center items-center ' href='https://clutch.co/profile/ochi-design-presentation-design-agency#summary'>
                <img className='h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
                <button className=' absolute border-[1.5px] border rounded-3xl px-3 py-0.5 tracking-tight  bottom-9 uppercase'>Rating 5.0 on clutch</button>
            </a>
            <a className='bg-zinc-700 h-[65vh] w-[24vw] rounded-2xl relative flex relative flex flex-col justify-center items-center justify-center items-center ' href='https://thefutur.com/alumni'>
                <img className='h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
                <button className=' absolute border-[1.5px] border rounded-3xl px-3 py-0.5 tracking-tight  bottom-9 uppercase'>business bootcamp alumini</button>
            </a>
        </div>
    )
}

export default Cards