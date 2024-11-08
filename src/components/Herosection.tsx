import React from 'react'
import Image from 'next/image';
import { libreBodoni } from "@/app/fonts/font";

function Herosection() {
  return (
    <div className='flex justify-evenly flex-row mt-8'>
      <div className={`${libreBodoni.className} flex justify-center flex-col text-black text-[44px] mt-20 md:text-[37px] sm:text-[30px] max-[600px]:text-[25px] max-[330px]:text-[17px] max-[500px]:mt-2 max-[425px]:mt-3`}> 
         IMPECCABLE <br /> CRAFTSMANSHIP AND <br />FINESSE 
         <p className='text-[30px] md:text-[20px] max-[330px]:text-[10px] max-[730px]:text-[15px] text-[#787054] mt-4'>
           An example of intricate workmanship and detail, elegant <br />necklaces and long and short chains form 
           a part of our <br /> desirable collection.
          </p>
          <button className='bg-[#A29875] h-10 w-32 rounded-[10px] border-none text-white text-[18px] mt-3 max-[330px]:w-20 max-[330px]:text-[10px] max-[330px]:h-8 '>Explore Now</button>
        </div> 
        <div>
         <Image
          height={620}
          width={460}
          src="/model-asignfive.png.png"
          alt="model"
         ></Image>
        </div>
    </div>
  )
}

export default Herosection;