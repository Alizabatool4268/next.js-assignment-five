import React from 'react';
import {rye} from "@/app/fonts/font";

function Header() {
  return (
    <div className='w-[100%] h-[134px] bg-[#A29875] flex items-center'>
      
    <div className={`${rye.className} text-white text-[75px] w-[439px] md:text-[65px] sm:text-[w-55px] max-[462px]:text-[40px] min-[200px]:text-[35px]`}>
       MANZZARI</div>
    </div>
  )
}

export default Header;